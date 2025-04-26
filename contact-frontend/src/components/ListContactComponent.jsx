import React, {useEffect, useState} from 'react'
import { listContacts } from '../services/ContactService'
import { useNavigate } from "react-router-dom"

const ListContactComponent = () => {

    const [contacts, setContacts] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        listContacts().then((response) => {
            setContacts(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    function addNewContact(){
            navigator("/add-contact");
    }

    function updateContact(id){
        navigator(`/edit-contact/${id}`);
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List of Contacts</h2>
            <button className='btn btn-primary mb-2' onClick={addNewContact}>Add Contact</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Contact ID</th>
                        <th>Contact First Name</th>
                        <th>Contact Last Name</th>
                        <th>Contact Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map(contact =>
                            <tr key={contact.id}>
                                <td>{contact.id}</td>
                                <td>{contact.firstName}</td>
                                <td>{contact.lastName}</td>
                                <td>{contact.email}</td>
                                <td>
                                    <button className='btn btn-info' onClick={() => updateContact(contact.id)}>Update</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListContactComponent