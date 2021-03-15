import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActions,Grid, CardContent, Button, Typography, TextField, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';


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
        display: "flex"
    },

    card: {
        margin:"0 10px 10px 10px"
    }
        
  });    

export default function LinksPage() {
    const classes = useStyles(); 
    const [linkList, setLinkList] = useState([])
    const [categories, setCategories] = useState([])
    const [newCategory, setNewCategory] = useState("")

    const addtoCategories = (e) => {
        e.preventDefault()
        var exist = false
        categories.forEach(cat => {if(cat === newCategory){
            console.log(`${newCategory} already exist`)
            exist = true;
        }})
        if(!exist){
            setCategories([...categories, newCategory])
            console.log(`adding ${newCategory} to categories`)            
        }
        setNewCategory("")
    }
    
    return (
        <Grid container spacing ={3} className={classes.root}>            
            <Button className={classes.button} variant="contained" color="primary" href="#contained-buttons">
                New List
            </Button>
            {/* foreach loop to render list */}
            <Card className={classes.card} variant="outlined">
                <CardContent>
                <form className={classes.header} noValidate autoComplete="off" onSubmit={addtoCategories}>            
                    <TextField value={newCategory} id="basic" label="List Name" variant="outlined" onChange={(e) => {setNewCategory(e.target.value)}}/>
                    <Button type="submit"> Save List Name </Button>
                </form>                
                    <Typography className={classes.pos} color="textSecondary">                
                        <form noValidate autoComplete="off"> 
                
                            <TextField id="standard-basic" label="Links"/>
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
                    </div>
                </CardActions>
            </Card>

        </Grid>
      );
    }