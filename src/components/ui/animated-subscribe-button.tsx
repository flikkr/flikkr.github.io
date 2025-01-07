"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

interface AnimatedSubscribeButtonProps {
  buttonColor: string;
  buttonTextColor?: string;
  subscribeStatus?: boolean;
  initialText: React.ReactElement | string;
  changeText: React.ReactElement | string;
  loadingText?: React.ReactElement | string;
  disabled?: boolean;
  validate?: () => boolean;
  allowControlByParent?: boolean;
}

export const AnimatedSubscribeButton: React.FC<
  AnimatedSubscribeButtonProps
> = ({
  buttonColor,
  subscribeStatus = false,
  buttonTextColor,
  changeText,
  initialText,
  disabled = false,
  loadingText,
  validate,
  allowControlByParent = false,
}) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);

  const currentSubscribedState = allowControlByParent
    ? subscribeStatus
    : isSubscribed;

  return (
    <AnimatePresence mode='wait'>
      {currentSubscribedState ? (
        <motion.button
          className='relative flex h-10 w-[200px] items-center justify-center overflow-hidden rounded-md bg-white outline outline-1 outline-black'
          onClick={() =>
            !disabled &&
            (validate?.call(this) ?? true) &&
            setIsSubscribed(false)
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          disabled={disabled}
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
          onClick={() =>
            !disabled && (validate?.call(this) ?? true) && setIsSubscribed(true)
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          disabled={disabled}
        >
          <motion.span
            key='reaction'
            className='relative flex items-center justify-center font-semibold'
            initial={{ x: 0 }}
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
