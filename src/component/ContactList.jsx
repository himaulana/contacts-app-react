import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
