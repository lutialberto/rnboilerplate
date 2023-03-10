import {useState} from 'react';
import {IFormErrors, IFormProps} from './Models';

export const useForm = <T>({
  defaultValues,
  validateForm,
  onSuccess,
  onError = () => {},
}: IFormProps<T>) => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState<IFormErrors<T>>();

  const handleChange = (name: string, value: any) => {
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
  };

  const handleSubmit = () => {
    const errorsFound = validateForm(values);
    setErrors(errorsFound);
    if (Object.keys(errorsFound).length > 0) {
      onError(values, errorsFound);
    } else {
      onSuccess(values);
    }
  };

  return {values, handleChange, handleSubmit, errors};
};
