import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function MoreInfo() {

    const {id} = useParams();
 
  const [userInfo, setUserInfo] = useState([]);

    useEffect(()=> fetchData(), []); 

    const fetchData =() => {
      fetch('https://jsonplaceholder.typicode.com/users/'+id)
      .then(response=>response.json())
      .then(data=>setUserInfo(data))
      .catch(err=>console.log(err))
    }

    const [loading, setLoading] = useState(true);

    useEffect(() => {

      setTimeout(() => {
         setLoading(false)
      }, 500)

    }, []);

    
    if(!loading){

      return (

        <ul>
    
        <li>Name: {userInfo.name}</li>
        
        <li>Username: {userInfo.username}</li>
        
        <li>Email: {userInfo.email}</li>
        
        <li>Phone: {userInfo.phone}</li>
    
        
        <li> Company: {userInfo.company.name}</li>
          
          <li>Address:</li>
          
            <ul>
            <li>Street: {userInfo.address.street}</li>
    
            <li>Suite: {userInfo.address.suite}</li>
           
            <li>City: {userInfo.address.city}</li>
    
            <li>Zipcode: {userInfo.address.zipcode}</li>
            
            </ul>
          </ul>
    
      );
   }
   else{
    return <div>loading...</div> 
   }

}