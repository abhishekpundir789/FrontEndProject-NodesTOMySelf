import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Notes = props => props.data.map(note => <div>{note.text}</div>);

export default () => {
const data = [{text: 'Hey'}, {text: 'there'}];
return <Notes data={data} />;
}