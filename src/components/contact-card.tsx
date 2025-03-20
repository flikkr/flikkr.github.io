"use client";

import BlurFade from "./magicui/blur-fade";
import { useFormBold } from "@/hooks/useFormBold";

import { BLUR_FADE_DELAY } from "@/lib/constants";
import { useState } from "react";
import {
  AnimatedSubscribeButton,
  ButtonState,
} from "./ui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

export function ContactCard() {
  const [_, handleSubmit] = useFormBold("3KrRN");
  const [buttonState, setButtonState] = useState<ButtonState>(
    ButtonState.NORMAL
  );

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setButtonState(ButtonState.LOADING);
    handleSubmit({
      formRef: e,
      onSuccess: () => {
        console.log("form submitted");
        setButtonState(ButtonState.SUBMITTED);
      },
      onError: () => {
        console.error("form error");
        setButtonState(ButtonState.NORMAL);
      },
    });
  }

  return (
    <section id='contact'>
      <div className='grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12'>
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl mb-4'>
            Get in Touch
          </h2>
          <p className='mb-4'>
            Whether you have a project in mind, are looking for a collaborator,
            or simply want to chat about the latest tech trends, I&apos;d love
            to hear from you. Additionally, I am open to being hired for projects
            that align with my skills and interests. Let&apos;s discuss how we can
            work together to bring your vision to life.
          </p>

          <form onSubmit={handleFormSubmit} className='flex flex-col gap-4'>
            <input
              name='email'
              type='email'
              placeholder='Your Email'
              required
            />
            <textarea
              name='message'
              placeholder='Your Message'
              rows={4}
              required
            />
            <div className='flex items-center justify-center'>
              <AnimatedSubscribeButton
                buttonState={buttonState}
                buttonColor='#000000'
                buttonTextColor='#ffffff'
                initialText={
                  <span className='group inline-flex items-center'>
                    Submit{" "}
                    <ChevronRightIcon className='ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1' />
                  </span>
                }
                changeText={
                  <span className='group inline-flex items-center'>
                    <CheckIcon className='mr-2 size-4' />
                    Submitted{" "}
                  </span>
                }
              />
            </div>
          </form>
        </BlurFade>
      </div>
    </section>
  );
}
