import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardHeader, Grid, CardContent, Button, Typography, TextField, IconButton,Popover} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import * as _ from 'lodash'

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
        display: "flex",
    },
    buttonDiv: {
        alignItems: "right",
        justifyContent: "flex-end",
        display: "flex"
    },
    card: {
        margin:"0 10px 10px 10px"
    },
    cardHeader: {
        justifySelf: "start",  
    },
    updateButton: {
        fontSize: 12,
        padding: "2px",
        margin: "25px 0",
        marginLeft: "15%",
    },
    popover:{
        padding: 10,
    },
    popoverTitle: {
        padding: 0,
        margin: 5,
    },
    popoverText:{
        margin: 5,
    },
    popoverButton:{
        margin: 5,
        marginTop: 10,
    },
    newListButton:{
        marginRight: "100%",

    },
  });

export default function LinksPage() {
    const [newListAnchor, setnewListAnchor] = useState(null)
    const open = Boolean(newListAnchor);
    const newList = open ? 'simple-popover' : undefined;

    const [newItemAnchor, setnewItemAnchor] = useState(false)

    const API_INVOKE_URL = 'https://tv45w0cj0b.execute-api.us-west-1.amazonaws.com/prod2'
    const classes = useStyles();

    const [linkLists, setlinkLists] = useState([])
    const [linkList, setlinkList] = useState({id:"", description: "", category: "links", items: []})
    const [currentId, setCurrentId] = useState("")
    const [listName, setlistName] = useState("")
    const [itemsList, setitemsList] = useState([])
    const [newItem, setNewItem] = useState("");


    const searchApi = async () =>{
        fetch(API_INVOKE_URL)
        .then(response => response.json())
        .then(data => {
            setlinkLists(JSON.parse(data.body))
        })
    }

    const handleNewListClick = (event) => {
        setnewListAnchor(event.currentTarget);
    };
    
    const handleNewListClose = () => {
        setnewListAnchor(null);
    };
    
    const addtolinkLists = async (e) => {
        e.preventDefault()
        const newListObject = {id:`l${Date.now()}`, category: "links", description: listName, items: [] }
        fetch(API_INVOKE_URL, {
            method: 'PUT',
            body: JSON.stringify({newListObject}),
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .then(() => {searchApi()})
        setnewListAnchor(null)
        setlistName("")
    }

    const updatelinkList = async (e, id) => {
        e.preventDefault()
        fetch(API_INVOKE_URL + `/${id}`,{
            method: 'PUT',
            body: JSON.stringify({linkList}),
            headers: {'Content-Type': 'application/json'}
        })
            .then(() => {searchApi()})
        setlistName("")
    }    

    const updateItems = async (e,list,id) => {
        e.preventDefault()
        var tempList = list.items
        tempList.push(newItem)
        setitemsList(tempList)
        updatelinkList(e,id)
        setNewItem("")
    }

    const removelinkList = async (e,list) => {
        e.preventDefault()
        fetch(API_INVOKE_URL + `/${list.id}`,{
            method:'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
        .then(() => {searchApi()})
        console.log(`deleting link List: ${list.description}`)
    }

    useEffect(()=> {
        setlinkList({...linkList,id: currentId, items: itemsList})
    },[itemsList])

    useEffect(() => {
        setlinkList({...linkList,id: currentId, description: listName})
    },[listName])
    
    useEffect(() => {
        searchApi();
    }, [])

    return (
        <Grid container spacing ={3} className={classes.root}>
            <div>
                <Button className={classes.newListButton} aria-describedby={newList} variant="contained" color="primary" onClick={handleNewListClick}>
                    Add List
                </Button>
                <Popover
                    id={newList} open={open} newListAnchor={newListAnchor} onClose={handleNewListClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                    className={classes.popover}
                >
                    <form noValidate autoComplete="off" onSubmit={addtolinkLists}>
                        <h4 className={classes.popoverTitle}> Add List</h4>          
                        <TextField value={listName} id="basic" label="List Name" variant="outlined" onChange={(e) => {setlistName(e.target.value)}} className={classes.popoverText}/>
                        <Button type="submit" className={classes.popoverButton}>Add</Button>
                    </form>
                </Popover>
            </div>
            {_.sortBy(linkLists,"id").map(list => {
                    return (
                        <div >
                            <Card className={classes.card} variant="outlined">
                                    <CardHeader title={list.description} className={classes.cardHeader}/>
                                        <form onSubmit={e=> {
                                            updatelinkList(e,list.id)}}>
                                            <TextField value={listName} id="basic" label="update name" variant="outlined" onChange={(e) => {setCurrentId(list.id)
                                            setlistName(e.target.value)}} className={classes.popoverText}/>
                                            <Button type="submit" className={classes.popoverButton}>Update</Button>
                                        </form>
                                <CardContent>
                                    <div className={classes.pos} color="textSecondary">                
                                        {list.items.map(item => {
                                            return (
                                                <Typography>
                                                    {item}
                                                    <IconButton aria-label="delete" className={classes.margin}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Typography>
                                            )
                                        })}
                                        {
                                            newItemAnchor &&
                                            <div className={classes.newItemInput}>
                                                <form noValidate autoComplete="off" onSubmit={(e)=> 
                                                {setCurrentId(list.id)
                                                    updateItems(e,list,list.id)}}>
                                                    <TextField id="standard-basic" label="Links" value={newItem} onChange={(e)=>{setNewItem(e.target.value)}}/>
                                                    <IconButton aria-label="delete" className={classes.margin}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </form>
                                            </div>
                                        }
                                        <IconButton onClick={(e)=>{setnewItemAnchor(true)}}>
                                            <AddCircleRoundedIcon style={{fill: "#4054b4"}}/>                
                                        </IconButton> 
                                    </div>
                                    <Button variant="contained" color="secondary" onClick={(e) => {removelinkList(e,list)}}>
                                        Delete
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    )
                })}
        </Grid>
    );
}