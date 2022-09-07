import React, {useState} from "react";
import EditModal from "../EditModal";
import { useQuery } from '@apollo/client';
import { QUERY_APPLICATIONS } from "../../utils/queries";

const Search = () => {
  const { loading, data } = useQuery(QUERY_APPLICATIONS); // the data that is returned from the database
  const [currentApp, setCurrentApp] = useState(); // tracks the application that is clicked for the edit modal
  const [nameForm, setNameForm] = useState({firstName: '', lastName: ''}) // variables for the search parameters
  const [applications, setApplications] = useState([]) //variable used to track the sorted applications
  const [isModalOpen, setIsModalOpen] = useState(false); // opens and closes the modal when an application is clicked

  const toggleModal = (app, i) => { // function to open and close the modal
    setCurrentApp({...app, index: i});
    setIsModalOpen(!isModalOpen);
  }

  if(loading){ // displayed while the information from the database is still loading
    return(
      <div>...Loading</div>
    )
  }
  
  const handleChange = e => { // updates the value of the nameForm variable whenever a change is made in the search parameters
    e.preventDefault();
    const {name, value} = e.target
    setNameForm({...nameForm, [name.trim()]: value.trim()})
  }

  const handleSubmit = async e => { // displays applications based on search parameters
    e.preventDefault(); 
    setApplications([]); // resets the list of applications
    const {firstName, lastName} = nameForm; // variables for the search parameters
    let placeHolder = [] // variable needed for pushing the sorted applications to the final applications variable
    if(firstName && lastName){ // runs if there are any characters in both search boxes 
      for (let i = 0; i < data.applications.length; i++) { // loops through all applications
        if(data.applications[i].firstName === firstName){ // checks if any of the applications have a first name that matches the name given in the search box
          if(data.applications[i].lastName === lastName){ // checks if any of the applications have a last name that matches the name given in the search box
            placeHolder.push(data.applications[i]) // adds the applications that pass the previous conditionals to a placeholder array 
            setApplications(placeHolder) // the applications in the placeholder array are pushed to be displayed
            placeHolder = [] // the placeholder variable is reset for futher use
          }
        }
      }
      return;
    }
    else if(firstName){ // runs if there are any characters in the first name search box
      for (let i = 0; i < data.applications.length; i++) {
        if(data.applications[i].firstName === firstName){
          placeHolder.push(data.applications[i])
          setApplications(placeHolder)
          placeHolder = []
        }
      }
      return;
    }
    else if(lastName){ // runs if there are any characters in the last name search box
      for (let i = 0; i < data.applications.length; i++) {
        if(data.applications[i].lastName === lastName){
          placeHolder.push(data.applications[i])
          setApplications(placeHolder)
          placeHolder = []
        }
      }
      return;
    }
    else{  // runs if there are no characters in either search box
      setApplications(data.applications); // displays all applications
      return;
    }
  }

  return (
    <div>
      <h3>Search Applications</h3>
      {isModalOpen && (
        <EditModal currentApp={currentApp} onClose={toggleModal} /> // edit modal
      )}
      <form onSubmit={handleSubmit}>
        <label>First Name: </label>
        <input name="firstName" defaultValue={nameForm.firstName} onChange={handleChange}></input>
        
        <label>Last Name: </label>
        <input name="lastName" defaultValue={nameForm.lastName} onChange={handleChange}></input>
        
        <button type="submit">Search!</button>
        <div id="search-container">
          {applications.length? // conditional to check if there are any applications found when the search button is pressed
          (
          applications.map((app,i) => { // loops through the applications found and displays them
            return(
            <div key={app.id} onClick={() => toggleModal(app,i)}>
              <div>Submitted: {app.submittedDate}</div>
              <div>First Name: {app.firstName}</div>
              <div>Last Name: {app.lastName}</div>
              <div>Age: {app.age}</div>
              <div>Grade: {app.grade}</div>
              <div>School: {app.school}</div>
              <div>----------------------</div>
            </div>
          )})
          ):(
            // displayed if the search button has not been pressed or if no students were found based on the search parameters
            <div>No Students. Press the search button with no parameters to get a list of all applications, or check that you spelled the name correctly.</div> 
          )}
        </div>
      </form>
    </div>
  )
}

export default Search;