import { useFormik } from "formik";
import { Input } from "../Input/Input";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const SignupSchema = yup.object().shape({
  firstName: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  middleName: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: yup
    .string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  age: yup
    .number()
    .positive()
    .integer()
    .max(150, "Too Much!")
    .required("Required"),
  email: yup.string().required("Required").email("Invalid email"),
  password: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),

  confirmPassword: yup
    .string()
    .required("Required")
    .oneOf([yup.ref("password")], "Пароли не совпадают"),
});

export function AuthForm() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      lastName: "",
      firstName: "",
      middleName: "",
      age: "",
      email: "",
      phoneNumber: "",
      confirmPassword: "",
      password: "",
    },

    validationSchema: SignupSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  let navigate = useNavigate();

  const registerHandler = () => {};

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input
        label="Имя"
        name="firstName"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.firstName}
        touched={touched.firstName}
        errors={errors.firstName}
      />

      <Input
        label="Фамилия"
        name="lastName"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.lastName}
        touched={touched.lastName}
        errors={errors.lastName}
      />

      <Input
        label="Отчество"
        name="middleName"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.middleName}
        touched={touched.middleName}
        errors={errors.middleName}
      />

      {/* <Input
        label="Возраст"
        name="age"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.age}
        touched={touched.age}
        errors={errors.age}
      /> */}

      <Input
        type="email"
        label="Почта"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        touched={touched.email}
        errors={errors.email}
      />

      <Input
        type="password"
        label="Пароль"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        touched={touched.password}
        errors={errors.password}
      />

      <Input
        type="password"
        label="Подтвердите пароль"
        name="confirmPassword"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.confirmPassword}
        touched={touched.confirmPassword}
        errors={errors.confirmPassword}
      />

      <button
        disabled={!isValid && !dirty}
        type="submit"
        onClick={registerHandler}
      >
        Зарегистрироваться
      </button>

      <>или</>

      <button onClick={() => navigate("/sign-in")}>Войти</button>
    </form>
  );
}
