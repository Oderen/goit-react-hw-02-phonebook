import { Component } from 'react';

import ContactList from './ContactList/ContactList';

import initialContacts from './data/contacts.json';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
    name: '',
    number: '',
  };

  handleNameChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  deleteContact = contactId => {
    // console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  submit = e => {
    e.preventDefault();

    console.log(this.state);
    this.reset();
  };

  reset() {
    this.setState({ name: '', number: '' });
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.submit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.handleNameChange}
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              onChange={this.handleNameChange}
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <div>
          <h2>Contacts</h2>
          <label>
            Find contacts by name
            <input
              type="text"
              name="filter"
              value={this.state.filter}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              onChange={this.handleNameChange}
              required
            />
          </label>
          <ul>
            {initialContacts.map(({ id, name, number }) => (
              // console.log(id),
              <ContactList
                key={id}
                id={id}
                name={name}
                number={number}
                onDelete={this.deleteContact}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
