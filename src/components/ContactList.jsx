import React, { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const result = await response.json();
        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <table className="contact-list">
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr
            className="contact-row"
            key={contact.id}
            onClick={() => setSelectedContactId(contact.id)}
          >
            <td>{contact.name}</td>
            {/* Add other contact details if needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
