import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar titile="Success"/>
                    <h1>!תודה שנרשמת לאתר</h1>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Success