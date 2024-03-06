//import css from "./ContactForm.module.css"
const ContactForm = ({ onAdd }) => {
    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.elements.text.value;
        const number = e.target.elements.number.value;
        onAdd({
            id: Date.now().toString(),
            name,
            number
        });
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="text" placeholder="Name" />
            <input type="text" name="number" placeholder="Number" />
            <button type="submit">Add contact</button>
        </form>
    );
}

export default ContactForm;

