import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import {useForm} from "react-hook-form";
import "./RegStyles.css";
import {Multiselect} from "multiselect-react-dropdown";


function UpdateDetails() {
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
            <div className="SelectCourses" onSubmit={handleSubmit(onSubmit)}>
                <label>בחר את הקורסים שברצונך ללמד (ניתן לבחור יותר מקורס אחד)</label>
                <Multiselect options={op}
                             displayValue="name"
                             name="courses"
                             ref={register({required: true})}
                             onSelect={onChangeInput}
                             placeholder=''
                             value={"מתמטיקה בדידה"} //replace with courses list from DB
                />
            </div>
        );
    }

    return (
        <form className="UpdateDetails" onSubmit={handleSubmit(onSubmit)}>
            <h1>עדכון פרטים</h1>
            <h3>עדכן את השדות הרלוונטיים. את השאר השאר ללא שינוי</h3>
            <label>:שם פרטי</label>
            <input name="firstName" ref={register({ required: true,minLength: 2  })}
                   defaultValue={"firstName from DB"} //replace with firstName from DB
            />
            {errors.firstName && errors.firstName.type === "minLength" && (<p>על שדה זה להכיל לפחות 2 תווים</p>)}

            <label>:שם משפחה</label>
            <input name="lastName" ref={register({ required: true, minLength: 2 })}
                   defaultValue={"lastName from DB"} //replace with lastName from DB
            />
            {errors.lastName && errors.lastName.type === "minLength" && (<p>על שדה זה להכיל לפחות 2 תווים</p>)}

            <label>:גיל</label>
            <input
                name="age"
                type="number"
                ref={register({ required: true, min:0})}
                defaultValue={1} //replace with the age from DB
            />
            {errors.age && errors.age.type === "min" && (<p>על הגיל להיות חיובי</p>)}


            <label>:מגדר</label>
            <select name="gender" ref={register({ required: true })} dir="rtl" style={styles.select}
                    defaultValue={"male"} //replace with gender from DB
            >
                <option value="" >בחר..</option>
                <option value="male">גבר</option>
                <option value="female">אישה</option>
            </select>


            <label>:מספר טלפון</label>
            <input name="phoneNumber" ref={register({ required: true,minLength:10, maxLength:10, pattern:/^[0-9]*$/})}
                   defaultValue={"0000000000"} //replace with phoneNumber from DB
            />
            {errors.phoneNumber && errors.phoneNumber.type === "minLength" && (<p>על מספר הטלפון להכיל 10 ספרות</p>)}
            {errors.phoneNumber && errors.phoneNumber.type === "maxLength" && (<p>על מספר הטלפון להכיל 10 ספרות</p>)}
            {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (<p>על שדה זה להכיל ספרות בלבד</p>)}

            <label>:Email כתובת</label>
            <input
                name="email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                defaultValue={"email@from_DB"} //replace with email from DB
            />
            {errors.email && errors.email.type === "pattern" && (<p>על שדה זה להכיל כתובת מייל חוקית</p>)}


            <label>:השכלה</label>
            <input
                name="education"
                ref={register({ required: true})}
                defaultValue={"education from DB"} //replace with education from DB
            />

            <label>:מספר שנות נסיון</label>
            <input
                name="experience"
                ref={register({ required: true})}
                defaultValue={"experience from DB"} //replace with experience from DB
            />

            <label>:עלות שיעור</label>
            <input
                name="lessonCost"
                type="number"
                ref={register({ required: true, min:0})}
                defaultValue={"1"} //replace with lessonCost from DB
            />
            {errors.lessonCost && errors.lessonCost.type === "min" && (<p>נא הזן ערך חיובי</p>)}


            <label>הזן תיאור קצר על עצמך ועל שיטת הלימוד שלך ופרטים נוספים כרצונך</label>
            <textarea name="aboutyou" ref={register({maxLength: 144})} />

            <SelectCourses/>

            <input disabled={isSubmitting} type="submit" value="עדכן פרטים"/>
        </form>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<UpdateDetails />, rootElement );

export default UpdateDetails


