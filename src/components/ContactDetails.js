import React from 'react'

const ContactDetails = (props) => {
    console.log(props);
    const{name,email}=props.location.state.contact;
    return (
     <div className="main">
         <div className="ui card centered">
             <div className="content">
                 <div className="header">{name}</div>
                 <div className="description">
                     {email}
                 </div>
             </div>
         </div>
     </div>
    );
}

export default ContactDetails
