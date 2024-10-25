import React, { useEffect } from "react";
import { useFormik } from "formik";
import *as Yup from "yup"
function Student(){
    let Studentform=useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            age:'',
        },
    validationSchema:Yup.object({
           firstname:Yup.string().min(3,'please Valid Name').required('Must Enter 3 Charcterss'),
           lastname:Yup.string().min(5,'please Valid Name').required('Must Enter 5 Charcterss'),
           age:Yup.number().required('please Enter A Age')
    }),
        onSubmit:(values)=>{
            console.log(values)
        }
    })
    useEffect(()=>{
        console.log(Studentform.touched)
    },[])
    // return(
    //     <form onSubmit={Studentform.handleSubmit}>
    //         <div>
    //             <input type="text" name='firstname' onChange={Studentform.handleChange('firstname')} onBlur={Studentform.handleBlur('firstname')} />
    //             <br />
    //             <div>
    //             <b>{Studentform.touched.firstname && Studentform.errors.firstname}</b>
    //             </div>
    //             <br />
    //             <div>
    //             <input type="text" name='lastname' onChange={Studentform.handleChange('lastname')} onBlur={Studentform.handleBlur('lastname')} />
    //             <br />
    //             <div>
    //             <b>{Studentform.touched.lastname && Studentform.errors.lastname}</b>
    //             <br />
    //             </div>
    //             <input type="text" name="age" onChange={Studentform.handleChange('age')} onBlur={Studentform.handleBlur('age')} />
    //             <br />
    //             <div>
    //               <b>{Studentform.touched.age && Studentform.errors.age}</b>
    //             </div>

    //         </div>
    //     </div>
    //     </form>
    // )
        return(
            <form onSubmit={Studentform.handleSubmit}>
                <div>
                    <input type="text" name='firstname' {...Studentform.getFieldProps('firstname')} />
                    <br />
                    <div>
                    <b>{Studentform.touched.firstname && Studentform.errors.firstname}</b>
                    </div>
                    <br />
                    <div>
                    <input type="text" name='lastname' {...Studentform.getFieldProps('lastname')} />
                    <br />
                    <div>
                    <b>{Studentform.touched.lastname && Studentform.errors.lastname}</b>
                    <br />
                    </div>
                    <input type="text" name="age" {...Studentform.getFieldProps('age')} />
                    <br />
                    <div>
                      <b>{Studentform.touched.age && Studentform.errors.age}</b>
                    </div>
    
                </div>
            </div>
            </form>
        )
}
export default Student;