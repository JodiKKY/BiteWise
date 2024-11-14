function Validation(values){
    const email_pattern = /^[^\$@]+@[^\$@]+\.[^\$@]+$/
    const password_pattern = /^(?=,*\d)(?=,*[a-z])(?=,*[A-z])[a-zA-z0-9]{8,} $/ 
    if(values.email === ""){
            error.email = "Email should not be empty"
        }
        else if(!email_pattern.test(values.email)){
            error.email = "Email doesn't match"
        }else {
                error.email = ""
            }    
    if(values.password === ""){
     error.name = "Password should not be empty"}
      else if(!password_pattern.test(values.password)){
      error.password = "Password is incorrect"
      }else {
        error.password = ""
     }       
     return error; 
}
export default Validation;
