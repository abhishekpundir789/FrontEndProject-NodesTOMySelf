import React, {useState, useEffect} from 'react'
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
import * as _ from "lodash"
import { ContactMailOutlined } from '@material-ui/icons';

export default function ToDosPage() {
    const API_URL = 'https://enz236hkvf.execute-api.us-west-1.amazonaws.com/prod'                    
    
    const classes = useStyles();    
    const [toDoLists, setToDoLists] = React.useState([])
    const [toDoList, setToDoList] = React.useState()
    // const [listName, setListName] = React.useState()
    const [item, setItem] = React.useState()
    const [items, setItems] = React.useState()

    const getAllLists = async () => {
        fetch(API_URL + '/todo')
            .then(response => response.json())
            .then(data => {
            setToDoLists(data)
            }
        )        
    }
    
    const putList = async () => {
        const newToDoList = 
            {
                "toDoList":{
                    "id": "t"+(Date.now()),
                    "category": "todo",
                   "description": "New List"
                }
            }
        
        fetch(API_URL , {
            method: 'PUT',
            body: JSON.stringify(newToDoList),
            headers: {'Content-Type' : 'application/json'}
            
        })
        .then(response => response.json())        
        .then(() => { getAllLists() })
    }

    const patchList = async (todoListId) => {
        
        fetch(`${API_URL}/${todoListId}` , {
            method: 'PUT',
            body: JSON.stringify({toDoList}),            
            headers: {'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*'                        
            }   
            
        } )
        .then(response => response.json())
    }

    const deleteList = async (toDoListId) => {
        fetch(`${API_URL}/${toDoListId}` , {
            method: 'DELETE',                        
            headers: {'Content-Type' : 'application/json',
                    'Access-Control-Allow-Origin': '*'                        
            }   
            
        } )       
        .then(() => { getAllLists() })
    }

    useEffect(()=> {
        getAllLists();
        // console.log(toDoLists)
    }, [])

    const listNameInput = (event, todoListId, toDoList) => {
        // setListName(event.target.value)                 
        setToDoList({...toDoList, description: event.target.value})
        patchList(todoListId);
        console.log(toDoList.description)
       
    }    

  
    
    const deleteListById  = (toDoListId) => {
        // setToDoList({toDoList})
        deleteList(toDoListId)
    }    
    
    const NewList = () => {
        putList()
    }

    const itemNameInput = async (event, item, items, index, toDoList, todoListId) => {  
        // setListName(event.target.value)      
        setItems(items)
        items.splice(index,1,event.target.value)
        setItem(event.target.value)
        console.log(items)
        setToDoList  ({...toDoList, })
        
        patchList (todoListId)
        
    } 
    
    return (
        <Grid container spacing ={3} className={classes.root}>            
            <Button className={classes.button} variant="contained" color="primary" href="#contained-buttons" onClick={NewList}>
                New List
            </Button>
            {
                _.sortBy(toDoLists,"id").map(toDoList => (
                   
                    <Card key={toDoList.id} className={classes.card} variant="outlined">
                         
                    <CardContent>
                    <form className={classes.header} noValidate autoComplete="off">            
                        <TextField id="basic" placeholder="To Do List" defaultValue={toDoList.description} variant="outlined"  onChange = {event => listNameInput(event, toDoList.id, toDoList)}/>
                    </form>                  
                            {   
                                toDoList.items &&
                                toDoList.items.map((item, index) => (
                                    <form key={ `item-${index}`} noValidate autoComplete="off"> 
                                        <Checkbox                        
                                            color="primary"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />                
                                        <TextField id="standard-basic" defaultValue={item}  onChange = {event => itemNameInput(event, item, toDoList.items, index, {toDoList}, toDoList.id)}/>
                                        <IconButton aria-label="delete" className={classes.margin}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </form>
                                ))
                            }                            
                                <AddCircleRoundedIcon style={{fill: "#4054b4"}}/>                
                        
                    </CardContent>
                    <CardActions>
                        
                            <Button className={classes.buttonDiv} variant="contained" color="secondary" 
                            onClick={() => deleteListById(toDoList.id)}
                            >
                                Delete
                            </Button>                            
                        
                    </CardActions>
                    </Card>
                ))
            }
           
        </Grid>
      );
    }

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