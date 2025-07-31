import * as Yup from "yup";

export const initialValues = {
  name: "",
  phone_number: "",
  bill: "",
  bill_number: "",
  pictures: [],
};

export const AddNewPaymentSchema = Yup.object({
  name: Yup.string()
    .min(3, "الاسم يجب ان يكون على الاقل 3 حروف")
    .max(15, "الاسم يجب ان يكون على الاكثر 15 حروف")
    .required("الاسم مطلوب"),
  phone_number: Yup.string()
    .min(10, "الرقم يجب ان يكون مكون من 11 رقم")
    .max(10, "الرقم يجب ان يكون مكون من 11 رقم")
    .required("الرقم مطلوب"),
  bill: Yup.number().required("القيمة مطلوبة"),
  bill_details: Yup.string()
    .max(50, "يجب ان لا يزيد الوصف عن 50 حرف")
    .required("التفاصيل مطلوبة"),
  pictures: Yup.array().min(1, "يجب إضافة صورة واحدة على الأقل"),
});
