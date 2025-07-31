import * as Yup from "yup";

export const initialValues = {
  name: "",
  description: "",
  picture: "",
};

export const AddNewFeatureSchema = Yup.object({
  name: Yup.string()
    .min(3, "الاسم يجب ان يكون على الاقل 3 حروف")
    .max(15, "الاسم يجب ان يكون على الاكثر 15 حروف")
    .required("الاسم مطلوب"),
  description: Yup.string().required("القسم مطلوب"),
  picture: Yup.mixed().required("الصورة مطلوبة"),
});
