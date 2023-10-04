import { useState } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import defaultContacts from './defaultContacts.json';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export const App = () => {
  
  const [contacts, setContacts] = useState(defaultContacts)
  const [filter, setFilter] = useState('')
  // state = {
  //   contacts: defaultContacts,
  //   filter: '',
  // };

  const handleAddContact = ({ name, number }) => {
    // const { contacts } = this.state;
    setContacts([contacts])
    const isContact = contacts.some(contact => contact.name === name);
    if (isContact) {
      alert(`${name} is already in contact.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevState => ({
      [contacts]: [newContact, ...prevState.contacts],
      // name: '',
      // number: '',
    }));
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };
  isContact = name => {
    const { contacts } = this.state;
    return contacts.some(contact => contact.name === name);
  };

  // Delete contact
  handleDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts) ?? [];
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  
    // const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div className={css.box}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />
        <h2 className={css.title}>Contacts</h2>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        {contacts.length > 0 ? (
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        ) : (
          <p className={css.messageTitle}>You have any saved contacts</p>
        )}
      </div>
    );
  }

