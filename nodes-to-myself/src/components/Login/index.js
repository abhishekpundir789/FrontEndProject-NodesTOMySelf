import React, {useState} from 'react'
import { Button,Card,CardHeader,CardContent,Tabs,Tab,TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
      maxWidth: 700,
    },
    header: {
      maxHeight: 150,
    },
    inputField: {
        paddingBottom: 15,
    },
    submitButton: {
        backgroundColor: "#2256AE",
        color: "#FFFFF0"
    },
  })

export default function Login(){
    const classes = useStyles()

    const [tabValue, setTabValue] = useState(0)
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const submit = (event) =>{
        event.preventDefault()
        if(tabValue === 0){
            //login
            console.log({type: "login", username, password})
        }else{
            //sign up
            console.log({type: "sign up", username, email, password})
        }
    }

    const handleTabChange = (event, newValue) =>{
        setTabValue(newValue);
    }

    return(
        <div>
            <Card className={classes.root}>
                <CardHeader className={classes.header} title={ tabValue === 0 ? "Login" : "Sign Up"}></CardHeader>
                <CardContent>
                    <Tabs
                        variant = "fullWidth"
                        value={tabValue}
                        onChange={handleTabChange}
                        indicatorColor= "primary"
                    >
                        <Tab label="Login" />
                        <Tab label="Sign Up" />
                    </Tabs>
                </CardContent>
                <CardContent>
                    <form onSubmit={submit}>
                        <TextField
                            value = {username}
                            onChange = {e => setUsername(e.target.value)}
                            fullWidth
                            label="Username"
                            variant="filled"
                            className={classes.inputField}
                        ></TextField>
                        {tabValue === 1 && (
                            <TextField
                            value = {email}
                            onChange = {e => setEmail(e.target.value)}
                            fullWidth
                            label="Email"
                            variant="filled"
                            className={classes.inputField}
                            ></TextField>
                        )}
                        <TextField
                            type = "password"
                            value = {password}
                            onChange = {e => setPassword(e.target.value)}
                            fullWidth
                            label="Password"
                            variant="filled"
                            className={classes.inputField}
                        ></TextField>
                        <Button className={classes.submitButton}>{ tabValue === 0 ? "Log in" : "Sign up"}</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}