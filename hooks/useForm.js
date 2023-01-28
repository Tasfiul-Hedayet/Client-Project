import { useState } from "react";

const useForm = (values) => {

  const [form, setForm] = useState(values);

  const onChangeHandler = (e) => {
    setForm((preFormValues) => ({
      ...preFormValues,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    form,
    onChangeHandler,
  };
};

export default useForm;
