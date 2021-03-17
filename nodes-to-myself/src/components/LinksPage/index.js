import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardHeader, Grid, CardContent, Button, Typography, TextField, IconButton,Popover} from '@material-ui/core';
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
  });

export default function LinksPage() {
    const API_INVOKE_URL = 'https://tv45w0cj0b.execute-api.us-west-1.amazonaws.com/prod'
    const classes = useStyles();
    const [newListAnchor, setnewListAnchor] = useState(null)
    const [updateListAnchor, setupdateListAnchor] = useState(null)
    const [categories, setCategories] = useState([])
    const [newCategory, setNewCategory] = useState("")
    const open = Boolean(newListAnchor);
    const open2 = Boolean(updateListAnchor)
    const newList = open ? 'simple-popover' : undefined;
    const updateList = open2 ? 'simple-popover' : undefined

    const searchApi = async () =>{
        fetch(API_INVOKE_URL)
        .then(response => response.json())
        .then(data => {
            setCategories(JSON.parse(data.body))
        })
    }

    useEffect(() => {
        searchApi();
    }, [])

    const handleNewListClick = (event) => {
        setnewListAnchor(event.currentTarget);
    };
    
    const handleNewListClose = () => {
        setnewListAnchor(null);
    };

    const handleUpdateListClick = (event) => {
        setupdateListAnchor(event.currentTarget);
    };

    const handleUpdateListClose = () => {
        setupdateListAnchor(null);
    };
    
    const addtoCategories = (e) => {
        e.preventDefault()
        var exist = false
        categories.forEach(cat => {if(cat.description === newCategory){
            console.log(`${newCategory} already exist`)
            exist = true
        }})
        if(!exist){
            const newCatObject = {category: "links", description:newCategory, items: [] }
            //put method to add newCatObject into category, and upload to database
            console.log(`adding ${newCategory} to categories`)            
        }
        setnewListAnchor(null)
        setNewCategory("")
    }

    const updateCategory = (e, catName) => {
        e.preventDefault()
        var tempCatergories = categories
        for(var i = 0; i < tempCatergories.length; i++){
            if(tempCatergories[i] === catName){
                tempCatergories[i] = newCategory
                setCategories([...tempCatergories])
            }
        }
        console.log(`updated ${catName} to ${newCategory}`)
        setNewCategory("")
        setupdateListAnchor(null)
    }

    const removeCategory = (e,catName) => {
        e.preventDefault()
        var tempCatergories = categories
        for(var i = 0; i < tempCatergories.length; i++){
            if(tempCatergories[i] === catName){
                tempCatergories.splice(i,1)
                setCategories([...tempCatergories])
            }
        }
        console.log(`deleting category: ${catName}`)
    }

    return (
        <Grid container spacing ={3} className={classes.root}>
            <div>
                <Button aria-describedby={newList} variant="contained" color="primary" onClick={handleNewListClick}>
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
                    <form  noValidate autoComplete="off" onSubmit={addtoCategories}>
                        <h4 className={classes.popoverTitle}> Add List</h4>          
                        <TextField value={newCategory} id="basic" label="List Name" variant="outlined" onChange={(e) => {setNewCategory(e.target.value)}} className={classes.popoverText}/>
                        <Button type="submit" className={classes.popoverButton} >Add</Button>
                    </form>
                </Popover>
            </div>
            {categories.map(cat => {
                    return (
                        <div >
                            <Card className={classes.card} variant="outlined">
                                <div className={classes.header}>
                                    <CardHeader  title={cat.description} className={classes.cardHeader}/>
                                
                                    <Button aria-describedby={updateList} variant="contained" color="primary" onClick={handleUpdateListClick} className={classes.updateButton}>
                                        Change
                                    </Button>
                                    <Popover
                                        id={updateList} open={open2} updateListAnchor={updateListAnchor} onClose={handleUpdateListClose}
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
                                        <form onSubmit={e=>{updateCategory(e,cat.description,newCategory)}}>
                                            <h4 className={classes.popoverTitle}> Update {cat.description}</h4>
                                            <TextField value={newCategory} id="basic" label="List Name" variant="outlined" onChange={(e) => {setNewCategory(e.target.value)}} className={classes.popoverText}/>
                                            <Button type="submit" className={classes.popoverButton}>Update</Button>
                                        </form>
                                    </Popover>
                                </div>
                                <CardContent>
                                    <Typography className={classes.pos} color="textSecondary">                
                                        <form noValidate autoComplete="off" > 
                                            <TextField id="standard-basic" label="Links"/>
                                            <IconButton aria-label="delete" className={classes.margin}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </form>
                                        <div>
                                            <AddCircleRoundedIcon style={{fill: "#4054b4"}}/>                
                                        </div>
                                    </Typography>
                                    <Button variant="contained" color="secondary" onClick={(e) => {removeCategory(e,cat)}}>
                                        Delete Category
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                        
                    )
                })}
        </Grid>
    );
}