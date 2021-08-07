import React from "react";


const Contact = (props) => {

    const [contacts, setContacts] = React.useState([]);

    React.useEffect(() => {
        const getContacts = async () => {
            const response = await fetch("/contacts");
            const data = await response.json();

            console.log(data);

            setContacts(data);
        }

        getContacts();
    }, []);

    return (
        <section id="contact">
            This is Contact Sir.
        </section >
    );
};


export default Contact;