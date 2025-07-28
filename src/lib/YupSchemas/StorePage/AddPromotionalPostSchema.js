import * as Yup from "yup";

export const initialValues = {
  name: "",
  content: "",
  picture: "",
};

export const AddPromotionalPostSchema = Yup.object({
  name: Yup.string()
    .min(3, "الاسم يجب ان يكون على الاقل 3 حروف")
    .max(15, "الاسم يجب ان يكون على الاكثر 15 حروف")
    .required("الاسم مطلوب"),
  content: Yup.string()
    .min(3, "الوصف يجب ان يكون اكثر من 3 حروف")
    .max(50, "الوصف يجب ان يكون اقل من 50 حروف")
    .required("القسم مطلوب"),
  picture: Yup.mixed().required("الصورة مطلوبة"),
});
