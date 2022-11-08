import { useState } from 'react';

function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  const onValueChangeHandler = (ev) => {
    setValue(ev.target.value);
  };

  return [value, onValueChangeHandler];
}

export default useInput;
