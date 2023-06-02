 const Form = () =>{

  return(
 
 <form>
   <h1 className="text-danger display-6 text-center">FORMS</h1>
   <div className="mb-3">
     <label htmlFor="usurname" className="form-label">
       User Name
     </label>
     <input type="text" className="form-control" id="username" />
   </div>
   <div className="mb-3">
     <label htmlFor="email" className="form-label">
       Email
     </label>
     <input type="email" className="form-control" id="email" />
   </div>
   <div className="mb-3">
     <label htmlFor="password" className="form-label">
       Password
     </label>
     <input type="password" className="form-control" id="password" />
   </div>
   <button type="submit" className="btn btn-danger">
     Submit
   </button>
 </form>

 )}

 export default Form