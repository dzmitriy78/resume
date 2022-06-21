import {useFormik} from 'formik';
import React from 'react';
import styles from "./../../../contacts/Contacts.module.scss"

type FormikErrorType = {
    email?: string
    phone?: string
    message?: string
}

const ContactsForm = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            phone: "",
            message: ""
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if ((values.phone.length) && (!/^\+\d+\(\d{2,}\)\d{6,}$/.test(values.phone))) {
                errors.phone = 'Invalid phone number';
            }
            return errors;
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values))
            formik.resetForm()
        }
    })
    return <form className={styles.form} onSubmit={formik.handleSubmit}>
        <input type='email'
               placeholder={'e-mail'}
               {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ?
            <div style={{color: "orange"}}>{formik.errors.email}</div> : null}
       <label >
        <input type="tel"
               placeholder={'phone: +___(___)_______'}
               {...formik.getFieldProps("phone")}
        />
       </label>
        {formik.touched.phone && formik.errors.phone ?
            <div style={{color: "orange"}}>{formik.errors.phone}</div> : null}
        <textarea placeholder={'Insert your message'}
                  {...formik.getFieldProps("message")}
        />
        <button type={'submit'} className={styles.button}>Отправить</button>
    </form>
}

export default ContactsForm;