/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
        '& > * + *': {
            marginTop: theme.spacing(3),
        },
    },
}));

const ControllableStates = (props) => {
    const classes = useStyles();
    const [value1, setValue] = React.useState({id: 0, name: ""});
    const [inputValue, setInputValue] = React.useState('');
    const [chosenTeachers, setTeacher] = React.useState([]);
    const [course, setCourse] = React.useState('');
    const [chosenCourse, setId] = React.useState(0);
    const handleTeacher = (chosenTeacher) => {
        setTeacher(chosenTeacher);
    };}

const useStyles2 = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 250,
    },
}));

export default function Tags() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Autocomplete
                multiple
                id="tags-standard"
                options={menuItems}
                getOptionLabel={(option) => option.title}
                defaultValue={null}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="standard"
                        label="Multiple values"
                        placeholder="Favorites"
                    />
                )}
            />
            <Autocomplete
                multiple
                id="tags-outlined"
                options={menuItems}
                getOptionLabel={(option) => option.title}
                defaultValue={[menuItems[3]]}
                filterSelectedOptions
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label="filterSelectedOptions"
                        placeholder="Favorites"
                    />
                )}
            />

        </div>
    );
}


const menuItems = [
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