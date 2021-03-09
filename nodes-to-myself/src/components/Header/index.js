import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/logoWhiteCrop.png'
import { useHistory } from "react-router-dom"
import {Auth} from 'aws-amplify'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function ButtonAppBar({auth, authenticate}) {
  const classes = useStyles()
  const history = useHistory()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>         
          <Typography variant="h6" className={classes.title}>
              <a href="/">
                <img id="logo" src={logo}/>
              </a>
          </Typography>          
          <Button color="inherit" 
          onClick={()=> {
            if(!auth){
              history.push("/login")
            }else{
              Auth.signOut()
              authenticate(false)
            }
          }}>
            {auth === false ? "Login" : "Logout" }
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}