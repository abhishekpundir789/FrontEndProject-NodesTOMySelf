import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardHeader, Grid, CardContent, Button, Typography, TextField, IconButton} from '@material-ui/core';
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
            exist = true
        }})
        if(!exist){
            setCategories([...categories, newCategory])
            console.log(`adding ${newCategory} to categories`)            
        }
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
            <form className={classes.header} noValidate autoComplete="off" onSubmit={addtoCategories}>            
                <TextField value={newCategory} id="basic" label="List Name" variant="outlined" onChange={(e) => {setNewCategory(e.target.value)}}/>
                <Button type="submit">Add List</Button>
            </form>
            {categories.map(cat => {
                    return (
                        <div >
                            <Card className={classes.card} variant="outlined">
                                <CardHeader  title={cat}/>
                                <form onSubmit={e=>{updateCategory(e,cat,newCategory)}}>
                                    <TextField value={newCategory} id="basic" label="List Name" variant="outlined" onChange={(e) => {setNewCategory(e.target.value)}}/>
                                    <Button type="submit">Update</Button>
                                </form>
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