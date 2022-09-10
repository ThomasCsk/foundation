import React, {useState} from "react";
import { useMutation } from "@apollo/client";
import { EDIT_APPLICATION } from '../../utils/mutations';

const EditModal = ({onClose, currentApp}) => {

  const [submitEdit] = useMutation(EDIT_APPLICATION)
  const [editForm, setEditForm] = useState
({
    _id: currentApp._id,
    createdAt: currentApp.createdAt,
    submittedDate: currentApp.submittedDate,
    firstName: currentApp.firstName,
    middleName: currentApp.middleName,
    lastName: currentApp.lastName,
    age: currentApp.age,
    birthday: currentApp.birthday,
    grade: currentApp.grade,
    school: currentApp.school,
    mothersName: currentApp.mothersName,
    fathersName: currentApp.fathersName,
    brothersName: currentApp.brothersName,
    sistersName: currentApp.sistersName,
    address: currentApp.address,
    phoneNumber: currentApp.phoneNumber,
    guardianPhone: currentApp.guardianPhone
  })

  const handleChange = e => { // changes the values in the formState object whenever a change is made in the application form
    e.preventDefault()
    const {name, value} = e.target
    setEditForm({...editForm, [name.trim()]: value.trim()})
  }

  const handleSubmit = async e => { // pushes the application form information to the database
    e.preventDefault()
    try{
      console.log(editForm);
      const data = await submitEdit({variables: {...editForm}}); // attempts to submit the data to the database
      console.log(data);
    }
    catch(err){
      console.error(err);
    }
  }

  return(
    <div className='modalBackground'>
      <div className='modalCard' >
        <div>
          <div className="pushButtonRight">
            <button className='closeButton' onClick={onClose}>X</button>
          </div>
          
          <h3 className='modalTitle'>{editForm.firstName} {editForm.lastName}'s Application</h3>
        </div>
        <div className='modalContent'>
          <label>Created: </label>
          <input name="createdAt" defaultValue={editForm.createdAt} className='input'/>

          <label>Submitted Date: </label>
          <input name="submittedDate" defaultValue={editForm.submittedDate} onChange={handleChange} className='input'/>
          
          <label>First Name: </label>
          <input name="firstName" defaultValue={editForm.firstName} onChange={handleChange}  className='input' required/>
          
          <label>Middle Name: </label>
          <input name="middleName" defaultValue={editForm.middleName} onChange={handleChange} className='input'/>
          
          <label>Last Name: </label>
          <input name="lastName" defaultValue={editForm.lastName} onChange={handleChange} className='input' required/>
          
          <label>Age: </label>
          <input name="age" defaultValue={editForm.age} onChange={handleChange} className='input'/>
          
          <label>Birthday: </label>
          <input name="birthday" defaultValue={editForm.birthday} onChange={handleChange} className='input'/>
          
          <label>Grade: </label>
          <input name="grade" defaultValue={editForm.grade} onChange={handleChange} className='input'/>
          
          <label>School: </label>
          <input name="school" defaultValue={editForm.school} onChange={handleChange} className='input'/>
          
          <label>Mother's Name: </label>
          <input name="mothersName" defaultValue={editForm.mothersName} onChange={handleChange} className='input'/>
          
          <label>Father's Name: </label>
          <input name="fathersName" defaultValue={editForm.fathersName} onChange={handleChange} className='input'/>
          
          <label>Brother's Name: </label>
          <input name="brothersName" defaultValue={editForm.brothersName} onChange={handleChange} className='input'/>
          
          <label>Sister's Name: </label>
          <input name="sistersName" defaultValue={editForm.sistersName} onChange={handleChange} className='input'/>
          
          <label>Address: </label>
          <input name="address" defaultValue={editForm.address} onChange={handleChange} className='input'/>
          
          <label>Phone Number: </label>
          <input name="phoneNumber" defaultValue={editForm.phoneNumber} onChange={handleChange} className='input'/>
          
          <label>Parent Phone Number: </label>
          <input name="guardianPhone" defaultValue={editForm.guardianPhone} onChange={handleChange} className='input'/>
            
        </div>    
        <div className='modalButtons'>
          {/* <button onClick={handleSubmit} className='editButton'>Save Changes</button> */}
          {/* <button onClick={onClose} className='closeButton'>Close</button> */}
        </div>
      </div>
    </div>
  )
}

export default EditModal;