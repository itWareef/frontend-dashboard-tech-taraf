import * as Yup from "yup";

export const initialValues = {
  order_number: "",
  name: "",
  phone: "",
  date: "",
  details: "",
};

export const AddNewRecipientSchema = Yup.object({
  order_number: Yup.number().required("الرقم مطلوب"),
  name: Yup.string()
    .min(3, "الاسم يجب ان يكون اكثر من 3 حروف")
    .max(50, "الاسم يجب ان يكون اقل من 50 حروف")
    .required("الاسم مطلوب"),
  phone: Yup.string()
    .min(10, "الرقم يجب ان يكون مكون من 11 رقم")
    .max(10, "الرقم يجب ان يكون مكون من 11 رقم")
    .required("الرقم مطلوب"),
  date: Yup.string().required("التاريخ مطلوب"),
  details: Yup.string()
    .min(3, "التفاصيل يجب ان يكون اكثر من 3 حروف")
    .max(50, "التفاصيل يجب ان يكون اقل من 50 حروف")
    .required("التفاصيل مطلوبة"),
});
