
import s from "./Contacts.module.css"
import React from "react"

import { Item } from "./Item"
import { IData } from "../../interfaces"
export const Contacts = ({contact, onDelete}: {contact: Partial<IData>[], onDelete: (id?:string)=> void }) => {return <ul className={s.list}>{contact.map(({id, name, phone}) => <Item key={id} name={name} phone={phone} onDelete={onDelete} id={id} />)}</ul> }
