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
  phone_number: Yup.number()
    .min(12, "رقم الهاتف يجب ان يكون 12 رقم")
    .max(12, "رقم الهاتف يجب ان يكون 12 رقم")
    .required("الرقم مطلوب"),
  bill: Yup.number().required("القيمة مطلوبة"),
  bill_number: Yup.number().required("رقم الفاتورة مطلوب"),
  pictures: Yup.array().min(1, "يجب إضافة صورة واحدة على الأقل"),
});
