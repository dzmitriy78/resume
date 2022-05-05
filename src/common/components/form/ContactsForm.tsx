import React from 'react';
import styles from "./../../../contacts/Contacts.module.scss"
import {ErrorMessage, Field, Form, Formik} from "formik";

interface Values {
    email: string
    phone: string
    message: string
}

interface Errors {
    email?: string
}

const ContactsForm = () => {
    return (
        <Formik
            initialValues={{email: "", phone: "", message: ""}}
            validate={values => {
                const errors: Errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={async (values: Values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {() => (
                <Form className={styles.form}>
                    <Field className={styles.input} type={'text'} name={'email'} placeholder={'e-mail'}/>
                    <div style={{color: "orange"}}>
                        <ErrorMessage name="email" component="div"/>
                    </div>
                    <Field className={styles.input} type={'phone'} name={'phone'} placeholder={'phone'}/>
                    <div style={{color: "orange"}}>
                        <ErrorMessage name="phone" component="div"/>
                    </div>
                    <Field component={"textarea"} name={'message'} placeholder={'Insert your message'}/>
                    <button type={'submit'} className={styles.button}>Отправить</button>
                </Form>
            )}
        </Formik>
    )
}

export default ContactsForm;