const validation = (values) => {
  let errors = {};

  if (!values.fname) {
    errors.fname = "Name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S/.test(values.email)) {
    errors.email = "Email is invalid";
  }
  return errors;
};

export default validation;
