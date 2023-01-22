import * as yup from "yup";

export const courseSchema = yup.object().shape({
  image: yup.string().required("pleace write image url").url("must be url!"),
  name: yup.string().required("pleace write course name"),
  title: yup.string().required("pleace write cousre title"),
  description: yup
    .string()
    .required("pleace write description")
    .min(50, "must be min 50 characters!"),
  price: yup
    .number()
    .max(200, "price must be max 200")
    .required("pleace write price"),
});
