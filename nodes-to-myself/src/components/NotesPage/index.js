import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        margin: "30px 0 0 30px", 
      display: "flexbox",
      flexDirection: "row"
    },

    button: {
        
        borderRadius: 3,
        border: 0,
        color: 'white',
        backgroundColor: 'green',
        height: 48,
        margin: '0 30px 30px 0',
       
        
    },
})
const Notes = props => props.data.map(note => <div>{note.text}</div>);

export default () => {
const classes = useStyles();
const initialData = [{text: 'Hey'}, {text: 'there'}];
const [data, setData] = useState(initialData);
return (
    <div className={classes.root}>
    <form>
    <TextField id="basic" label="List Name" variant="outlined" style={{width: '80%'}}/>
    </form><br></br>
    <Button className = {classes.button} color = "primary">Add Note</Button>

    <Notes data={data} />
    </div>
    );
}