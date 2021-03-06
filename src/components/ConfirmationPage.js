import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
// import chosenCourses from "./CoursesList"
// import value2 from "./CoursesList"
import courseL from "./CoursesList2"
import chosenCourses from "./CoursesList3"

export class ConfirmationPage extends Component {
    continue = e => {
        e.preventDefault();
        //Process form - send to DB//
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {values: {firstName, lastName, gender, phoneNumber, email, education, experience, lessonCost, courseList, moreDetails, chosenCourses}} = this.props;
        //const { value2,chosenCourses,inputValue } = this.state;
        //const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar titile="נא אשר את פרטייך"/>
                    <List>
                        <ListItem
                            primaryText="שם פרטי"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="שם משפחה"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="מגדר"
                            secondaryText={gender}
                        />
                        <ListItem
                            primaryText="מספר טלפון"
                            secondaryText={phoneNumber}
                        />
                        <ListItem
                            primaryText="מייל"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="השכלה"
                            secondaryText={education}
                        />
                        <ListItem
                            primaryText="נסיון"
                            secondaryText={experience}
                        />
                        <ListItem
                            primaryText="עלות שיעור"
                            secondaryText={lessonCost}
                        />
                        <ListItem
                            primaryText="רשימת קורסים"
                            //secondaryText={courseList}
                            //secondaryText={inputValue}
                            // secondaryText={chosenCourses.map(e => e.name).join(",")}
                            secondaryText={chosenCourses}
                        />
                        {/*<ListItem*/}
                        {/*    primaryText="רשימת קורסים2"*/}
                        {/*    secondaryText={chosenCourses}*/}
                        {/*/>*/}
                        {/*<ListItem*/}
                        {/*    primaryText="רשימת קורסי3"*/}
                        {/*    secondaryText={inputValue}*/}
                        {/*/>*/}
                        <ListItem
                            primaryText="פרטים נוספים"
                            secondaryText={moreDetails}
                        />
                    </List>
                    <br/>
                    <RaisedButton
                        label="אשר והמשך"
                        primary={true} //blue color
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="חזרה"
                        primary={false} //blue color
                        style={styles.button}
                        onClick={this.back}
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

export default ConfirmationPage