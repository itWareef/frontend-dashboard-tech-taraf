const ErrorMsg = ({ formik, name }) => {
  return (
    <>
      {formik.errors[name] && formik.touched[name] ? (
        <span className="error text-destructive">{formik.errors[name]}</span>
      ) : null}
    </>
  );
};

export default ErrorMsg;
