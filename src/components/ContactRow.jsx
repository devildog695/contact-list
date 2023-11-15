import React from "react";

export default function ContactRow({ contact, onClick }) {
  return (
    <tr className="contact-row" onClick={onClick}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
