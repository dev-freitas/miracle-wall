import { db } from '../firebaseConfig';
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";



const MiraclesList = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "stories");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  

  return (
    <div className='m-list' >
      <div className="dropdown mt-5">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Miracles list
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {users.map((user) => { return (<li key={user.id + '1'}><a className="dropdown-item"  href={'#' + user.id}>{user.title}</a></li>)})}
        </ul>
      </div>
        {users.map((user) => {
          return (
            <div className='container card d-flex mt-5' id={user.id} key={user.id}>
                <h2>{user.title}</h2>
                <p>{user.message}</p>
            </div>
          )
        })}
    </div>
  )
}

export default MiraclesList
