import { useFormik } from "formik";
import styles from "./ContactFormPage.module.scss";

export function ContactFormPage() {
  const formik = useFormik({
    initialValues: {
      option: "",
      message: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={styles.ContactPage}>
      <form onSubmit={formik.handleSubmit} noValidate>
        <label htmlFor="">Обращение в техподдержку</label>
        <label>Выберете тему обращения:</label>
        <select
          name="option"
          id="option"
          onChange={formik.handleChange}
          value={formik.values.option}
        >
          <option>Просто так</option>
          <option>Мне нечем заняться</option>
        </select>
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={10}
          onChange={formik.handleChange}
          value={formik.values.message}
        ></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
