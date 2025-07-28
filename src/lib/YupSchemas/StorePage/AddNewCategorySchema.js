import * as Yup from "yup";

export const initialValues = {
  name: "",
  features: "",
  section_id: "",
  price: "",
  description: "",
  picture: null,
  pictures: [],
};

export const AddNewCategorySchema = Yup.object({
  name: Yup.string()
    .min(3, "الاسم يجب ان يكون اكثر من 3 حروف")
    .max(15, "الاسم يجب ان يكون اكثر من 3 حروف")
    .required("الااسم مطلوب"),
  description: Yup.string()
    .min(3, "الوصف يجب ان يكون اكثر من 3 حروف")
    .max(50, "الوصف يجب ان يكون اقل من 50 حروف")
    .required("الوصف مطلوب"),
  price: Yup.number()
    .min(1, "الوصف يجب ان يكون رقم واحد على الاقل")
    .required("السعر مطلوب")
    .positive(),
  section_id: Yup.string().required("البند مطلوب"),
  features: Yup.string().required("الميزات مطلوبة"),
  picture: Yup.mixed().required("الصورة الرئيسية مطلوبة"),
  pictures: Yup.array().min(1, "يجب إضافة صورة واحدة على الأقل"),
});
