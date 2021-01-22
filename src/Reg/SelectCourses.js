import React, {useState} from "react";
import {Multiselect} from "multiselect-react-dropdown";
import {useForm} from "react-hook-form";

function SelectCourses2() {
    const {
        register,
        formState: { isSubmitting }
    } = useForm();

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
    //const ValidatMessage = 'Please add!';

    return (
        <div className="SelectCourses2">
            <h3>קורסים:</h3>
            <Multiselect options={op} displayValue="name" name="courses" ref={register({required: true})}/>
            {/*<Multiselect  lable="בחר קורס" name="courses"*/}
            {/*    options={op} displayValue="name" required={true}*/}
            {/*    validationMessage={ValidatMessage}*/}
            {/*/>*/}
        </div>

    );
}

export default SelectCourses2;