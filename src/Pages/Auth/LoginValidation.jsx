function Validation(values) {
    let error = {};  
  
    
    const email_pattern = /^[^\$@]+@[^\$@]+\.[^\$@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;  
  
    // Email Validation
    if (values.email === "") {
      error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Email is wrong";
    } else {
      error.email = "";  
    }
  
    // Password Validation
    if (values.password === "") {
      error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
      error.password = "Password is incorrect.Try Again";
    } else {
      error.password = "";  
    }
  
    return error;  
  }
  
  export default Validation;
  
