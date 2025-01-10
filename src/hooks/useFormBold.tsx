import { useState } from "react";

type ErrorState = {
  message: string;
  status: boolean;
};

export const useFormBold = (formId: string) => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState<ErrorState>({
    message: "",
    status: false,
  });

  const handleSubmit = (options: {
    formRef: React.FormEvent<HTMLFormElement>;
    recaptchaRef?: { current: { getValue: () => any } };
    onSuccess?: () => void;
    onError?: () => void;
  }) => {
    options.formRef.preventDefault();

    // Getting the Form data
    const data = new FormData(options.formRef.currentTarget);
    const value = Object.fromEntries(data.entries());
    const finalData = { ...value };

    // Conditionally add "g-recaptcha-response" if recaptchaRef is provided
    if (options.recaptchaRef) {
      finalData["g-recaptcha-response"] =
        options.recaptchaRef.current.getValue();
    }

    //check if the values is empty
    //@ts-ignore
    const isEmpty = !Object.values(value).some((x) => x !== null && x !== "");
    if (isEmpty) {
      return setError({
        message: "Please fill the form!",
        status: true,
      });
    }

    // submit the form
    fetch(`https://formbold.com/s/${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => {
        setSucceeded(true);
        options.onSuccess?.();
      })
      .catch((error) => {
        setError({
          message: error.message,
          status: true,
        });
        setSucceeded(false);
        options.onError?.();
      });
  };

  return [{ error, succeeded }, handleSubmit] as const;
};
