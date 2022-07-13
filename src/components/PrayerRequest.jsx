import React from 'react'
import { useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import {db} from '../firebaseConfig'

const PrayerRequest = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        miracle_title: '',
        message: ''
      })

      const {name, email, miracle_title, message} = formData;

      const handleChange = (e) => {
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }))
      };

      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const docRef = await addDoc(collection(db, "prayer"), formData);
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
      }

  return (
    <form name="miracle" onSubmit={handleSubmit}>
        <h2>Prayer Request</h2>
        <input 
        type="text" 
        value={name} 
        id="name" 
        name="name" 
        onChange={handleChange} 
        placeholder='Name'/>
        
        <input 
        type="text" 
        value={email} 
        id="email" 
        name="email" 
        onChange={handleChange} 
        placeholder='Email'/>
        
        <input 
        type="text" 
        value={miracle_title} 
        id="miracle_title" 
        name="miracle_title" 
        onChange={handleChange} 
        placeholder='Message'/>
        
        <textarea 
        name="message" 
        value={message} 
        id="message" cols="30" rows="5" 
        onChange={handleChange} 
        placeholder='Describe your need'></textarea>
        
        <button type="submit">Send</button>
    </form>
  )
}

export default PrayerRequest
