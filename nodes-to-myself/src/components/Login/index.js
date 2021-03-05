import React, {useState,useEffect} from 'react'
import { Card,CardHeader,CardContent,Tabs,Typography,Button } from '@material-ui/core';
import { Close } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
      maxWidth: 700,
    },
    header: {
      maxHeight: 150,
    }
  })

export default function Login(){
    const classes = useStyles()
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    return(
        <div>
            <Card className={classes.root}>
                <CardHeader className={classes.header} title="Login"></CardHeader>
                <CardContent>
                    <Typography>USERNAME</Typography>
                    <Button>Submit</Button>
                </CardContent>
            </Card>
        </div>
    );
}