import { useLocalStorage } from '../hooks/useLocalStorage';

export const useInput = (key, initialValue) => {
  const [value, setValue] = useLocalStorage(key, initialValue);

  const handleChanges = event => {
    setValue(event.target.value);
  };

  return [value, handleChanges, setValue];
};
