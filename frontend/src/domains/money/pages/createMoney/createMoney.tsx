import { Conteiner, StyledErrorMessage } from "./styled";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import useAuthUser from "react-auth-kit/hooks/useAuthUser";

interface FormValues {
  id_account: number;
  name: string;
  value: number;
  option: boolean;
  pago: boolean;
}

const initialValues: FormValues = {
  id_account: 999,
  name: "",
  value: 0,
  option: false,
  pago: false,
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required").min(3, "Name is too short"),
  value: Yup.number()
    .required("Value is required")
    .min(0, "Value must be positive"),
  option: Yup.boolean().required("Type is required"),
});

export default function CreateMoney() {
  const auth: any = useAuthUser();

  async function handleSubmit(values: FormValues) {
    values.id_account = auth.userId;

    const url = import.meta.env.VITE_API_ADD_MONEYS;
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (response.status === 201) {
      console.log("Money added successfully");
      // Resetting form values
      initialValues.name = "";
      initialValues.value = 0;
      initialValues.option = false;
      initialValues.pago = false;
    }
  }

  return (
    <Conteiner>
      <div className="title">
        <h1>Add Money</h1>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className="form">
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <StyledErrorMessage name="name" component="div" />

            <label htmlFor="value">Value</label>
            <Field name="value" type="number" />
            <StyledErrorMessage name="value" component="div" />

            <div className="radio_btn">
              <label>
                <input
                  type="radio"
                  name="option"
                  value="true"
                  onChange={() => setFieldValue("option", true)}
                />
                Crédito
              </label>
              <label>
                <input
                  type="radio"
                  name="option"
                  value="false"
                  onChange={() => setFieldValue("option", false)}
                />
                Débito
              </label>
              <StyledErrorMessage name="option" component="div" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </Conteiner>
  );
}
