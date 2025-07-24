const ErrorMsg = ({ formik, type }) => {
  return (
    <>
      {formik.errors[type] && formik.touched[type] ? (
        <span className="error text-center block text-red-700">
          {formik.errors[type]}
        </span>
      ) : null}
    </>
  );
};

export default ErrorMsg;
