import React from "react";
import Menu from "../components/Menu";
import { contacts } from "../constants";

export default function Contacts() {
  return (
    <>
    <Menu currentRoute="/contacts" />
    <div id="contact">
      <h1>Contact</h1>
      {contacts.map((i) => (
        <div>
          <h2>{i.name}</h2>
          <p className="contact-entry">Email: {i.email}</p>
        </div>
      ))}
    </div>
    </>
  );
}
