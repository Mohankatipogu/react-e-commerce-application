import { useFormik } from "formik";
import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import *as Yup from "yup";

function Regstation(){
    let[reg,setReg]=useState([])
     let aRef=useRef();
     let bRef=useRef();
     let cRef=useRef();
     let dRef=useRef();
     let eRef=useRef();
     let fRef=useRef();
     let gRef=useRef();
     React.useEffect(()=>{
         aRef.current.focus();  
         console.log(Registationforms.touched);
     },[])
    let Registationforms= useFormik({
        initialValues:{
             firstname:'',
             lastname:'',
             phone:'',
             city:'',
             Country:'',
        },
        validationSchema:Yup.object({
            firstname:Yup.string().min(3,'Please Enter Atleast 3 Characters').required('Enter must be Three Letters'),
            lastname:Yup.string().min(3,'Please Enter Atleast 3 Characters').required('Enter must be Three Letters'),
            phone:Yup.number().min(10,"please Enetr 10 Numbers").required('Please Enetr a Mobile Number'),
            city:Yup.string().required('Please Enetr A City'),
            Country:Yup.string().required('Please Enter A city Name')
        }),
        onSubmit:((values,{resetForm})=>{
             resetForm()
          fetch("http://localhost:3000/Registation",{method:'POST',
            body:JSON.stringify({
                firstname:values.firstname, 
                lastname:values.lastname,
                phone:values.phone,
                city:values.city,
                Country:values.Country,
                gender:values.gender
            })
          })
    })
})
    function move(ev){
        if(ev.key==='Enter'){
            bRef.current.focus();
        }
    }
    function moveb(ev){
        if(ev.key==='Enter'){
            cRef.current.focus();
        }
    }
    function moved(ev){
        if(ev.key==='Enter'){
            eRef.current.focus();
        }
    }
    function movee(ev){
        if(ev.key==='Enter'){
            fRef.current.focus();
        }
    }
    function movef(ev){
        if(ev.key==='Enter'){
            gRef.current.focus();
        }
    }
    return(
         <div id='navbox'>
        <div className="container">
            <form onSubmit={Registationforms.handleSubmit}>

            <input  type="text" {...Registationforms.getFieldProps('firstname')} ref={aRef} onKeyUp={(ev)=>{move(ev)}}  placeholder="Enter Your first Name" />
            <br />
            <span>{Registationforms.touched.firstname && Registationforms.errors.firstname}</span>
            <br />
            <input  type="text" {...Registationforms.getFieldProps('lastname')} ref={bRef} onKeyUp={(ev)=>{moveb(ev)}} placeholder="Enter Your Last Name" /> 
            <br />
            <span>{Registationforms.touched.lastname && Registationforms.errors.lastname}</span>
            <br />
            <span>{Registationforms.touched.EmailAddress && Registationforms.errors.EmailAddress}</span> 
            <br />
            Phone Number: <input  type="number" {...Registationforms.getFieldProps('phone')}  ref={dRef} onKeyUp={(ev)=>{moved(ev)}} placeholder="Enter Your Phone Number" />
            <br />
            <span>{Registationforms.touched.phone && Registationforms.errors.phone}</span>
            <br />
            City: <input  type="text" {...Registationforms.getFieldProps('city')} ref={eRef} onKeyUp={(ev)=>{movee(ev)}} placeholder="Enter Your City" />
            <br />
            <span>{Registationforms.touched.city && Registationforms.errors.city}</span>
            <br />
            Country :<input type="text" {...Registationforms.getFieldProps('Country')} ref={fRef} onKeyUp={(ev)=>{movef(ev)}} placeholder="Enetr Your Country" />  
            <br />
            <span>{Registationforms.touched.Country && Registationforms.errors.Country}</span>
            <input type="radio" name='gender' value='male' onChange={Registationforms.handleChange} onBlur={Registationforms.handleBlur} />Male &nbsp;
            <input type="radio" name='gender' value="female" onChange={Registationforms.handleChange} onBlur={Registationforms.handleBlur} />female &nbsp;
            <input type="radio" name='gender' value="others" onChange={Registationforms.handleChange} onBlur={Registationforms.handleBlur} />others
            <br />
            <button ref={gRef} type="submit">Get Started</button>
            </form>
        </div>
        </div>
    )
}
export default Regstation;