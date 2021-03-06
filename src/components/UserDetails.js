import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Autocomplete from "@material-ui/lab/Autocomplete";


export class UserDetails extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render(){
        const { values, handleChange } = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    {/*<AppBar titile="הזן פרטי משתמש"/>*/}
                    <h3>הזן פרטי משתמש</h3>
                    <TextField
                        required={true}
                        id="standard-required"
                        //required id="standard-required"
                        //label="Required"
                        //defaultValue="Hello World"
                        hintText="הזן את שמך הפרטי"
                        floatingLabelText="שם פרטי"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                        hintText="הזן את שם המשפחה שלך"
                        floatingLabelText="שם משפחה"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                        hintText="הזן את המגדר שלך"
                        floatingLabelText="מגדר"
                        onChange={handleChange('gender')}
                        defaultValue={values.gender}
                    />
                    <br/>
                    <TextField
                        hintText="הזן את מספר הטלפון שלך"
                        floatingLabelText="מספר טלפון"
                        onChange={handleChange('phoneNumber')}
                        defaultValue={values.phoneNumber}
                    />
                    <br/>
                    <TextField
                        hintText="הזן את כתובת המייל שלך"
                        floatingLabelText="מייל"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br/>
                    <TextField
                        hintText="הזן את השכלתך"
                        floatingLabelText="השכלה"
                        onChange={handleChange('education')}
                        defaultValue={values.education}
                    />
                    <br/>
                    <TextField
                        hintText="הזן את מספר שנות הנסיון שלך"
                        floatingLabelText="נסיון"
                        onChange={handleChange('experience')}
                        defaultValue={values.experience}
                    />
                    <br/>
                    <TextField
                        hintText="הזן עלות שיעור"
                        floatingLabelText="עלות שיעור"
                        onChange={handleChange('lessonCost')}
                        defaultValue={values.lessonCost}
                    />
                    <br/>
                    <TextField
                        hintText="הזן תיאור קצר על עצמך או פרטים נוספים"
                        floatingLabelText="פרטים נוספים"
                        onChange={handleChange('moreDetails')}
                        defaultValue={values.moreDetails}
                    />
                    <br/>
                    <RaisedButton
                        label="המשך"
                        primary={true} //blue color
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


const styles = {
    button: {
      margin: 15
    }
}
export default UserDetails