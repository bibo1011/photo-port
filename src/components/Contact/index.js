function ContactForm() {
    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form">
                // name input
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name"/>
                </div>
                // email input
                <div>
                    <label htmlFor="name">Email:</label>
                    <input type="text" name="name"/>
                </div>
                // message text area
                <div>
                    <label htmlFor="name">Message:</label>
                    <input textarea name="message" rows="5"/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
    // JSX
}

export default ContactForm;