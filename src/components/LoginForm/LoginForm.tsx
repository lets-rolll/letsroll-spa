import { useFormik } from "formik";
import { Input } from "../Input/Input";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.scss";

const LoginSchema = yup.object().shape({
  email: yup.string().required("Required"),
  password: yup.string().required("Required"),
});

export function LoginForm() {
  const {
    values,
    errors,
    touched,
    isValid,
    dirty,
    handleSubmit,
    handleChange,
    handleBlur,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: "",
    },

    validationSchema: LoginSchema,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  let navigate = useNavigate();

  return (
    <div className={styles.loginForm}>
      <form onSubmit={handleSubmit}>
        <Input
          label="Почта"
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          touched={touched.email}
          errors={errors.email}
        ></Input>

        <Input
          label="Пароль"
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          touched={touched.password}
          errors={errors.password}
        ></Input>

        <Input
          label="Запомнить меня"
          type="checkbox"
          name="rememberMe"
          onChange={handleChange}
          value={values.rememberMe}
        ></Input>

        <button disabled={!isValid && !dirty} type="submit">
          Войти
        </button>

        <>или</>

        <button onClick={() => navigate("/sign-up")}>Зарегистрироваться</button>
      </form>
    </div>
  );
}
