import {makeStyles} from "@material-ui/core/styles";
import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import RaisedButton from "material-ui/RaisedButton";

function Registration(){
//const Registration = (props) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '50ch',
                //width: '25ch',
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

    const state = {
        //step: 1,
        firstName: '',
        lastName: '',
        gender: '',
        phoneNumber: '',
        email: '',
        education: '',
        experience: '',
        lessonCost: '',
        //courseList: '',
        moreDetails: '',
        chosenCourses: ''
    }

    const classes = useStyles();
    const [value2, setVal] = React.useState({id: 0, name: ""});
    const [inputValue, setInputValue] = React.useState('');

    // const { firstName, lastName, gender, phoneNumber, email,
    //     education, experience, lessonCost, courseList, moreDetails, chosenCourses} = props.state;
    // const values = {firstName, lastName, gender, phoneNumber, email,
    //     education, experience, lessonCost, courseList, moreDetails, chosenCourses}

    //const  handleChange  = this.props;
        return (
            //<form className={classes.root} noValidate autoComplete="off">
                <MuiThemeProvider>
                    <React.Fragment>
                        <h3>הזן פרטי משתמש</h3>
                        <TextField required='required' id="standard-required"
                                   hintText="הזן את שמך הפרטי"
                                   floatingLabelText="שם פרטי"
                                   label="הכנס שם פרטי"
                                   color = "secondary"
                                   //primary={true}
                                   onChange={writeUserData()}
                            //defaultValue={firstName}
                                   //defaultValue="Adi"
                        />
                        <br/>
                        <TextField required
                                   hintText="הזן את שמך הפרטי"
                                   floatingLabelText="שם פרטי"
                                   onChange={writeUserData()}
                                   defaultValue="Adi"
                        />
                        <br/>
                        <div>
                            <h3>אנא בחר את הקורסים שברצונך ללמד</h3>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <Autocomplete
                                    multiple
                                    id="tags-outlined"
                                    options={menuitems}
                                    getOptionLabel={(option) => option.name}
                                    filterSelectedOptions
                                    style={{width: 500}}
                                    //onChange={handleChange('chosenCourses')}

                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            label=""
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    <br/>
                        <form>
                            <input type="text" id="first name" placeholder="הכנס שם פרטי" required/>
                            <button type="submit" />
                        </form>
                        <br/>
                        <form>
                            <input type="text" id="last name" placeholder="Enter last name" required />
                            <button type="submit" />
                        </form>
                        <br/>
                        <form>
                        <input type="text" id="name" placeholder="Enter name" required />
                        <button type="submit" />
                    </form>

                        {/*<br/>*/}
                        {/*<TextField*/}
                        {/*    hintText="הזן את שם המשפחה שלך"*/}
                        {/*    floatingLabelText="שם משפחה"*/}
                        {/*    //onChange = {writeUserData()}*/}
                        {/*    //defaultValue={values.lastName}*/}
                        {/*/>*/}
                        {/*<br/>*/}
                        {/*<TextField*/}
                        {/*    hintText="הזן את המגדר שלך"*/}
                        {/*    floatingLabelText="מגדר"*/}
                        {/*    //onChange = {writeUserData()}*/}
                        {/*    //defaultValue={values.gender}*/}
                        {/*/>*/}
                        {/*<br/>*/}
                        {/*<TextField*/}
                        {/*    hintText="הזן את מספר הטלפון שלך"*/}
                        {/*    floatingLabelText="מספר טלפון"*/}
                        {/*    //onChange = {writeUserData()}*/}
                        {/*    //defaultValue={values.phoneNumber}*/}
                        {/*/>*/}
                        {/*<br/>*/}
                        {/*<TextField*/}
                        {/*    hintText="הזן את כתובת המייל שלך"*/}
                        {/*    floatingLabelText="מייל"*/}
                        {/*    //onChange = {writeUserData()}*/}
                        {/*    //defaultValue={values.email}*/}
                        {/*/>*/}
                        {/*<br/>*/}
                        {/*<TextField*/}
                        {/*    hintText="הזן את השכלתך"*/}
                        {/*    floatingLabelText="השכלה"*/}
                        {/*    //onChange = {writeUserData()}*/}
                        {/*    //defaultValue={values.education}*/}
                        {/*/>*/}
                        {/*<br/>*/}
                        {/*<TextField*/}
                        {/*    hintText="הזן את מספר שנות הנסיון שלך"*/}
                        {/*    floatingLabelText="נסיון"*/}
                        {/*    //onChange = {writeUserData()}*/}
                        {/*    //defaultValue={values.experience}*/}
                        {/*/>*/}
                        {/*<br/>*/}
                        {/*<TextField*/}
                        {/*    hintText="הזן עלות שיעור"*/}
                        {/*    floatingLabelText="עלות שיעור"*/}
                        {/*    //onChange = {writeUserData()}*/}
                        {/*    //defaultValue={values.lessonCost}*/}
                        {/*/>*/}
                        {/*<br/>*/}
                        {/*<TextField*/}
                        {/*    hintText="הזן תיאור קצר על עצמך או פרטים נוספים"*/}
                        {/*    floatingLabelText="פרטים נוספים"*/}
                        {/*    //onChange = {writeUserData()}*/}
                        {/*    //defaultValue={values.moreDetails}*/}
                        {/*/>*/}
                        <br/>
                        <RaisedButton
                            label="הרשם"
                            primary={true} //blue color
                            style={styles.button}
                            onClick={writeUserData()}
                        />
                    </React.Fragment>
                </MuiThemeProvider>
           // </form>
        );

    }

const styles = {
    button: {
        margin: 15
    }
}

function writeUserData(){
    console.log('write to DB')
}

export default Registration