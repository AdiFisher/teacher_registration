import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import RaisedButton from "material-ui/RaisedButton";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
        direction: "rtl"
    },
    formControl: {
        margin: theme.spacing(11),
        minWidth: 250,
        direction: "rtl"
    },
}));

const ControllableStates = (props) => {
    const classes = useStyles();
    const [value1, setValue] = React.useState({id: 0, name: ""});
    const [inputValue, setInputValue] = React.useState('');
    const [chosenCourse, setId] = React.useState(0);

    //setId(value1.id)
        //console.log({chosenCourse})

    const menuitems = [
        {id: 1, name: 'מתמטיקה בדידה' },
        {id: 2, name: 'מבוא מורחב למדעי המחשב' },
        {id: 3, name: 'אלגברה לינארית 1ב' },
        {id: 4, name: 'מבוא לפסיכופתולוגיה' },
        {id: 5, name: 'Class 5' },
        {id: 6, name: 'Class 6' },
        {id: 7, name: 'Class 7' },
        {id: 8, name: 'Class 8' },
        {id: 9, name: 'Class 9' },
    ];

    return (
        <div>
            <MuiThemeProvider>
                <React.Fragment>
                    <FormControl className={classes.formControl}>
                            {/*<div>{`value: ${value1 !== null ? `'${value1.name}'` : 'null'}`}</div>*/}
                            {/*<div>{`inputValue: '${inputValue}'`}</div>*/}
                            <br />
                            <Autocomplete
                                //multiple
                                defaultValue={null}
                                value={value1}
                                onChange={(event, newValue) => {
                                    if (newValue !== null) {
                                        setValue(newValue);
                                        setId(newValue)
                                    }
                                }}
                                inputValue={inputValue}
                                onInputChange={(event, newInputValue) => {
                                    setInputValue(newInputValue);
                                }}
                                id="controllable-states-demo"
                                options={menuitems}
                                getOptionLabel={(option => option.name)}
                                style={{ width: 300 }}
                                //getOptionSelected = {(option => option.id === 2)}
                                renderInput={(params) => <TextField {...params} label="" variant="outlined" />}
                            />
                            <br />
                            <RaisedButton
                                label="אשר והמשך"
                                primary={true} //blue color
                                style={styles.button}
                                //onClick={this.continue}
                            />
                            <RaisedButton
                                label="חזרה"
                                primary={false} //blue color
                                style={styles.button}
                                //onClick={this.back}
                            />
                        </FormControl>
                </React.Fragment>
            </MuiThemeProvider>
        </div>
    );
}

const styles = {
    button: {
        margin: 15
    }
}

export default ControllableStates;