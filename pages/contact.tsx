import React from "react";
import Menu from "../components/Menu";

const people = [
  {
    name: 'Sneha',
    contacts: [
      { value: 'sbelkhale@gmail.com', type: 'email' }
    ]
  },
  {
    name: 'Kirill',
    contacts: [
      { value: 'kovalewskiy@gmail.com', type: 'email' },
      { value: '@kif11', type: 'telegram' }
    ],
  },
];

const Contacts = () => (
  <>
    <Menu currentRoute="/contact" />
    <div className="contact-container">
      {people.map((person) => (
        <div>
          <h2>{person.name}</h2>
          <ul>
            {person.contacts.map(contact => (
              <li className="contact-entry">{contact.type}: {contact.value}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </>
);

export default Contacts
