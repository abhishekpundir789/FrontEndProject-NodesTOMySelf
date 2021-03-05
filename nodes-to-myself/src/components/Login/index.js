import React, {useState,useEffect} from 'react'
import { Card,CardHeader,CardContent,Tabs,Typography,Button,TextField } from '@material-ui/core';
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
                    <form>
                        <TextField
                            value = {username}
                            onChange = {e => setUsername(e.target.value)}
                            fullWidth
                            label="Username"
                            variant="filled"
                        >
                        </TextField>
                        <TextField
                            value = {email}
                            onChange = {e => setEmail(e.target.value)}
                            fullWidth
                            label="Email"
                            variant="filled"
                        >
                        </TextField>
                        <TextField
                            type = "password"
                            value = {password}
                            onChange = {e => setPassword(e.target.value)}
                            fullWidth
                            label="Password"
                            variant="filled"
                        >
                        </TextField>
                        <Button>Submit</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}