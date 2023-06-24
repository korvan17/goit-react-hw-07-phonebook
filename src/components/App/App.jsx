import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

import { MainConteiner } from './App.styled';


export function App() {
  
  return (
    <MainConteiner>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter  />
      <ContactList  />
    </MainConteiner>
  );
}
