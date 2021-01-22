import TextField from "@material-ui/core/TextField";

import React, {Component} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const Tag = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: 500,
            '& > * + *': {
                marginTop: theme.spacing(3),
                //minWidth: 250,
                spacing:0,
                alignItems:"center",
            },

        },
    }));

    const menuitems = [
        {id: 1, name: 'מתמטיקה בדידה'},
        {id: 2, name: 'מבוא מורחב למדעי המחשב'},
        {id: 3, name: 'אלגברה לינארית 1ב'},
        {id: 4, name: 'מבוא לפסיכופתולוגיה'},
        {id: 5, name: 'Class 5'},
        {id: 6, name: 'Class 6'},
        {id: 7, name: 'Class 7'},
        {id: 8, name: 'Class 8'},
        {id: 9, name: 'Class 9'},
    ];

    const classes = useStyles();
    const [value2, setVal] = React.useState({id: 0, name: ""});
    const [inputValue, setInputValue] = React.useState('');

    // const handleArrChange = input => e => {
    //     //this.setState({[input]: e.target.value});
    //     props.setState({[input]: e.target.value});
    //     //console.log(this.setState)
    //     console.log('input', input)
    //     console.log('target value', e.target.value)
    // }

    // const handleArrChange = (input) => e => {
    //     console.log('input', input)
    //     console.log('target value', e.target.value)
    //     let val = e.target.value;
    //     this.setState({[input]: val});
    // };

    const { values, handleChange } = this.props;

    return (
        <div>
            <MuiThemeProvider>
                <React.Fragment>
                    <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={menuitems}
                        getOptionLabel={(option) => option.name}
                        filterSelectedOptions
                        style={{width: 500}}
                        onChange={handleChange('chosenCourses')}

                        //onChange={handleArrayChange('chosenCourses',event, newValue)}

                        // onChange={(event, newValue) => {
                        //     handleArrChange('chosenCourses', event, newValue)
                        // }}

                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                label=""
                            />
                        )}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        </div>
    );
}
export default Tag