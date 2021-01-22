import React, {Component} from "react"
import UserDetails from './UserDetails'
import ConfirmationPage from './ConfirmationPage';
import Success from './Success'
import CoursesList from "./CoursesList"
import CoursesList2 from "./CoursesList2"
import CoursesList3 from "./CoursesList3"
import Autocomplete from "@material-ui/lab/Autocomplete";

export class UserForm extends Component {
    state = {
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
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    //go back to prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    //Handle field change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
        //console.log(this.setState)
        console.log('input', input)
        console.log('target value', e.target.value)
    }

    handleArrayChange = input => e => {
        //let value = Array.from(e.target.selectedOptions, option => option.value);
        //let value = Array.from(e.target.selectedOptions,option => option.name);
        console.log('input', input)
        console.log('target value', e.target.value)
        let val = e.target.value;
        this.setState({[input]: val});
    }

    // handleArrayChange = input => e => {
    //     this.setState({[input]: Array.from(e.target.selectedOptions, (option) => option.name)});
    // }

    // onSelectChange = (e) => {
    //     const vals = [...e.target.selectedOptions].map(opt => opt.value);
    //     //this.props.onChange(vals);
    //     this.props.handleChange(vals);
    // };

    // handleSelectChange = input => e => {
    //     const vals = [...e.target.selectedOptions].map(opt => opt.value);
    //     //this.props.onChange(vals);
    //     //this.props.handleChange(vals);
    //     this.setState({[input]: vals});
    // }

    // handleArrayChange = (e) => {
    //     let value = Array.from(e.target.selectedOptions, option => option.value);
    //     this.setState({values: value});
    // }

    render() {
        const { step } = this.state;
        const { firstName, lastName, gender, phoneNumber, email,
            education, experience, lessonCost, courseList, moreDetails, chosenCourses} = this.state;
        const values = {firstName, lastName, gender, phoneNumber, email,
            education, experience, lessonCost, courseList, moreDetails, chosenCourses}

        switch(step){
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
    }
}
export default UserForm