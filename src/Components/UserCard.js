import React from "react";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Grid } from "@mui/material";
import ButtonRenderer from "./ButtonRenderer";

export default function UserCard (props){

  return(   

  <div style ={{margin:10}}>

    <Card variant="elevation" sx={{ width: 250, height:300}}>


      <CardContent>

      <Grid container direction="column" alignItems="center">
        
        <Avatar
          alt={props.users.name}
          src="/broken-image.jpg"
          sx={{ width: 80, height: 80,  justifyContent: 'center'  }}          
        />

      </Grid>
      
        <p></p>
        <Typography variant="h6" sx={{ fontSize: 18 }}
          fontWeight='bold' 
          align='center'
          >
          {props.users.name}
        </Typography>

        <Typography sx={{ fontSize: 14 }}
          fontStyle={'italic'} 
          align='center'>
          @{props.users.username}
        </Typography>


        <Typography sx={{ fontSize: 14, marginTop:1.5}}
          align='center'
          >
         
         <a href={'http://' + props.users.website}>http://{props.users.website}</a>
         
        </Typography>


      </CardContent>

      <CardActions>

      <Grid container direction="column"
        alignItems="center"  justifyContent="flex-end">


      <ButtonRenderer id={props.users.id}/>


      </Grid>

      </CardActions>

    </Card>
  </div>

    );
}
