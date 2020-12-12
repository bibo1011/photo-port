import React, { useState } from 'react';

function ContactForm() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const {name, email, message} = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })

        // setFormState(
        //     {...formState, name: e.target.value}, 
        // )
    }
    console.log(formState)
    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                {/* // name input */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onChange={handleChange} defaultValue={name}/>
                </div>
                {/* // email input */}
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" onChange={handleChange} defaultValue={email}/>
                </div>
                {/* // message text area */}
                <div>
                    <label htmlFor="name">Message:</label>
                    <input textarea name="message" rows="5" onChange={handleChange} defaultValue={message}/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
    // JSX
}

export default ContactForm;