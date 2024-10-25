import { useFormik } from "formik";
import React from "react";
import *as Yup from 'yup';
import { useEffect } from "react";
function Contact(){
    let Conatctform=useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            gmail:'',
            discription:"",
        },
        validationSchema:Yup.object({
            firstname:Yup.string().min(3,'Enetr Your Name').required('please Enter Your Name atleast 3 Character'),
            firstname:Yup.string().min(3,'Enetr Your lastname').required('please Enter Your Name atleast 3 Character'),
            firstname:Yup.string().min(6,'Enetr Your Gmail').required('please Enter Your gmail'),
            firstname:Yup.string().min(3,'Enetr Your discription').required('please Enter Your diacription'),
            
        }),
        onSubmit:(values)=>{
           console.log(values)
        },
    })
    React.useEffect(()=>{
          console.log(Conatctform.touched)
    })
    return(
         <div className="d-flex " style={{height:'100vh',marginLeft:'auto',marginRight:"auto",width:'50%',gap:'50px'}}>
            <form >
                <div>
                <h1>Contact US</h1>
                <hr />
                </div>
                 <input type="text" />
                 <input type="text" />
                 <input type="text" />
                 <br />
                <button type='sub mit'>submit</button>
            </form>
                <div style={{border:'1px solid'}}>
                    <img src={"https://31.media.tumblr.com/b058db7598b4807c3a24684bdddde06e/tumblr_mstgs7dxe91rdu90go1_1280.gif"} alt="" width='200px' />
                </div>
         </div>
    )
}
export default Contact;