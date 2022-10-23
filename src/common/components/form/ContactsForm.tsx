import {useFormik} from 'formik';
import React, {useRef} from 'react';
import styles from "./../../../contacts/Contacts.module.scss"
import emailjs from "@emailjs/browser";

type FormikErrorType = {
    user_email?: string
    user_name?: string
    message?: string
}

const ContactsForm = () => {

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // @ts-ignore
        emailjs.sendForm('service_mtw24jk', 'contact_form555', form.current, 'YcHigeCCF04HRs1lb')
            .then((result) => {
                console.log(result.text);
                alert(result.text)
            }, (error) => {
                console.log(error.text);
                alert(error.text)
            });
    };

    const formik = useFormik({
        initialValues: {
            user_email: "",
            user_name: "",
            message: ""
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.user_email) {
                errors.user_email = 'Required';
            } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,}$/i.test(values.user_email)) {
                errors.user_email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: (values) => {

            alert(JSON.stringify(values))
            formik.resetForm()
        }
    })
    return (
        <form ref={form} onSubmit={sendEmail} className={styles.form}>

            <label>
                <input type="text"
                       placeholder={'name'}
                       {...formik.getFieldProps("user_name")}
                />
            </label>
            {formik.touched.user_name && formik.errors.user_name ?
                <div style={{color: "orange"}}>{formik.errors.user_name}</div> : null}
            <input type='email'
                   placeholder={'e-mail'}
                   {...formik.getFieldProps("user_email")}
            />
            {formik.touched.user_email && formik.errors.user_email ?
                <div style={{color: "orange"}}>{formik.errors.user_email}</div> : null}
            <textarea placeholder={'Insert your message'}
                      {...formik.getFieldProps("message")}
            />
            <button type={'submit'} className={styles.button}>Отправить</button>
        </form>
    )
}

export default ContactsForm;