import * as Yup from "yup";

export const initialValues = {
  code: "",
  discount_percentage: "",
  start_date: "",
  end_date: "",
  type_permission: "",
};

export const AddDiscountCouponSchema = Yup.object({
  code: Yup.string()
    .min(6, "الكود يجب ان يكون 6 حروف على الاقل")
    .required("الكود مطلوب"),
  discount_percentage: Yup.number()
    .min(1, "النسبة يجب ان يكون رقم واحد على الاقل")
    .max(3, "النسبة يجب ان تكون رقمين على الاكثر")
    .required("النسبة مطلوبة"),
  start_date: Yup.date()
    .required("التاريخ مطلوب")
    .typeError("صيغة التاريخ غير صحيحة"),
  end_date: Yup.date()
    .required("التاريخ مطلوب")
    .typeError("صيغة التاريخ غير صحيحة"),
  type_permission: Yup.string().required("الحقل مطلوب"),
});
