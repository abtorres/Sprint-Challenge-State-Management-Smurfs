import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import axios from 'axios';

function SmurfForm({ errors, touched, values }) {
    return (
        <Form>
            <div>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field type='text' name='name' placeholder='name' />
            </div>
            <div>
                {touched.age && errors.name && <p>{errors.age}</p>}
                <Field type='text' name='age' placeholder='age' />
            </div>
            <div>
                {touched.height && errors.height && <p>{errors.height}</p>}
                <Field type='text' name='height' placeholder='height' />
            </div>
            <button type='submit'>Submit!</button>
        </Form>
    );
}

const FormikSmurfForm = withFormik({
    mapPropsToValues({ name, age, height }) {
      return {
        name: name || "",
        age: age || "",
        height: height || ""
      };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required(),
        age: Yup.number()
            .integer()
            .required(),
        height: Yup.number()
            .required()
    }),
  
    handleSubmit(values) {
    //   console.log(values);
    //   console.log(values.name)
      //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
      axios.post('http://localhost:3333/smurfs', {
          name: values.name,
          age: values.age,
          height: values.height
      })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
})(SmurfForm);
  
export default FormikSmurfForm;

