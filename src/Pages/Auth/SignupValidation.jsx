function Validation(values){
    let error = {}
    const email_pattern = /^[^\$@]+@[^\$@]+\.[^\$@]+$/
    const password_pattern = /^(?=,*\d)(?=,*[a-z])(?=,*[A-z])[a-zA-z0-9]{8,} $/ 
    if(values.firstName === ""){
    error.name = "First Name should not be empty"}
    else {
        error.firstName = ""
    }
    if(values.lastName === ""){
        error.name = "Last Name should not be empty"}
        else {
            error.lastName = ""
        }
    if(values.email === ""){
        error.email = "Email should not be empty"}
            else {
                error.email = ""
            }    
    if(values.password === ""){
                error.name = "Password should not be empty"}
                else {
                    error.password = ""
                }        
                return error; 
            }
            export default Validation;

