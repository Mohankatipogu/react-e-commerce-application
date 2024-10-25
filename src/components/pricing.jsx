import React from "react";

function Price(){
    return(
        <div class="col-lg-4 pt-5 pt-lg-0">
                        <div class="row mb-5 mb-lg-0">
                            <div class="col-md-6 col-lg-12">
                         
                                <div class="card shadow p-2 mb-4 z-index-9">
                          
                                    <div class="card-body px-3">
                                
                                        <div class="d-flex justify-content-between align-items-center">
                           
                                            <div>
                                                <div class="d-flex align-items-center flex-column">
                                                    <h5 class="fw-bold mb-0 me-2">₹25000(Offline)</h5>
                                                    <h4 class="fw-bold mb-0 me-2">₹20000(Online)</h4>
                                                </div>
                                            </div>

                                      
                                            <a class="btn btn-success text-white mx-2" data-bs-toggle="modal" data-bs-target="#contactModal">Register</a>

                                        </div>
                                    </div>
                                </div>
                         
                                <div class="card card-body shadow p-4 mb-4">
                                    <h4 class="mb-3">This course includes</h4>
                                    <ul class="list-group list-group-borderless">
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <span class="h6 fw-light mb-0"><i class="fas fa-fw fa-book-open text-primary"></i>Lectures</span>
                                            <span>50</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <span class="h6 fw-light mb-0"><i class="fas fa-fw fa-clock text-primary"></i>Duration</span>
                                            <span>1h 30m</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <span class="h6 fw-light mb-0"><i class="fas fa-fw fa-signal text-primary"></i>Skills</span>
                                            <span>Beginner</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <span class="h6 fw-light mb-0"><i class="fas fa-fw fa-globe text-primary"></i>Language</span>
                                            <span>English,Telugu,Hindi</span>
                                        </li>
                                        <li class="list-group-item d-flex justify-content-between align-items-center">
                                            <span class="h6 fw-light mb-0"><i class="fas fa-fw fa-medal text-primary"></i>Certificate</span>
                                            <span>Yes</span>
                                        </li>
                                    </ul>
                                </div>
                              
                            </div>
                        </div>
                    </div>
    )
}
 export default Price;