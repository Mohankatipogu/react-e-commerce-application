import React from "react";

function CountiesFooter(){
    
   return(
       <div className='fixed-bottom '>

       <div class="card text-center ">
 <div class="card-header ">
   <ul class="nav nav-pills card-header-pills">
     <li class="nav-item">
       <a class="nav-link active" href="#">Active</a>
     </li>
     <li class="nav-item">
       <a class="nav-link" href="#">Link</a>
     </li>
     <li class="nav-item">
       <a class="nav-link disabled" aria-disabled="true">Disabled</a>
     </li>
   </ul>
 </div>
 <div class="card-body">
   <h5 class="card-title">Special title treatment</h5>
   <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
   <a href="#" class="btn btn-primary">Go somewhere</a>
 </div>
</div>
       </div>
   )
}
export default CountiesFooter;