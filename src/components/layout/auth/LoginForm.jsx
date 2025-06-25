import { useFormik } from "formik";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import ErrorMsg from "./ErrorMsg";
import CardLogo from "./CardLogo";
import BtnSubmit from "./BtnSubmit";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    console.log(values);
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
  });

  return (
    <div className="w-full flex flex-col  items-center justify-center ">
      <CardLogo />

      <form
        onSubmit={formik.handleSubmit}
        className="space-y-5 mt-15 w-full md:w-[680px] "
      >
        <div className="space-y-2">
          <div className="relative">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="البريد الإلكتروني"
              className="pr-5 w-full h-[50px] text-2xl bg-input border-secondary placeholder:text-xl placeholder:text-muted"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
          </div>
          <ErrorMsg formik={formik} type={"email"} />
        </div>

        <div className="space-y-2">
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="كلمة المرور"
              className="pr-5 w-full h-[50px] text-2xl bg-input border-secondary placeholder:text-xl placeholder:text-muted"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute left-0 top-0 h-full px-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </Button>
          </div>
          <ErrorMsg formik={formik} type={"password"} />
        </div>

        <Link
          to="/auth/forgot-password"
          className="text-sm  text-muted  block text-center  hover:text-secondary/90  transition-colors duration-200"
          aria-label="إعادة تعيين كلمة المرور"
        >
          هل نسيت كلمة المرور؟
        </Link>

        <BtnSubmit formik={formik} text="تسجيل الدخول" />
      </form>
    </div>
  );
};

export default LoginForm;
