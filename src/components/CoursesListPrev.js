import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Autocomplete from "@material-ui/lab/Autocomplete";
import {makeStyles,withStyles } from "@material-ui/core/styles";


const styles1 = theme => ({
    root: {
        width: 100,
        '& > * + *': {
            marginTop: theme.spacing(3),
        },
        //backgroundColor: "red"
    }
});


export class CoursesListPrev extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render(){
        const { values, handleChange } = this.props;
        //const classes = useStyles();
        // return (
        //     //<div className={classes.root}>
        //         <MuiThemeProvider>
        //             <React.Fragment>
        //                 <h3>אנא בחר את הקורסים שברצונך ללמד</h3>
        //                 <Autocomplete padding={10} margin={15}
        //                     multiple
        //                     id="tags-outlined"
        //                     options={menuitems}
        //                     getOptionLabel={(option) => option.name}
        //                     filterSelectedOptions
        //                     renderInput={(params) => (
        //                         <TextField
        //                             {...params}
        //                             variant="outlined"
        //                             //label="filterSelectedOptions"
        //                             label=""
        //                             //placeholder="Favorites"
        //                         />
        //                     )}
        //                     style={styles.root}
        //                 />
        //                 <br />
        //                 <RaisedButton
        //                     label="אשר והמשך"
        //                     primary={true} //blue color
        //                     style={styles.button}
        //                     onClick={this.continue}
        //                 />
        //                 <RaisedButton
        //                     label="חזרה"
        //                     primary={false} //blue color
        //                     style={styles.button}
        //                     onClick={this.back}
        //                 />
        //             </React.Fragment>
        //         </MuiThemeProvider>
        //     //</div>
        // );
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar titile="הזן פרטי משתמש"/>
                    <TextField
                        hintText="רשימת קורסים מופרדים על ידי פסיק"
                        floatingLabelText="ציין את שמות הקורסים שברצונך ללמד"
                        onChange={handleChange('courseList')}
                        defaultValue={values.courseList}
                    />
                    <br/>
                    <RaisedButton
                        label="המשך"
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
        margin: 20
    },

    root: {
        width: 500,
        '& > * + *': {
            //marginTop: theme.spacing(3),
            margin :20,
            //marginRight : 20,
            //marginLeft : 20,
            //textAlign : "center"
        },
    },
}

const styles2 = theme => ({
    button: {
        margin: 15
    },

    root: {
        width: 100,
        margin: 15,
        '& > * + *': {
            marginTop: theme.spacing(3),
        },
        backgroundColor: "red"
    }
});
export default CoursesListPrev
//export default withStyles(styles1, { withTheme: true })(CoursesList);
//export default withStyles(styles1)(CoursesList);