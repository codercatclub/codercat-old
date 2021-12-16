import React from "react";
import Head from "next/head";
import Menu from "../components/Menu";
import SocialIcons from "../components/SocialIcons";
import { socialIconsUsers } from "../constants";

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
    <div className="center-container">
      <Head>
        <title>Codercat Contact</title>
      </Head>
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
      <SocialIcons users={socialIconsUsers} />
    </div>
  </>
);

export default Contacts
