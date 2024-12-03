function Validation(values) {
    let error = {};  
  
    
    const email_pattern = /^[^\$@]+@[^\$@]+\.[^\$@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;  
  
    // Email Validation
    if (values.email === "") {
      error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Email doesn't match the required format";
    } else {
      error.email = "";  
    }
  
    // Password Validation
    if (values.password === "") {
      error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
      error.password = "Password is incorrect. It must be at least 8 characters long, include 1 uppercase letter, 1 lowercase letter, and 1 number";
    } else {
      error.password = "";  
    }
  
    return error;  
  }
  
  export default Validation;
  
