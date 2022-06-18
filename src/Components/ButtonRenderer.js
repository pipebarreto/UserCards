import { Button } from "@mui/material";

export default function ButtonRenderer(props){

    return(

        <Button variant="contained" 
        
        onClick={() => window.location.href = '/user/id/' + props.id}>

        More Details 
                      
        </Button>

    );
}