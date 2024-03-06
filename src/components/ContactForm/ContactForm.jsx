import css from "./ContactForm.module.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const ContactForm = ({ onAdd }) => {
    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required')
            .min(3, 'Name must be at least 3 characters')
            .max(50, 'Name must be less than 50 characters'),
        number: Yup.string()
            .required('Number is required')
            .min(3, 'Number must be at least 3 characters')
            .max(50, 'Number must be less than 50 characters')
    });

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
                const newContact = {
                    id: nanoid(),
                    name: values.name,
                    number: values.number
                };
                onAdd(newContact);
                resetForm();
            }}
        >
            <Form className={css.formInputs}>
                <div className={css.nameNumber}>
                    <label className={css.wordsOnInputs} htmlFor="name">Name</label>
                    <Field className={css.infoField} type="text" id="name" name="name" />
                    <ErrorMessage className={css.warningMessage} name="name" component="div" />
                </div>
                <div className={css.nameNumber}>
                    <label className={css.wordsOnInputs} htmlFor="number">Number</label>
                    <Field className={css.infoField} type="text" id="number" name="number" />
                    <ErrorMessage className={css.warningMessage} name="number" component="div" />
                </div>
                <button className={css.buttonAddContact} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;