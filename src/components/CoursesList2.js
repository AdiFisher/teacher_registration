/* eslint-disable no-use-before-define */
import React, {Component} from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import RaisedButton from "material-ui/RaisedButton";
import FormControl from "@material-ui/core/FormControl";
import {DeviceSignalCellularNull} from "material-ui/svg-icons/index.es";
import {useAutocomplete} from "@material-ui/lab";


const CoursesList2 = (props) => {
// export class CoursesList2 extends Component{

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

function Tags(props){
    const classes = useStyles();
    const [value2, setVal] = React.useState({id: 0, name: ""});
    //const [chosenCourses, saveChosenCourses] = React.useState(0);
    const [inputValue, setInputValue] = React.useState('');

    //const [age, setAge] = React.useState(0);

    //not chips
    // const handleChange = (event) => {
    //     //setAge(event.target.value);
    //     props.data.saveChosenCourses(event.target.value)
    //     console.log(props.values)
    // };

    return (
        //<div className={classes.root}>
        <div>
            <MuiThemeProvider>
                <React.Fragment>
                    <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={menuitems}
                        getOptionLabel={(option) => option.name}
                        filterSelectedOptions
                        style={{ width: 500 }}
                        //onChange={handleChange('chosenCourses')}
                        //onChange={handleArrayChange('chosenCourses',event, newValue)}
                        onChange={(event, newValue) => {
                            handleArrayChange('chosenCourses',event, newValue)
                        }}

                        // onChange={(event, newValue) => {
                        //     //values.chosenCourses = newValue;
                        //     props.values.chosenCourses = newValue;
                        //     //console.log('props is', values.chosenCourses);
                        // }}

                        // onClick={(e) => {
                        //     console.log(e);
                        // }}

                        //onChange = {handleChange()}

                        // onInputChange={(event, newInputValue) => {
                        //     setInputValue(newInputValue);
                        // }}

                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                label=""
                                //onChange = {props.handleArrayChange('courseList')}
                                //onChange = {props.handleChange('courseList')}
                                //defaultValue={props.values.courseList}
                            />
                        )}
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

    const { values,handleArrayChange} = props;
    //const [genderFilter,changeGender] = React.useState(0);
    const [courseL, saveChosenCourses] = React.useState(0);

    return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div >
                    <h3>אנא בחר את הקורסים שברצונך ללמד</h3>
                    <div style = {{display: 'flex', justifyContent: 'center'}}>
                        <Tags
                            // data={
                            //     {chosenCourses:courseL,saveChosenCourses:saveChosenCourses.bind(this)}
                            // }

                            //props={this.props}
                            //values={values}
                            //handleChange={handleChange}
                            //handleArrayChange={handleArrayChange}
                            //courseList={courseList}
                        />
                    </div>
                    <br/>
                    <RaisedButton
                        label="אשר והמשך"
                        primary={true} //blue color
                        style={styles.button}
                        //onClick={props.continue}
                        onClick={(e) => {
                            e.preventDefault();
                            props.nextStep();
                        }}
                    />
                    <RaisedButton
                        label="חזרה"
                        primary={false} //blue color
                        style={styles.button}
                        //onClick={props.back}
                        onClick={(e) => {
                            e.preventDefault();
                            props.prevStep();
                        }}
                    />
                    </div>
                </React.Fragment>
            </MuiThemeProvider>);
    }


export default CoursesList2;