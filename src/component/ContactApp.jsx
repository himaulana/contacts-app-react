import React from 'react';
import ContactList from './ContactList';
import { dbContacts } from '../database/data';
import ContactInput from './ContactInput';

class ContactsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: dbContacts(),
    };
  }

  onDeleteHandler = (id) => {
    const contacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts });
  };

  onAddContactHandler = ({ name, tag }) => {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: '/images/default.jpg',
          },
        ],
      };
    });
  };

  render() {
    // If not show you component
    // if (isLoading()) {
    //   return null;
    // }

    return (
      <div className="contact-app">
        <h1>Aplikasi Kontak</h1>
        <h2>Tambah Kontak</h2>
        <ContactInput addContact={this.onAddContactHandler} />
        <h1>Daftar Kontak</h1>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.onDeleteHandler}
        />
      </div>
    );
  }
}

export default ContactsApp;
