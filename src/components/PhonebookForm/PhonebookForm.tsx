import React, { useState } from "react";
import { IData } from "../../interfaces";
import { FormSubmit } from "./FormSubmit";
import { NameInput } from "./NameInput";
import { PhoneInput } from "./PhoneInput";



export const PhonebookForm = ({onSubmit}: {onSubmit : (arg: Partial<IData>)=>void}): JSX.Element => {
    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    
    const handSubmit= (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSubmit({name, phone})
        setName("")
        setPhone("")
    }

    const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        if (name === "name") {
        setName(value)
        }else if (name === "phone"){
        setPhone(value)
        }
    }
    
    return (
        <form onSubmit={handSubmit}>
        <NameInput value={name} name="name" func={handlerInput}></NameInput>
        <PhoneInput value={phone} name="phone" func={handlerInput}></PhoneInput>
        <FormSubmit title="Add contact"></FormSubmit>
        </form>
    )
}
