import React from 'react'
import { NavLink } from 'react-router-dom';

const ContactCard = (props) => {
    const {id,name,email}=props.contact;
    return (
      <div className="item">
        <div className="content">
          <NavLink to={{pathname:`/contact/${id}`,state:{contact:props.contact}}}>
          <div className="header">{name}</div>
          <div>{email}</div>
          </NavLink>
        </div>
        <i className="trash alternate outline icon" style={{color:'red',marginTop:'7px'}}
        onClick={()=>{
          props.clickHandler(id)
        }}></i>
      </div>
    );
}

export default ContactCard
