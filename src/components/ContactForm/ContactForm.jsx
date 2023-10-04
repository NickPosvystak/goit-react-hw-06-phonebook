import {useState } from 'react';
import css from './ContactForm.module.css';

export const ContactForm = ({onAddContact}) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  // const [filter, setFilter] = useState('')

  

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleNumberChange = e => {
    setNumber(e.target.value);
  };
  // const handleFilterChange = e => {
  //   setFilter(e.target.value);
  // };
  // handleFilterChange();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.number.value);
  
    if (name.trim() === '' || number.trim() === '') return;

    onAddContact(name, number);

    // Clear the form inputs
    setName('')
    setNumber('')

    //   this.setState({
    //     name: '',
    //     number: '',
    //   });
    // };
  }
  
    // const { name} = name;
    // const { number } = number;
    return (
      <div className={css.box}>
        <form onSubmit={handleSubmit} className={css.form}>
          <input
            className={css.input}
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            className={css.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleNumberChange}
            placeholder="Phone Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit" className={css.btnAdd}>
            Add Contact
          </button>
        </form>
      </div>
    );
  }
