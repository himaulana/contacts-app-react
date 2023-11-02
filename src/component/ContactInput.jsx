import React from 'react';
import PropTypes from 'prop-types';

class ContactInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tag: '',
    };
  }

  onNameChangeHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onTagChangeHandler = (event) => {
    this.setState({
      tag: event.target.value,
    });
  };

  onSubmitEventHandler = (event) => {
    event.preventDefault();
    this.props.addContact(this.state);
  };

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Masukan nama...."
          value={this.state.name}
          onChange={this.onNameChangeHandler}
        />
        <input
          type="text"
          placeholder="Tag"
          value={this.state.tag}
          onChange={this.onTagChangeHandler}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

ContactInput.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactInput;
