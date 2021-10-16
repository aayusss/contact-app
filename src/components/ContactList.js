import React from 'react'
import { NavLink } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    console.log(props)
    const deleteHandlerId=(id)=>{
    props.getDeleteId(id)
    };
    const renderContactList=props.contacts.map((contact)=>{
        return (
          <ContactCard contact={contact} clickHandler={deleteHandlerId} key={contact.id} />
        );
    })
    return (
      <div className="main">
        <h2>
          Contact List
          <NavLink to="/add">
          <button className="ui button blue right">Add Contact</button>
          </NavLink>
        </h2>
        <div className="ui celled list">{renderContactList}</div>
      </div>
    );
}

export default ContactList
