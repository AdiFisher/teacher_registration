import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import Tag from "./Tag";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const FormPropsTextFields = (props) => {
//export default function FormPropsTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <MuiThemeProvider>
                    <React.Fragment>
                        <h3>הזן פרטי משתמש</h3>
                        <br/>
                        <TextField
                            id="standard-required"
                            label = "הכנס שם פרטי"
                            color = "primary"
                            //label="Required"
                            //defaultValue="Hello World"
                            hintText="הזן את שמך הפרטי"
                            floatingLabelText="שם פרטי"
                            //type="password"
                            //autoComplete="current-password"
                            primary={true}
                        />
                        <br/>
                        <TextField
                            id="standard-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            primary={true}
                        />
                        <br/>
                        <TextField id="standard-search" label="Search field" type="search" />
                        <br/>
                            <RaisedButton
                                label="המשך"
                                primary={true} //blue color
                                style={styles.button}
                                //onClick={this.continue}
                            />
                </React.Fragment>
            </MuiThemeProvider>
            </div>
        </form>
    );
}

const styles = {
    button: {
        margin: 15
    }
}
export default FormPropsTextFields