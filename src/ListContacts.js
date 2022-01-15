import React from 'react';
import { Link } from 'react-router-dom'
 
function ListContacts({contacts, removeContact}) {
  
  return (

    <div className="list-contacts">
      <div className="list-contacts-top">
        <Link to="/create" className='add-contact'>Add Contact</Link>
      </div>
      <ol className="contact-list">
        {contacts.map(contact => (
          <li key={contact.id} className="contact-list-item">
            <div className="contact-avatar" style={{backgroundImage: `url(${contact.avatarURL})`}}>
            </div>
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
            </div>
            <button className="contact-remove" onClick={() => removeContact(contact)} name = {contact}>
              Remove
            </button>
          </li>
        ))}
      </ol>
      
    </div>
      
  )
}

export default ListContacts ;