import React, {useEffect, useState} from 'react'
import { listContacts } from '../services/ContactService'

const ListContactComponent = () => {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        listContacts().then((response) => {
            setContacts(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    return (
        <div className='container'>
            <h2 className='text-center'>List of Contacts</h2>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Contact ID</th>
                        <th>Contact First Name</th>
                        <th>Contact Last Name</th>
                        <th>Contact Email</th>
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
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListContactComponent