import React/*, { useContext }*/ from 'react';
// import SmurfContext from '../contexts/SmurfContext';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import './SmurfForm.css';

function SmurfForm({ errors, touched}) {

    return (

        <Form >
            <div>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field className='field' type='text' name='name' placeholder='Name' />
            </div>
            <div>
                {touched.age && errors.name && <p>{errors.age}</p>}
                <Field className='field' type='number' name='age' placeholder='Age' />
            </div>
            <div>
                {touched.height && errors.height && <p>{errors.height}</p>}
                <Field className='field' type='text' name='height' placeholder='Height' />
            </div>
            <button type='submit'>Submit!</button>
        </Form>
    );
}

const FormikSmurfForm = withFormik({
    mapPropsToValues({ name, age, height, setSmurfs }) {
      return {
        name: name || "",
        age: age || "",
        height: height || "",
        setSmurfs: setSmurfs
      };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required(),
        age: Yup.number()
            .integer()
            .positive()
            .required('Age is Required and must be a number!'),
        height: Yup.number('Value must be a number!')
            .integer('Value must be a number')
            .required()
    }),
  
    handleSubmit(values, { props }) {
      //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
      axios.post('http://localhost:3333/smurfs', {
          name: values.name,
          age: values.age,
          height: values.height + 'cm'
      })
        .then((res) => {
            props.setSmurfs(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
})(SmurfForm);
  
export default FormikSmurfForm;

