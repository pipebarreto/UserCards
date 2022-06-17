import React, {useState, useEffect} from 'react';
import UserCard from './UserCard';
import { Grid } from "@mui/material";


export default function Home (){

    const [users, setUsers] = useState([]);

    useEffect(()=> fetchData(), []); 

    const fetchData =() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>response.json())
      .then(data=>setUsers(data))
      .catch(err=>console.log(err))
    }

 return(

    <>

<div style ={{margin:100}}>

    <Grid
        container 
        direction="row"
        alignItems="center"
        >

        {users.map((user, index)=>(

        <UserCard key={index}  users={user}/>

        ))}  
        
    </Grid> 

</div>
    
    </>
 ) ;
}
