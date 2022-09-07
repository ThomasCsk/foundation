import React, {useState} from "react";
import { useMutation } from "@apollo/client";
import { ADD_APPLICATION } from "../../utils/mutations";

const ApplicationForm = () => {
  const [formState, setFormState] = useState
    ({
      submittedDate:'',
      firstName:'',
      middleName:'',
      lastName:'',
      age:'',
      birthday:'',
      grade:'',
      school:'',
      mothersName:'',
      fathersName:'',
      brothersName:'',
      sistersName:'',    
      address:'',
      phoneNumber:'',
      guardianPhone: ''
    }) // object used to track all the information in the form to be submitted
      
  const [addApplication] = useMutation(ADD_APPLICATION); // the function used to pash the application to the database
    
  const handleChange = e => { // changes the values in the formState object whenever a change is made in the application form
    e.preventDefault()
    const {name, value} = e.target
    setFormState({...formState, [name.trim()]: value.trim()})
  }
  const handleSubmit = async () => { // pushes the application form information to the database
    try{
      const {data} = await addApplication({variables: {...formState}}); // attempts to submit the data to the database
      console.log(data);
    }
    catch(err){
      console.error(err);
    }
    setFormState({
      submittedDate:'',
      firstName:'',
      middleName:'',
      lastName:'',
      age:'',
      birthday:'',
      grade:'',
      school:'',
      mothersName:'',
      fathersName:'',
      brothersName:'',
      sistersName:'',    
      address:'',
      phoneNumber:'',
      guardianPhone: ''
    }) //resets the information in the formState variable after the data is submitted to the database
  }
  return(
  <div>
    <h3>Add Application</h3>
    <form onSubmit={handleSubmit}>
      <label>Submitted Date: </label>
      <input name="submittedDate" defaultValue={formState.submittedDate} onChange={handleChange}/>
      
      <label>First Name: </label>
      <input name="firstName" defaultValue={formState.firstName} onChange={handleChange} required/>
      
      <label>Middle Name: </label>
      <input name="middleName" defaultValue={formState.middleName} onChange={handleChange}/>
      
      <label>Last Name: </label>
      <input name="lastName" defaultValue={formState.lastName} onChange={handleChange}/>
      
      <label>Age: </label>
      <input name="age" defaultValue={formState.age} onChange={handleChange}/>
      
      <label>Birthday: </label>
      <input name="birthday" defaultValue={formState.birthday} onChange={handleChange}/>
      
      <label>Grade: </label>
      <input name="grade" defaultValue={formState.grade} onChange={handleChange}/>
      
      <label>School: </label>
      <input name="school" defaultValue={formState.school} onChange={handleChange}/>
      
      <label>Mother's Name: </label>
      <input name="mothersName" defaultValue={formState.mothersName} onChange={handleChange}/>
      
      <label>Father's Name: </label>
      <input name="fathersName" defaultValue={formState.fathersName} onChange={handleChange}/>
      
      <label>Brother's Name: </label>
      <input name="brothersName" defaultValue={formState.brothersName} onChange={handleChange}/>
      
      <label>Sister's Name: </label>
      <input name="sistersName" defaultValue={formState.sistersName} onChange={handleChange}/>
      
      <label>Address: </label>
      <input name="address" defaultValue={formState.address} onChange={handleChange}/>
      
      <label>Phone Number: </label>
      <input name="phoneNumber" defaultValue={formState.phoneNumber} onChange={handleChange}/>
      
      <label>Parent Phone Number: </label>
      <input name="guardianPhone" defaultValue={formState.guardianPhone} onChange={handleChange}/>
      
      
      <button type="submit">Submit</button>
    </form>
  </div>
)
};

export default ApplicationForm;