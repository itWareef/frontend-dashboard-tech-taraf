import * as Yup from "yup";

export const initialValues = {
  term: "",
  category: "",
  unit: "",
  price: "",
};

export const AddOfferTermSchema = Yup.object({
  term: Yup.string()
    .min(3, "البند يجب ان يكون 3 حروف على الاقل")
    .required("البند مطلوب"),
  category: Yup.string()
    .min(3, "الصنف يجب ان يكون 3 حروف على الاقل")
    .required("الصنف مطلوب"),
  unit: Yup.string()
    .min(3, "الوحدة يجب ان يكون 3 حروف على الاقل")
    .required("الوحدة مطلوبة"),
  price: Yup.number()
    .min(1, "السعر يجب ان يكون رقم واحد على الاقل")
    .positive("السعر يجب ان يكون رقم موجب")
    .required("السعر مطلوب"),
});
