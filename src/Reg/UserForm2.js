import UserDetails from "../components/UserDetails";
import CoursesList3 from "../components/CoursesList3";
import ConfirmationPage from "../components/ConfirmationPage";
import Success from "../components/Success";
import React from "react";

import CoursesList from "./CoursesList"
import CoursesList2 from "./CoursesList2"
import Autocomplete from "@material-ui/lab/Autocomplete";

const UserForm2 = (props) => {
    const state = {
        step: 1,
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

    //go to next step
    const nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    //go back to prev step
    const constprevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Handle field change
    const handleChange = input => e => {
        this.setState({[input]: e.target.value});
        //console.log(this.setState)
        console.log('input', input)
        console.log('target value', e.target.value)
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

    const { step } = this.state;
    const { firstName, lastName, gender, phoneNumber, email,
        education, experience, lessonCost, courseList, moreDetails, chosenCourses} = this.state;
    const values = {firstName, lastName, gender, phoneNumber, email,
        education, experience, lessonCost, courseList, moreDetails, chosenCourses}


    return(switch(step){
            case 1:
                return(
                    <UserDetails
                    nextStep ={this.nextStep}
                    handleChange={this.handleChange}
                    values ={values}
                    />
                )
            case 2:
            return(
                <CoursesList3
                nextStep ={this.nextStep}
                prevStep ={this.prevStep}
                //handleArrChange={this.handleArrChange}
                handleChange={this.handleChange}
                handleCourseChange={this.handleCourseChange}
                values ={values}
                />
            )
            case 3:
            return(
            <ConfirmationPage
            nextStep ={this.nextStep}
            prevStep ={this.prevStep}
            values ={values}
            />
            )
            case 4:
            return(
            <Success/>
            )
        }

    );
}

export default UserForm2;