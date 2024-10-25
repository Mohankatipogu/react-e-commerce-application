import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from 'yup';

function Employee(){
    let[emp,setEmp]=useState([]);
    let Employeeforms= useFormik({
              initialValues:{
                firstname:'',
                lasname:'',
                age:'',
                gender:'',
              },
              validationSchema:Yup.object({
                 firstname:Yup.string().min(3).required('Enter Must three letters'),
                 lastname:Yup.string().min(3).required('enter Must be 8 letters'),
                 age:Yup.string().required('Must Enter Age'),
              }),
              onSubmit:((values)=>{
                  setEmp([...emp,values])
              })
            
    })
    function Del(i){
         let temp=[...emp]
         temp.splice(i,1);
         setEmp([...temp]);
        }
        function sortByage(){
            let temp1=[...emp]
            temp1.sort((a,b)=>{
                if(a.age<b.age){
                    return -1;
                }
                else{
                    return 1;
                }
            })
            setEmp([...temp1])
        }

   return(
        <div>

        <div className="container">
            <form  onSubmit={Employeeforms.handleSubmit}>
            <input type="text" {...Employeeforms.getFieldProps('firstname')} />
            <br />
            <span>{Employeeforms.touched.firstname && Employeeforms.errors.firstname}</span>
            <br />
            <input type="text" {...Employeeforms.getFieldProps('lastname')} />
            <br />
            <span>{Employeeforms.touched.lastname && Employeeforms.errors.lastname}</span>
            <br />
            <input type="text" {...Employeeforms.getFieldProps('age')} />
            <br />
            <span>{Employeeforms.touched.age && Employeeforms.errors.age}</span>
             <br />
             <input type="radio" name='gender' value='male' onChange={Employeeforms.handleChange} onBlur={Employeeforms.handleBlur} />male &nbsp;
             <input type="radio" name='gender' value='female' onChange={Employeeforms.handleChange} onBlur={Employeeforms.handleBlur}  />female &nbsp;
             <input type="radio" name='gender' value='Others' onChange={Employeeforms.handleChange} onBlur={Employeeforms.handleBlur}  />Others &nbsp;
             <br />
            <button>Add Employee</button>
            </form>
        </div>
        <div className="container ">

            <table  className="table">
                <thead  class="bg-danger">
                <th> First Name</th>
                <th>Last Name</th>
                <th onClick={(()=>{sortByage()})}>Age</th>
                <th>Gender</th>
                <th></th>
                </thead>
                {
                    emp.map((e,i)=>{
                        return(      
                            <tr style={e.gender==='male'?{background:'#E4B1F0'}:{background:'#FFE1FF'}} class="border border-light-subtle">
                            <td>{e.firstname}</td>
                            <td>{e.lastname}</td>
                            <td>{e.age}</td>
                            <td>{e.gender}</td>
                            <button id='button' onClick={(()=>{Del()})}>Delete</button>
                           </tr>     
                                        
                       )
                    })
                }
            </table>
                </div>
        </div>    
   )
}
export default Employee;