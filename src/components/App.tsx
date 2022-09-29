import React, { useState, useEffect} from "react";
import { PhonebookForm } from "./PhonebookForm/PhonebookForm";
import { Section } from "./Section/Section";
import { nanoid } from 'nanoid'
import { Contacts } from "./Contacts/Contacts";
import { FindByName } from "./FindByName/FindByName"
import { IData } from "../interfaces";


export const App = (): JSX.Element => {
 const [filter, setFilter] = useState<string>("")
 const [contacts, setContacts] = useState<Partial<IData>[]>(JSON.parse(localStorage.getItem('localContacts') || "") || [] )

    useEffect(()=> {localStorage.setItem('localContacts', JSON.stringify(contacts))},[contacts])

    const handlerSubmit = (contact: Partial<IData>) => { 
      const isHere = contacts.some(({name}) => name === contact.name)
      const obj = {...contact, id: nanoid()}
      if (isHere) {
        alert(`Name already in contacts`)
      return         
      }
      setContacts(ps => [...ps, obj])  
        
    }

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
      const {value} = event.target as EventTarget & {value: string}
      setFilter(value)
    }

    const handleFilters = (): Partial<IData>[] => {
      return contacts.filter((contact) => contact.name?.toLowerCase().includes(filter.toLowerCase()))
    }

    const handleDelete = (id?:string) =>{
      setContacts((ps) => (ps.filter((el) => el.id !== id)))
    }



return (<>
       <Section title= "phonebook">
       <PhonebookForm onSubmit={handlerSubmit}/>
       </Section>
       <Section title= "Contacts">
         <FindByName value={filter} onChange={handleChange} />
         <Contacts contact= {handleFilters()} onDelete={handleDelete} />
       </Section>
       </>) 
    }
