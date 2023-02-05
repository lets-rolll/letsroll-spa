import { useFormik } from "formik";
import { Input } from "../Input/Input";
import * as yup from "yup";

const SignupSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  email: yup.string().required("Required").email("Invalid email"),
  password: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
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
      firstName: "",
      lastName: "",
      confirmPassword: "",
      password: "",
      email: "",
    },

    validationSchema: SignupSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  //   const submitHandler = (event: React.FormEvent) => {
  //     event.preventDefault();
  //   };

  const loginHandler = () => {};

  const registerHandler = () => {};

  //   const changeHandler = () => {};

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input
        label="Имя"
        name="firstName"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.firstName}
      />

      {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}

      <Input
        type="email"
        label="Почта"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />

      {touched.email && errors.email && <div>{errors.email}</div>}

      <Input
        type="password"
        label="Пароль"
        name="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />

      {touched.password && errors.password && <div>{errors.password}</div>}

      <Input
        type="password"
        label="Подтвердите пароль"
        name="confirmPassword"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.confirmPassword}
      />

      {touched.confirmPassword && errors.confirmPassword && (
        <div>{errors.confirmPassword}</div>
      )}

      <button onClick={loginHandler}>Войти</button>

      <button
        disabled={!isValid && !dirty}
        type="submit"
        onClick={registerHandler}
      >
        Зарегистрироваться
      </button>
    </form>
  );
}
