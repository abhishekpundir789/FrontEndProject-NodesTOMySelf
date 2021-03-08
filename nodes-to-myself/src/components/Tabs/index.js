import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useHistory } from "react-router-dom"

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const pages = ["/", "/todos", "/notes", "/images", "/links", "/profile"]

export default function CenteredTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory()

  useEffect(()=>{
    history.push("/")
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue)
    history.push(pages[newValue])
    console.log(newValue)
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Home" />
        <Tab label="To Do" />
        <Tab label="Notes" />
        <Tab label="Images" />
        <Tab label="Links" />
        <Tab label="User Profile" />
      </Tabs>
    </Paper>
  );
}