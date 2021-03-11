import React, {state} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    root: {
     
      margin: "30px 0 0 30px", 
      display: "flexbox",
      flexDirection: "row"     
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
      alignContent: "center"
    },
    pos: {
      marginBottom: 12,
    },
    button: {
        
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        margin: '0 30px 30px 0',
       
        
    },
    header: {
        width: "100%",
        padding: "0 20px 0 30px",
        margin: "0 0 20px",
        
        
    },
    buttonDiv: {
        alignItems: "right",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        display: "flexbox",
        flexDirection: "column"    
    },

    card: {
        margin:"0 10px 10px 10px"
    }
        
  });    

export default function ToDosPage() {
    const classes = useStyles(); 
    const [todoCount, setTodoCount] = React.useState(1)
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    
    function incrementToDoCounter() {
        setTodoCount (todoCount + 1)
    }

    function decrementToDoCounter() {
        setTodoCount (todoCount - 1)
    }


    return (
        <Grid container spacing ={3} className={classes.root}>            
            <Button className={classes.button} variant="contained" color="primary" href="#contained-buttons">
                New List
            </Button>
            <Card className={classes.card} variant="outlined">
            <CardContent>
            <form className={classes.header} noValidate autoComplete="off">            
                <TextField id="basic" label="List Name" variant="outlined" />
            </form>                
                <Typography className={classes.pos} color="textSecondary">                
                    <form noValidate autoComplete="off"> 
                        <Checkbox                        
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />                
                        <TextField id="standard-basic" label="List Item"/>
                        <IconButton aria-label="delete" className={classes.margin}>
                            <DeleteIcon />
                        </IconButton>
                    </form>
                    <div>
                        <AddCircleRoundedIcon style={{fill: "#4054b4"}}/>                
                    </div>
                </Typography>           
            </CardContent>
            <CardActions>
                <div className={classes.buttonDiv}> 
                    <Button variant="contained" color="secondary">
                        Delete
                    </Button>
                    <Button variant="contained" color="primary">
                        Add ToDo
                    </Button>
                </div>
            </CardActions>
            </Card>

            <Card className={classes.card} variant="outlined">
            <CardContent>
            <form className={classes.header} noValidate autoComplete="off">            
                <TextField id="basic" label="List Name" variant="outlined" />
            </form>                
                <Typography className={classes.pos} color="textSecondary">                
                    <form noValidate autoComplete="off"> 
                        <Checkbox                        
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />                
                        <TextField id="standard-basic" label="List Item"/>
                        <IconButton aria-label="delete" className={classes.margin}>
                            <DeleteIcon />
                        </IconButton>
                    </form>
                    <div>
                        <AddCircleRoundedIcon style={{fill: "#4054b4"}}/>                
                    </div>
                </Typography>           
            </CardContent>
            <CardActions>
                <div className={classes.buttonDiv}> 
                    <Grid>
                    <Button variant="contained" color="secondary">
                        Delete
                    </Button>
                    <Button variant="contained" color="primary">
                        Add ToDo
                    </Button>
                    </Grid>
                </div>
            </CardActions>
            </Card>
        </Grid>
      );
    }