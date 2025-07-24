import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useLogin from "@/hooks/Actions/auth/useLogin";
import { useFormik } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import BtnSubmit from "./BtnSubmit";
import CardLogo from "./CardLogo";
import ErrorMsg from "./ErrorMsg";

const LoginForm = () => {
  const { mutate, isPending, errorMsg } = useLogin();
  const [showPassword, setShowPassword] = useState(false);
  // usmanahmedfathy@gmail.com
  const handleSubmit = (values) => {
    console.log(values);
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);

    mutate({ data: formData });
  };
  const validationSchema = useMemo(() => {
    return Yup.object({
      email: Yup.string()
        .email("الرجاء إدخال بريد إلكتروني صحيح")
        .required("البريد الإلكتروني مطلوب"),
      password: Yup.string().required("كلمة المرور مطلوبة"),
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <CardLogo />

      <form
        onSubmit={formik.handleSubmit}
        className="space-y-5 mt-15 px-3 w-full md:w-[680px]"
        noValidate
      >
        {errorMsg && (
          <span className="error text-center block text-red-700">
            {errorMsg}
          </span>
        )}
        {/* Email */}
        <div className="space-y-2">
          <div className="relative">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="البريد الإلكتروني"
              className="pr-5 w-full h-[50px] text-2xl bg-input border-secondary placeholder:text-xl placeholder:text-muted"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
          </div>
          <ErrorMsg formik={formik} type="email" />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="كلمة المرور"
              className="pr-5 w-full h-[50px] text-2xl bg-input border-secondary placeholder:text-xl placeholder:text-muted"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute left-0 top-0 h-full px-3 py-0 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </Button>
          </div>
          <ErrorMsg formik={formik} type="password" />
        </div>

        <Link
          to="/auth/forgot-password"
          className="text-sm text-muted block text-center hover:text-secondary/90 transition-colors duration-200"
          aria-label="إعادة تعيين كلمة المرور"
        >
          هل نسيت كلمة المرور؟
        </Link>

        <BtnSubmit isPending={isPending} formik={formik} text="تسجيل الدخول" />
      </form>
    </div>
  );
};

export default LoginForm;
