import { useState } from 'react';

/**
 * Custom hook useForm for handling controlled inputs and validation
 * Day 24 task.
 */
export const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    
    // Clear error message when user starts typing again
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (validate) {
      const fieldErrors = validate(values);
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] || '' }));
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    if (validate) {
      const formErrors = validate(values);
      setErrors(formErrors);
      
      const hasErrors = Object.keys(formErrors).some((key) => formErrors[key]);
      if (!hasErrors) {
        onSubmit(values);
      }
    } else {
      onSubmit(values);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setValues,
    setErrors,
  };
};

export default useForm;
