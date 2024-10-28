import React from 'react'

const Restaurant_owner = () => {
  return (
    <div> 
       <h1 className='font-bold'>Let us help your business grow</h1> 
      <form>
       
      <div class="flex flex-wrap ">
        
          <div class="input-box">
            <span class="details">Owner's Full Name</span><br/>
            <input type="text" placeholder="Enter your name" required/><br/><br/>
          </div>
          
          <div class="input-box">
            <span class="details">Restaurant Name</span><br/>
            <input type="text" placeholder="Enter your username" required/><br/><br/>
          </div>
         
          <div class="input-box">
            <span class="details">Email</span><br/>
            <input type="text" placeholder="Enter your email" required/><br/><br/>
          </div>
          
          <div class="input-box">
            <span class="details">Phone Number</span><br/>
            <input type="text" placeholder="Enter your number" required/><br/><br/>
          </div>
         
          <div class="input-box">
            <span class="details">Address</span><br/>
            <input type="text" placeholder="Enter your address" required/><br/><br/>
          </div>
       
          <div class="input-box">
            <span class="details">Phone Number:</span><br/>
            <input type="text" placeholder="phone number" required/><br/><br/>
          </div>
        </div>
        </form>  
    </div>
  )
}

export default Restaurant_owner