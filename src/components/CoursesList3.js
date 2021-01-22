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
import Tag from "./Tag"



export class CoursesList3 extends Component {
    continue = e => {
        e.preventDefault();
        //Process form - send to DB//
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render(){
        // const [value2, setVal] = React.useState({id: 0, name: ""});
        // const [inputValue, setInputValue] = React.useState('');

        const { values,handleChange} = this.props;

        //const [courseL, saveChosenCourses] = React.useState(0);
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <div >
                        <h3>אנא בחר את הקורסים שברצונך ללמד</h3>
                        <div style = {{display: 'flex', justifyContent: 'center'}}>
                            <Autocomplete
                                multiple
                                id="tags-outlined"
                                options={menuitems}
                                getOptionLabel={(option) => option.name}
                                filterSelectedOptions
                                style={{width: 500}}
                                //onChange={handleChange('chosenCourses')}

                                onChange={(event, newValue) => {
                                    values.chosenCourses = newValue;
                                    console.log('props is', values.chosenCourses);
                                }}


                                // onChange={(event, newValue) => {
                                //     //handleArrChange('chosenCourses', event, newValue)
                                //     handleChange('chosenCourses', event, newValue)
                                // }}

                                //onChange={handleArrayChange('chosenCourses',event, newValue)}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        label=""
                                    />
                                )}
                            />
                        </div>
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
                    </div>
                </React.Fragment>
            </MuiThemeProvider>);
    }
}

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

const styles = {
    button: {
        margin: 15
    }
}

export default CoursesList3;