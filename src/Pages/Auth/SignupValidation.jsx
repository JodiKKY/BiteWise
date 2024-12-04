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
  <div class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
  <svg class="flex-shrink-0 inline w-4 h-4 me-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div>
    <span class="font-medium">Ensure that these requirements are met:</span>
      <ul class="mt-1.5 list-disc list-inside">
        <li>At least 10 characters (and up to 100 characters)</li>
        <li>At least one lowercase character</li>
        <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
    </ul>
  </div>
</div>