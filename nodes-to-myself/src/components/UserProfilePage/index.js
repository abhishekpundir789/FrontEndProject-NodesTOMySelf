import React, {useState} from 'react'
import { Button,TextField,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
      maxWidth: 700,
    },
    header:{
      fontWeight: "bold",
      fontSize: 22,
      padding: 10,
    },
    title: {
      fontWeight: "bold",
      fontSize: 18,
      padding: 10,
      textAlign: "left",
    },
    inputField:{
        paddingBottom: 15,
    },
    submitButton: {
        backgroundColor: "#2256AE",
        color: "#FFFFF0",
    },
  })

export default function UserProfilePage(){
    const classes = useStyles()
    //const [user,setUser] = useState({})
    const [newPassword, setNewPassword] = useState("")
    //const [confirmNewPassword, setConfirmNewPassword] = useState("")
    const [newEmail, setNewEmail] = useState("")

    //api call to get user

    const submitNewPassword = (event) => {
        event.preventDefault()
        //add a check to make sure newPassword and confirmNewPassword match
        console.log(`new password is : ${newPassword}`)
        setNewPassword("")
    }

    const submitNewEmail = (event) => {
        event.preventDefault()
        console.log(`new email is : ${newEmail}`)
        setNewEmail("")

    }

    return(
        <div className={classes.root}>
            <h1 className={classes.header}>User Profile</h1>
            <Typography className={classes.title}>Change Password</Typography>
            <form onSubmit={submitNewPassword}>
                <TextField
                    value={newPassword}
                    onChange={e=> setNewPassword(e.target.value)}
                    fullWidth
                    label="new password"
                    variant="filled"
                    className={classes.inputField}
                ></TextField>
                {/* removing for now for testing purposes */}
                {/* <TextField
                    value={confirmNewPassword}
                    onChange={e=> setConfirmNewPassword(e.target.value)}
                    fullWidth
                    label="confirm new password"
                    variant="filled"
                    className={classes.inputField}
                ></TextField> */}
                <Button type="submit" className={classes.submitButton}>Save Change</Button>
            </form>

            <Typography className={classes.title}>Change Email</Typography>
            <form onSubmit={submitNewEmail}>
                <TextField
                    value={newEmail}
                    onChange={e=> setNewEmail(e.target.value)}
                    fullWidth
                    label="new email"
                    variant="filled"
                    className={classes.inputField}
                ></TextField>
                <Button type="submit" className={classes.submitButton}>Save Change</Button>
            </form>
            
        </div>
    );
}