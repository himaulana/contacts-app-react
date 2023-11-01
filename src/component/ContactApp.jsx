import React from 'react';
import ContactList from './ContactList';
import { dbContacts } from '../database/data';

const ContactApp = () => {
  const contacts = dbContacts();

  return (
    <div className="contact-app">
      <h1>Daftar Kontak</h1>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactApp;
