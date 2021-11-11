/* import React, { useState, useEffect } from 'react'; */
import Form from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

function App() {
  //before Redux

  /* const allContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]; */

  /*  const useLocalStorage = allContacts => {
    const [contacts, setContacts] = useState(
      () => JSON.parse(window.localStorage.getItem('contacts')) ?? allContacts,
    );
    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);
    return [contacts, setContacts];
  }; */

  /* const [contacts, setContacts] = useLocalStorage(allContacts);
  const [filter, setFilter] = useState(''); */

  /* const onAddContact = obj => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === obj.name.toLowerCase(),
      )
    ) {
      alert(`${obj.name} is already in contacts`);
    } else setContacts(prevState => [obj, ...prevState]);
  }; */

  /* const onDeleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  }; */

  /* const onChangeFilter = e => {
    setFilter(e.currentTarget.value);
  }; */

  /* const normalizedFilter = filter.toLowerCase();
  const visibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }; */

  return (
    <section>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </section>
  );
}

export default App;
