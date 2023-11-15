import React, { useState, useEffect } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      if (!selectedContactId) return;

      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users${selectedContactId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
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
    <div>
      <h1>{contact.name}</h1>
      {/* Additional details */}
      <button onClick={() => setSelectedContactId(null)}>
        Back to Contacts
      </button>
    </div>
  );
}
