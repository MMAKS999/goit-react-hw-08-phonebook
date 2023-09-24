import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Filter } from './Filter';
import { PhonebookForm } from './PhonebookForm';
import { ContactList } from './contactList';
import Swal from 'sweetalert2';

// Pages
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home'
import Login from '../pages/Login';
import Register from '../pages/Register';
import Contacts from '../pages/Contacts';

import { useEffect } from 'react';

import { setFilter } from '../redux/filterSlice';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from '../redux/operations/operations';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

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

  const changeFilter = ev => {
    dispatch(setFilter(ev.currentTarget.value));
  };

  // Видалення контакту
  const onDelateContact = id => {
    dispatch(deleteContact(id));
  };

  // метод фільтрації контактів
  const normalizedFilter = useSelector(state => state.filter).toLowerCase();

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  // Зверненя до АРІ
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = getVisibleContacts();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
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
    </div>
  );
};
