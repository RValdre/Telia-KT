import React, { useState, useEffect } from 'react'
import { createContact, getContact } from '../services/ContactService'
import { useNavigate, useParams } from 'react-router-dom'

const ContactComponent = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const {id} = useParams();
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    const navigator = useNavigate();

    useEffect(() => {
        if(id){
            getContact(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])

    function validateForm(){
        let valid = true;
        const errorsCopy = {... errors};

        if(firstName == ""){
            errorsCopy.firstName = "First name is required!";
            valid = false
        } else {
            errorsCopy.firstName = "";
        }

        if(lastName == ""){
            errorsCopy.lastName = "Last name is required!";
            valid = false
        } else {
            errorsCopy.lastName = "";
        }

        if(email == ""){
            errorsCopy.email = "Email is required!";
            valid = false
        } else {
            errorsCopy.email = "";
        }

        setErrors(errorsCopy);
        return valid;
    }

    function saveContact(e){
        e.preventDefault();

        if(validateForm()){
            const contact = {firstName, lastName, email}
            console.log(contact)
            createContact(contact).then((response) => {
                console.log(response.data);
                navigator('/contacts')
            })
        }       
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Contact</h2>
        } else {
            <h2 className='text-center'>Add Contact</h2>
        }
    }



    return (
        <div className='container'>
            <br /><br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Contact First Name'
                                    name='firstName'
                                    value={firstName}
                                    className={` form-control ${ errors.firstName ? "is-invalid": ""} `}
                                    onChange={(e) => {setFirstName(e.target.value)}}
                                ></input>
                                {errors.firstName && <div className='invalid-feedback'> {errors.firstName} </div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Contact Last Name'
                                    name='lastName'
                                    value={lastName}
                                    className={` form-control ${ errors.lastName ? "is-invalid": ""} `}
                                    onChange={(e) => {setLastName(e.target.value)}}
                                ></input>
                                {errors.lastName && <div className='invalid-feedback'> {errors.lastName} </div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email:</label>
                                <input
                                    type='text'
                                    placeholder='Enter Contact Email'
                                    name='email'
                                    value={email}
                                    className={` form-control ${ errors.email ? "is-invalid": ""} `}
                                    onChange={(e) => {setEmail(e.target.value)}}
                                ></input>
                                {errors.email && <div className='invalid-feedback'> {errors.email} </div>}
                            </div>

                            <button className='btn btn-success' onClick={saveContact}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent