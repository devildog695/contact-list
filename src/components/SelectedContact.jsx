import React, { useState, useEffect } from "react";
import "./SelectedContact.css";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      if (!selectedContactId) {
        console.log("No selectedContactId provided");
        return;
      }

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${selectedContactId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Check the fetched data
        setContact(data);
      } catch (error) {
        console.error("Failed to fetch contact:", error);
      }
    }

    fetchContact();
  }, [selectedContactId]);
  console.log("Current contact:", contact);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div className="selected-contact">
      <h1>{contact.name}</h1>
      <p>Username: {contact.username}</p>
      <p>Email: {contact.email}</p>
      <p>
        Address: {contact.address.street}, {contact.address.suite},{" "}
        {contact.address.city}, {contact.address.zipcode}
      </p>
      <p>
        Location: Latitude {contact.address.geo.lat}, Longitude{" "}
        {contact.address.geo.lng}
      </p>
      <p>Phone: {contact.phone}</p>
      <p>
        Website: <a href={`http://${contact.website}`}>{contact.website}</a>
      </p>
      <p>Company: {contact.company.name}</p>
      <p>Catchphrase: {contact.company.catchPhrase}</p>
      <p>BS: {contact.company.bs}</p>
      <button
        className="back-button"
        onClick={() => setSelectedContactId(null)}
      >
        Back to Contacts
      </button>
    </div>
  );
}
