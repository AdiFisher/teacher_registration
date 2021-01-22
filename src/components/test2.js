/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import FormControl from "@material-ui/core/FormControl";
import {DeviceSignalCellularNull} from "material-ui/svg-icons/index.es";
import {useAutocomplete} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
        '& > * + *': {
            marginTop: theme.spacing(3),
            //margin: theme.spacing(5),
            //margin: theme.spacing(1),
            //minWidth: 250,
            // spacing:0,
            // direction:"column",
            // alignItems:"center",
            // justify:"center"
        },

    },

}));


export default function Tags() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MuiThemeProvider>
                <React.Fragment>
                    <h3>אנא בחר את הקורסים שברצונך ללמד</h3>
                    <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={menuitems}
                        getOptionLabel={(option) => option.name}
                        filterSelectedOptions
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                //label="filterSelectedOptions"
                                label=""
                                //placeholder="Favorites"
                            />
                        )}
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
                </React.Fragment>
            </MuiThemeProvider>
        </div>
    );
}

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


const styles = {
    button: {
        margin: 15
    }
}
