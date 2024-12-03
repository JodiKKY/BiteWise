function Validation(values) {
    let error = {};
  
    // Email and password regex patterns
    const email_pattern = /^[^\$@]+@[^\$@]+\.[^\$@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;  // Password must have at least 1 number, 1 lowercase, 1 uppercase, and at least 8 characters.
  
    // First Name Validation
    if (values.firstName === "") {
      error.firstName = "First Name should not be empty";
    } else {
      error.firstName = "";
    }
  
    // Last Name Validation
    if (values.lastName === "") {
      error.lastName = "Last Name should not be empty";
    } else {
      error.lastName = "";
    }
  
    // Email Validation
    if (values.email === "") {
      error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Invalid email format";
    } else {
      error.email = "";
    }
  
    // Password Validation
    if (values.password === "") {
      error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
      error.password = "Password must be at least 8 characters long, include 1 uppercase letter, 1 lowercase letter, and 1 number";
    } else {
      error.password = "";
    }
  
    return error;
  }
  
  export default Validation;
  