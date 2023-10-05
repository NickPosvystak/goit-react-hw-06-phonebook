import { ReactComponent as IconDelete } from '../../assets/delete.svg';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  const showContacts = Array.isArray(contacts) && contacts.length;
  return (
    <ul className={css.boxList}>
      {showContacts &&
        contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={css.itemList}>
              <span className={css.nameItem}>{name}: </span>
              <span>{number}</span>
              <button
                type="button"
                onClick={() => onDeleteContact(id)}
                className={css.btnDelete}
              >
                <IconDelete className={css.iconDelete} />
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default ContactList;
