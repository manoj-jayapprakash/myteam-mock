import React, { ComponentProps } from 'react';

type TProps =
  | {
      className?: string;
      model: 'primary';
      mode: 'light' | 'dark';
      text: string;
    }
  | {
      model: 'secondary';
      text: string;
      mode: 'light';
      className?: string;
    };

function Buttons({
  model,
  mode,
  text,
  className = '',
  ...props
}: ComponentProps<'button'> & TProps) {
  const commonButtonStyles =
    'border-2 border-solid rounded-3xl font-semibold font-livvic text-base px-8 py-2.5 w-fit';
  const primaryLightStyles =
    'border-white bg-transparent hover:bg-white text-white hover:text-secondary-dark-green';
  const primaryDarkStyles =
    'border-secondary-sacramento-green text-secondary-sacramento-green hover:text-white hover:bg-secondary-sacramento-green';
  const secondaryLightStyles =
    'border-white bg-white hover:bg-secondary-rapture-blue text-secondary-dark-green hover:text-secondary-dark-green hover:border-secondary-rapture-blue';

  if (model === 'primary')
    return (
      <button
        className={`${commonButtonStyles} ${
          mode === 'light' ? primaryLightStyles : primaryDarkStyles
        } ${className}`}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {text}
      </button>
    );

  return (
    <button
      className={`${commonButtonStyles} ${secondaryLightStyles} ${className}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {text}
    </button>
  );
}

export default Buttons;
