import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useEffect } from 'react';



// Components
import { Filter } from '../components/Filter';
import { PhonebookForm } from '../components/PhonebookForm';
import { ContactList } from '../components/contactList';

import { setFilter } from '../redux/filterSlice';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from '../redux/operations/operations';
// ******************

export const Contacts = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  // Add contact and check repetability of contact--------------
  const addContactAll = dataContact => {
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === dataContact.name.toLowerCase() ||
          contact.number === dataContact.number
      )
    ) {
      Swal.fire(
        `${dataContact.name} or ${dataContact.number} is already in contacts.`
      );
      return;
    }
    // звернення до редакс стору з записом контакту
    dispatch(addContact(dataContact));
  };
  // ***************

  // filter contact---------------
  const changeFilter = ev => {
    dispatch(setFilter(ev.currentTarget.value));
  };
  // ***************
  // Видалення контакту---
  const onDelateContact = id => {
    dispatch(deleteContact(id));
  };
  // ******************
  // метод фільтрації контактів
  const normalizedFilter = useSelector(state => state.filter).toLowerCase();

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  // ****************
  // Зверненя до АРІ
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = getVisibleContacts();
  // *******************

  return (
    <div>
      {isLoading && !error && <b>Request in progress...</b>}
      <div>
        <h1>Phonebook</h1>
        <PhonebookForm onSubmit={addContactAll} />
        <h2>Contacts</h2>
        <Filter value={normalizedFilter} onChange={changeFilter} />
        <ContactList
          dataContacts={visibleContacts}
          onDelateContact={onDelateContact}
        />
      </div>
    </div>
  );
};
