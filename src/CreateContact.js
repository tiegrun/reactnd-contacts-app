import React from "react";
import { Link } from "react-router-dom";
import ImageInput from "./ImageInput";
import serializeform from "form-serialize"

function CreateContact ({onCreateContact} ){

  const handleSubmit=(e)=>{
    e.preventDefault();
    const values = serializeform(e.target, {
      hash: true
    })

    // if(onCreateContact){
    //   onCreateContact(values)
    // }

    onCreateContact(values)
  }
  
  return (
    <div>
     <Link className="close-create-contact" to="/">
      CLose
     </Link>
     <form className="create-contact-form" onSubmit={handleSubmit}>
      <ImageInput className="create-contact-avatar-input" name="avatarURL" maxHeigt={64}/>
      <div className="create-contact-details">
       <input type="text" name="name" placeholder="Name"/>
       <input type="text" name="handle" placeholder="Handle"/>
       <button>Add Contact</button>
     </div>
     </form>
     
      
    </div>
  )
}

export default CreateContact;