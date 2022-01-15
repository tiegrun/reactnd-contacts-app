import React, {useState, useEffect} from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';
import CreateContact from './CreateContact';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

function App(props) {

  const [contacts, setContacts] = useState([]);

  const [contactCreated, setContactCreated] = useState(false)
   

   //or useLayoutEffect 

  useEffect(()=>{
    ContactsAPI.getAll()
    .then((contacts) =>{
      setContacts(contacts)
    })

  }, [])

  const removeContact = (contact) =>{
    const updateContacts = [...contacts]

    const removedContacts = updateContacts.filter(c =>{
      return (c.id !== contact.id)
    })

    setContacts(removedContacts) ;
    
    ContactsAPI.remove(contact)
  }

const createContact = (contact) =>{
  ContactsAPI.create(contact)
  .then((contact) => {
    const newContacts = [...contacts]
    newContacts.push(contact)
    setContacts(newContacts)
    setContactCreated(true)
  })  
}

  return (
    
    <div>
      <Switch>
        <Route exact path = "/">
          <ListContacts  contacts={contacts} removeContact = {removeContact} />
        </Route>
        <Route path="/create">
          {contactCreated ? <Redirect to = "/" /> : <CreateContact  onCreateContact = {createContact}/>}
        </Route>
      </Switch>
    </div>
  );
 }

export default App;
