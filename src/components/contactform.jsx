import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import Submit from "./submitform";
import { Navigate } from "react-router-dom";
import { useRef } from "react";
function Contact() {
    const aRef=useRef()
    const bRef=useRef()
    const cRef=useRef()
    const dRef=useRef()
    var navgate=useNavigate()
    React.useEffect(()=>{
        aRef.current.focus()
    },[])  
    function Fis(ev){
        if(ev.key=='Enter'){
            bRef.current.focus();
        }
    }
    function las(ev){
        if(ev.key=='Enter'){
            cRef.current.focus();
        }
    }
    function email(ev){
        if(ev.key=='Enter'){
            dRef.current.focus();
        }
    }
    const ContactForm = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            gmail: '',
            description: "",
        },
        validationSchema: Yup.object({
            firstname: Yup.string().min(3, 'Enter at least 3 characters').required('Please enter your first name'),
            lastname: Yup.string().min(3, 'Enter at least 3 characters').required('Please enter your last name'),
            gmail: Yup.string().email('Invalid email format').required('Please enter your email'),
            description: Yup.string().min(3, 'Enter at least 3 characters').required('Please enter a description'),
        }),
        onSubmit: (values,{resetForm}) => {
            console.log(values);
            navgate("/submitform" )
            resetForm();
        },
    });
    return (
        <div className="d-flex p-5 justify-content-center align-items-center" style={{ height: '100vh' }}>
            <form onSubmit={ContactForm.handleSubmit} className="border border-2 p-4 rounded shadow" style={{ width: '50%' }}>
                <h1 style={{color:'#6C48C5'}}>Contact Us</h1>
                <hr style={{height:"5px",background:'#433878'}} />
                
                <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text"id="firstname"name="firstname"className="form-control" value={ContactForm.values.firstname}onChange={ContactForm.handleChange} onBlur={ContactForm.handleBlur} ref={aRef} onKeyUp={(ev)=>{Fis(ev)}} />
                    {ContactForm.touched.firstname && ContactForm.errors.firstname ? (
                    <div className="text-danger">{ContactForm.errors.firstname}</div>
                ) : null}       
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="form-control"
                        value={ContactForm.values.lastname}
                        onChange={ContactForm.handleChange}
                        onBlur={ContactForm.handleBlur}
                        ref={bRef} onKeyUp={(ev)=>{las(ev)}} />
                    {ContactForm.touched.lastname && ContactForm.errors.lastname ? (
                        <div className="text-danger">{ContactForm.errors.lastname}</div>
                    ) : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="gmail" className="form-label">Email</label>
                    <input
                        type="email"
                        id="gmail"
                        name="gmail"
                        className="form-control"
                        value={ContactForm.values.gmail}
                        onChange={ContactForm.handleChange}
                        onBlur={ContactForm.handleBlur}
                        ref={cRef} onKeyUp={(ev)=>{email(ev)}}/>
                    {ContactForm.touched.gmail && ContactForm.errors.gmail ? (
                        <div className="text-danger">{ContactForm.errors.gmail}</div>
                    ) : null}
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        className="form-control"
                        rows="3"
                        value={ContactForm.values.description}
                        onChange={ContactForm.handleChange}
                        onBlur={ContactForm.handleBlur}
                        ref={dRef} />
                    {ContactForm.touched.description && ContactForm.errors.description ? (
                        <div className="text-danger">{ContactForm.errors.description}</div>
                    ) : null}
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>

              </form>
        </div>
    );
}
export default Contact;
                        
                        
                        
                        
                        


