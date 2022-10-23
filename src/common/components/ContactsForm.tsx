import {useFormik} from 'formik';
import React, {useRef, useState} from 'react';
import styles from "../styles/Contacts.module.scss"
import emailjs from "@emailjs/browser";
import {InputTextarea} from "primereact/inputtextarea";
import {InputText} from 'primereact/inputtext';
import Message from "./Message";

type FormikErrorType = {
    user_email?: string
    user_name?: string
}

const ContactsForm = () => {

    const form = useRef<HTMLFormElement | null>(null);
    const [mes, setMes] = useState<string>("")
    const [errorMes, setErrorMes] = useState<string>("")

    const formik = useFormik({
        initialValues: {
            user_email: "",
            user_name: "",
            message: ""
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.user_name) {
                errors.user_name = 'Required'
            }
            if (!values.user_email) {
                errors.user_email = 'Required'
            } else if (!/^[A-Z\d._%+-]+@[A-Z\d.-]+\.[A-Z]{2,}$/i.test(values.user_email)) {
                errors.user_email = 'Invalid email address'
            }
            return errors;
        },
        onSubmit: async () => {
            if (form.current)
                try {
                    const res = await emailjs.sendForm('service_mtw24jk', 'contact_form555', form.current, 'YcHigeCCF04HRs1lb')
                    console.log(res.text)
                    setMes(`Сообщение отправлено. ${res.text}`)
                    setTimeout (()=>setMes(""), 3000)
                    formik.resetForm()
                } catch (error: any) {
                    console.log(error.text)
                    setErrorMes("Отправка завершилась неудачно(( Попробуйте еще раз.")
                    setTimeout (()=>setErrorMes(""), 3000)
                }
        }
    })
    return (<>
            <form ref={form} onSubmit={formik.handleSubmit} className={styles.form}>
                <InputText
                    placeholder={'name'}
                    {...formik.getFieldProps("user_name")}
                />
                {formik.touched.user_name && formik.errors.user_name
                    ? <div style={{color: "orange"}}>{formik.errors.user_name}</div>
                    : null}
                <InputText type='email'
                           placeholder={'e-mail'}
                           {...formik.getFieldProps("user_email")}
                />
                {formik.touched.user_email && formik.errors.user_email
                    ? <div style={{color: "orange"}}>{formik.errors.user_email}</div>
                    : null}
                <InputTextarea placeholder={'Insert your message'}
                               {...formik.getFieldProps("message")}
                />
                <button type={'submit'} className={styles.button}>Отправить</button>
            </form>
            {mes && <Message message={mes} errorMessage={""}/>}
            {errorMes && <Message message={""} errorMessage={errorMes}/>}
        </>
    )
}

export default ContactsForm;