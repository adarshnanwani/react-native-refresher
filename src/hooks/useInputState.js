import {useState} from 'react';

export const useInputState = initialValue => {
  const [value, setValue] = useState(initialValue);
  const resetValue = () => {
    setValue('');
  };
  return [value, setValue, resetValue];
};
