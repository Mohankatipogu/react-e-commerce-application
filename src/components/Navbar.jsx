import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
function Navbar({productReducer:{cartItems}}){
   return(
       <div>
           <nav class="navbar navbar-expand-lg " style={{background:'#507687'}}>
 <div class="container-fluid " >
   <a class="navbar-brand" href="./Registion Form" style={{color:'white'}}>Registation Form</a>
   <a class="navbar-brand" href="/Registation Form Details" style={{color:'white'}}> Registation Details</a>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       <li class="nav-item">
         <a class="nav-link active" aria-current="page" href="/" style={{color:'white'}}>Home</a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="/Home" style={{color:'white'}}>Countries</a>
       </li>
       <li class='nav-item'>
         <a class="nav-link" href="/Student" style={{color:'white'}}>Student</a>
       </li>
         <li>
         <a class="nav-link" href="\counter" style={{color:'white'}}>counter</a>
         </li>
         <li>
         <a class="nav-link" href="/Product" style={{color:'white'}}>products</a>
         </li>
         <li>
         <a class="nav-link" href="/cantactform" style={{color:'white'}}>Contact</a>
         </li>
         &nbsp;
         <br />
         <li>
          <Link to='/cart'>
          <button type="button" class="btn btn-primary position-relative">
           Cart
           <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
           {cartItems.length}
           <span class="visually-hidden">unread messages</span>
          </span>
          </button>
          </Link>
         </li>
     </ul>
   </div>
 </div>
</nav>
       </div>
   )
}
export default connect(store=>store) (Navbar)