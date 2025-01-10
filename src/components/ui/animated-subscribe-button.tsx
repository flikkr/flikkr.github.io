"use client";

import { AnimatePresence, motion } from "motion/react";
import React from "react";

export enum ButtonState {
  NORMAL = "NORMAL",
  LOADING = "LOADING",
  SUBMITTED = "SUBMITTED",
}

interface AnimatedSubscribeButtonProps {
  buttonState: ButtonState;
  buttonColor: string;
  buttonTextColor?: string;
  initialText: React.ReactElement | string;
  changeText: React.ReactElement | string;
  loadingText?: React.ReactElement | string;
  disabled?: boolean;
  type?: "submit" | "button" | "reset" | undefined;
}

export const AnimatedSubscribeButton: React.FC<
  AnimatedSubscribeButtonProps
> = ({
  buttonState,
  buttonColor,
  buttonTextColor = "#ffffff",
  initialText,
  changeText,
  loadingText = "Submitting...",
  disabled = false,
  type = "submit",
}) => {
  const isDisabled = buttonState !== ButtonState.NORMAL || disabled;

  return (
    <AnimatePresence mode='wait'>
      {buttonState === ButtonState.SUBMITTED ? (
        <motion.button
          className='relative flex h-10 w-[200px] items-center justify-center overflow-hidden rounded-md bg-white outline outline-1 outline-black'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          disabled={true}
        >
          <motion.span
            key='action'
            className='relative flex h-full w-full items-center justify-center font-semibold'
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            style={{ color: buttonColor }}
          >
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className='relative flex h-10 w-[200px] cursor-pointer items-center justify-center rounded-md border-none'
          style={{ backgroundColor: buttonColor, color: buttonTextColor }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          disabled={isDisabled}
          type={type}
        >
          <motion.span
            key='reaction'
            className='relative flex items-center justify-center font-semibold'
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {buttonState === ButtonState.LOADING ? (
              <span className='inline-flex items-center'>
                <svg
                  className='animate-spin -ml-1 mr-2 h-4 w-4'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  />
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  />
                </svg>
                {loadingText}
              </span>
            ) : (
              initialText
            )}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
