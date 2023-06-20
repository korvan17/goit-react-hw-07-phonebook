import axios from "axios";
import { URL } from "./URL";

const getURL = `${URL}/contacts`

export async function getContacts() {
    const {data} = await axios.get(getURL)
    return data
}

export async function delContact(idContact) {
    const {data} = await axios.delete(`${getURL}/${idContact}`)
    return data
}

export async function addContact(newContact) {
    const {data} = await axios.post(`${getURL}/, contact`)
    return data
}