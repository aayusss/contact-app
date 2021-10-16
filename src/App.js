import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { uuid } from 'uuidv4';
import Header from './components/Header';
import api from './api/contact';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';
// import ContactCard from './components/ContactCard';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const LOCAL_STORAGE_KEY = 'contacts';
  const addContactHandler = async (contact) => {
    console.log(contact);
    const request={
      id:uuid(),
      ...contact,
    };
    const response = await api.post('/contacts',request)
    setContacts([...contacts, response.data]);
  };
  const retrieveContacts = async () => {
    const response = await api.get('/contacts');
    return response.data;
  };

  const deleteHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(() => {
    // const retrieveContacts = JSON.parse(
    //   localStorage.getItem(LOCAL_STORAGE_KEY)
    // );
    // if (retrieveContacts) setContacts(retrieveContacts);
    const getAllContacts = async () => {
      const getContacts = await retrieveContacts();
      if (getContacts) setContacts(getContacts);
    };
    getAllContacts();
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route
            exact
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getDeleteId={deleteHandler}
              />
            )}
          />
          <Route path="/contact/:id" component={ContactDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
