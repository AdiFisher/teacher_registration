import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

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
        const {values: {firstName, lastName, gender, phoneNumber, email, education, experience, lessonCost, moreDetails, picture}} = this.props;
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
                            primaryText="פרטים נוספים"
                            secondaryText={moreDetails}
                        />
                        <ListItem
                            primaryText="תמונה"
                            secondaryText={picture}
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