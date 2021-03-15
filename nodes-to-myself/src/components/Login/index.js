import React, {useState} from 'react'
import { Button,Card,CardHeader,CardContent,Tabs,Tab,TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      margin: 20,
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

export default function Login({authenticate}){
    const classes = useStyles()
    const history = useHistory();
    const [tabValue, setTabValue] = useState(0)
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const submit = async (event) =>{
        event.preventDefault()
        if(tabValue === 0){
            try{
                console.log({type: "login", username, password})
                const loginResponse = await Auth.signIn({
                username,
                password,
              });  
            authenticate(true);
            history.push("/")
            }catch(error){
                console.log(error)
            } 
        }else{
            try{
                console.log({type: "sign up", username, email, password})
                const signUpResponse = await Auth.signUp({
                username,
                password,
                attributes: {
                  email: email
                }
              });
              authenticate(true);
            history.push("/")
            }catch(error){
                console.log(error)
            } 
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
                        <Button type="submit" className={classes.submitButton}>{ tabValue === 0 ? "Log in" : "Sign up"}</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}