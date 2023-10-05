import { useEffect, useState } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import defaultContacts from './defaultContacts.json';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export const App = () => {
  const [contacts, setContacts] = useState(defaultContacts);
  const [filter, setFilter] = useState('');

  const handleAddContact = ( name, number ) => {
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

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleDeleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    if (localContacts) setContacts(JSON.parse(localContacts) ?? []);
  }, []);

  useEffect(() => {
    if (contacts && contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const getFilteredContacts = (contacts, filter) => {
    if (!filter) return contacts; // Перевірка на наявність filter

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <div className={css.box}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <h2 className={css.title}>Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
