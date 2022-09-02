import React, {useState} from "react";
import EditModal from "../../EditModal";
import { useQuery } from '@apollo/client';
import { QUERY_APPLICATIONS } from "../../utils/queries";

const Search = () => {
  const { loading, data } = useQuery(QUERY_APPLICATIONS);
  const [currentApp, setCurrentApp] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (app, i) => {
    setCurrentApp({...app, index: i});
    setIsModalOpen(!isModalOpen);
  }

  if(loading){
    return(
      <div>...Loading</div>
    )
  }
  
  const testFunc = () => {
    console.log(data);
  }

  return (
    <div>
      {isModalOpen && (
        <EditModal currentApp={currentApp} onClose={toggleModal} />
      )}
      <ul>
        <button onClick={testFunc}>button</button>
      </ul>
    </div>
  )
}

export default Search;