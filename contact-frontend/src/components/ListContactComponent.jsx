import React, {useEffect, useState} from 'react'
import { deleteContact, listContacts } from '../services/ContactService'
import { useNavigate } from "react-router-dom"

const ListContactComponent = () => {

    const [contacts, setContacts] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllContacts();
    }, [])

    function getAllContacts(){
        listContacts().then((response) => {
            setContacts(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewContact(){
            navigator("/add-contact");
    }

    function updateContact(id){
        navigator(`/edit-contact/${id}`);
    }

    function removeContact(id){
        console.log(id);

        deleteContact(id).then((response) => {
            getAllContacts();
        }).catch(error => {
            console.log(error);
        })
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
                                    <button className='btn btn-danger' onClick={() => removeContact(contact.id)}
                                        style={{marginLeft: "10px"}}    
                                    >Delete</button>
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