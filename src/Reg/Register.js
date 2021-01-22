import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import {useForm} from "react-hook-form";
//import ErrorMessage from "./errorMessage";
import "./RegStyles.css";
import {Multiselect} from "multiselect-react-dropdown";
import ControllableStates from "./searchCourse";
import Autocomplete from "@material-ui/lab/Autocomplete";

function Register() {
    const {
        register,
        handleSubmit,
        errors,
        formState: { isSubmitting }
    } = useForm();
    const onSubmit = data => {
        console.log(data)
        console.log(data.firstName)
    };

    //for 'gender' field
    const styles={
        select:{
            width:'100%',
            maxWidth: 600,
        }
    }

    function onChangeInput(value){
        console.log('multi:',value)
    }

    function SelectCourses() {
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
        ]

        const [op] = useState(menuitems);

            return (
                <div className="SelectCourses" onSubmit={handleSubmit(onSubmit)} color="36cd26">
                    <label className="reg-label">בחר את הקורסים שברצונך ללמד (ניתן לבחור יותר מקורס אחד)</label>
                    <Multiselect
                                options={op}
                                 displayValue="name"
                                 name="courses"
                                 required={true}
                                 ref={register({required: true})}
                                 onSelect={onChangeInput}
                                 placeholder=''
                                 selectionLimit={1}

                    />
                    {errors.courses && errors.courses.type === "required" && (<p className="p-error">שדה חובה</p>)}

                </div>

            );
    }


    return (
        // <form className="Register" onSubmit={handleSubmit(onSubmit)}>
        <form className="reg-form" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="reg-header">הרשמה</h1>
            <label className="reg-label">:שם פרטי</label>
            <input className="reg-input" name="firstName" ref={register({ required: true,minLength: 2  })} />
            {errors.firstName && errors.firstName.type === "required" && (<p className="p-error">שדה חובה</p>)}
            {errors.firstName && errors.firstName.type === "minLength" && (<p className="p-error">על שדה זה להכיל לפחות 2 תווים</p>)}

            <label className="reg-label">:שם משפחה</label>
            <input className="reg-input" name="lastName" ref={register({ required: true, minLength: 2 })}/>
            {errors.lastName && errors.lastName.type === "required" && (<p className="p-error">שדה חובה</p>)}
            {errors.lastName && errors.lastName.type === "minLength" && (<p className="p-error">על שדה זה להכיל לפחות 2 תווים</p>)}

            <label className="reg-label">גיל</label>
            <input className="reg-input"
                name="age"
                type="number"
                ref={register({ required: true, min:0})}
            />
            {errors.age && errors.age.type === "required" && (<p className="p-error">שדה חובה</p>)}
            {errors.age && errors.age.type === "min" && (<p className="p-error">על הגיל להיות חיובי</p>)}


            <label className="reg-label">:מגדר</label>
            <select name="gender" ref={register({ required: true })} dir="rtl" style={styles.select}>
                <option value="" >בחר..</option>
                <option value="male">גבר</option>
                <option value="female">אישה</option>
            </select>
            {errors.gender && <p className="p-error">שדה חובה</p>}


            <label className="reg-label">:מספר טלפון</label>
            <input className="reg-input" name="phoneNumber" ref={register({ required: true,minLength:10, maxLength:10, pattern:/^[0-9]*$/})}/>
            {errors.phoneNumber && errors.phoneNumber.type === "required" && (<p className="p-error">שדה חובה</p>)}
            {errors.phoneNumber && errors.phoneNumber.type === "minLength" && (<p className="p-error">על מספר הטלפון להכיל 10 ספרות</p>)}
            {errors.phoneNumber && errors.phoneNumber.type === "maxLength" && (<p className="p-error">על מספר הטלפון להכיל 10 ספרות</p>)}
            {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (<p className="p-error">על שדה זה להכיל ספרות בלבד</p>)}

            <label className="reg-label">:Email כתובת</label>
            <input className="reg-input"
                name="email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && errors.email.type === "required" && (<p className="p-error">שדה חובה</p>)}
            {errors.email && errors.email.type === "pattern" && (<p className="p-error">על שדה זה להכיל כתובת מייל חוקית</p>)}


            <label className="reg-label">:השכלה</label>
            <input className="reg-input"
                name="education"
                ref={register({ required: true})}
            />
            {errors.education && <p className="p-error">שדה חובה</p>}

            <label className="reg-label">:מספר שנות נסיון</label>
            <input className="reg-input"
                name="experience"
                ref={register({ required: true})}
            />
            {errors.experience && <p className="p-error">שדה חובה</p>}

            <label className="reg-label">:עלות שיעור</label>
            <input className="reg-input"
                name="lessonCost"
                type="number"
                ref={register({ required: true, min:0})}
            />
            {errors.lessonCost && errors.lessonCost.type === "required" && (<p className="p-error">שדה חובה</p>)}
            {errors.lessonCost && errors.lessonCost.type === "min" && (<p className="p-error">נא הזן ערך חיובי</p>)}


            <label className="reg-label">הזן תיאור קצר על עצמך ועל שיטת הלימוד שלך ופרטים נוספים כרצונך</label>
            <textarea className="reg-textarea" name="aboutyou" ref={register({maxLength: 144})} />

            <SelectCourses className="course-option"/>

            <input className="reg-input" disabled={isSubmitting} type="submit" value="הירשם"/>
        </form>
    );
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
]

const rootElement = document.getElementById("root");
ReactDOM.render(<Register />, rootElement );

export default Register


