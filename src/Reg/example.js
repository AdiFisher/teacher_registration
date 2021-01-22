import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import {useForm} from "react-hook-form";
import ErrorMessage from "./errorMessage";
import "./RegStyles.css";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import TextField from "@material-ui/core/TextField";
// import RaisedButton from "material-ui/RaisedButton";
// import Registration from "./Registration";
//import Select from "react-select";
// import {useState} from "react";
import {Multiselect} from "multiselect-react-dropdown";
// import { MultiSelect } from '@progress/kendo-react-dropdowns';
import SelectCourses2 from "./SelectCourses"
import Form from 'react-bootstrap/Form'


function App1() {
    const {
        register,
        handleSubmit,
        errors,
        setError,
        clearError,
        formState: { isSubmitting }
    } = useForm();
    const onSubmit = data => {
        //alert(JSON.stringify(data));
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
                    {/*<Multiselect options={op} displayValue="name" name="courses" onChange={onChangeInput} ref={register({required: true})}/>*/}
                    <Multiselect options={op}
                                 displayValue="name"
                                 name="courses"
                                 ref={register({required: true})}
                                 onSelect={onChangeInput}
                                 placeholder=''
                                 selectedValues={op[0]}
                                 allow-empty={false}
                    />
                </div>

            );
    }


    return (
        <form className="App1" onSubmit={handleSubmit(onSubmit)}>
            <h1>הרשמה</h1>
            <label>:שם פרטי</label>
            <input name="firstName" ref={register({ required: true,minLength: 2  })} />
            {/*<ErrorMessage error={errors.firstName} />*/}
            {errors.firstName && errors.firstName.type === "required" && (<p>שדה חובה</p>)}
            {errors.firstName && errors.firstName.type === "minLength" && (<p>על שדה זה להכיל לפחות 2 תווים</p>)}

            <label>:שם משפחה</label>
            <input name="lastName" ref={register({ required: true, minLength: 2 })}/>
            {/*<ErrorMessage error={errors.lastName} />*/}
            {/*{errors.lastName && <p>שדה חובה</p>}*/}
            {errors.lastName && errors.lastName.type === "required" && (<p>שדה חובה</p>)}
            {errors.lastName && errors.lastName.type === "minLength" && (<p>על שדה זה להכיל לפחות 2 תווים</p>)}

            <label>:גיל</label>
            <input
                name="age"
                type="number"
                ref={register({ required: true, min:0})}
            />
            {errors.age && errors.age.type === "required" && (<p>שדה חובה</p>)}
            {errors.age && errors.age.type === "min" && (<p>על הגיל להיות חיובי</p>)}


            <label>:מגדר</label>
            <select name="gender" ref={register({ required: true })} dir="rtl" style={styles.select}>
                <option value="" >בחר..</option>
                <option value="male">גבר</option>
                <option value="female">אישה</option>
            </select>
            {errors.gender && <p>שדה חובה</p>}


            <label>:מספר טלפון</label>
            <input name="phoneNumber" ref={register({ required: true,minLength:10, maxLength:10, pattern:/^[0-9]*$/})}/>
            {errors.phoneNumber && errors.phoneNumber.type === "required" && (<p>שדה חובה</p>)}
            {errors.phoneNumber && errors.phoneNumber.type === "minLength" && (<p>על מספר הטלפון להכיל 10 ספרות</p>)}
            {errors.phoneNumber && errors.phoneNumber.type === "maxLength" && (<p>על מספר הטלפון להכיל 10 ספרות</p>)}
            {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (<p>על שדה זה להכיל ספרות בלבד</p>)}

            <label>:Email כתובת</label>
            <input
                name="email"
                ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && errors.email.type === "required" && (<p>שדה חובה</p>)}
            {errors.email && errors.email.type === "pattern" && (<p>על שדה זה להכיל כתובת מייל חוקית</p>)}


            <label>:השכלה</label>
            <input
                name="education"
                ref={register({ required: true})}
            />
            {errors.education && <p>שדה חובה</p>}

            <label>:מספר שנות נסיון</label>
            <input
                name="experience"
                ref={register({ required: true})}
            />
            {errors.experience && <p>שדה חובה</p>}

            <label>:עלות שיעור</label>
            <input
                name="lessonCost"
                type="number"
                ref={register({ required: true, min:0})}
            />
            {errors.lessonCost && errors.lessonCost.type === "required" && (<p>שדה חובה</p>)}
            {errors.lessonCost && errors.lessonCost.type === "min" && (<p>נא הזן ערך חיובי</p>)}

            {/*<label>:מולטי1</label>*/}
            {/*<select name="course" multiple={true} ref={register({ required: true })} dir="rtl">*/}
            {/*    {menuitems}*/}
            {/*</select>*/}
            {/*{errors.course && <p>שדה חובה</p>}*/}

            {/*<label>:מולטי</label>*/}
            {/*/!*<Select name="colors" ref={register({ required: true })} onChange={onChangeInput}*!/*/}
            {/*<Select name="colors" ref={register({ required: true })}*/}
            {/*    //defaultValue={[menuitems[1]]}*/}
            {/*    isMulti = {true}*/}
            {/*    options={chos}*/}
            {/*    className="basic-multi-select"*/}
            {/*    classNamePrefix="select"*/}
            {/*/>*/}
            {/*/!*{errors.colors && <p>שדה חובה</p>}*!/*/}
            {/*<ErrorMessage error={errors.colors} />*/}

            <label>הזן תיאור קצר על עצמך ועל שיטת הלימוד שלך ופרטים נוספים כרצונך</label>
            <textarea name="aboutyou" ref={register({maxLength: 144})} />

            <SelectCourses/>

            {/*<label>אנא בחר את הקורסים שברצונך ללמד*/}
            {/*       (ניתן לבחור יותר מקורס אחד)</label>*/}
            {/*/!*<div style = {{display: 'flex', justifyContent: 'center'}}>*!/*/}
            {/*    <Autocomplete*/}
            {/*        onSubmit={handleSubmit(onSubmit)}*/}
            {/*        name="courses"*/}
            {/*        ref={register({ required: true})}*/}
            {/*        multiple*/}
            {/*        id="tags-outlined"*/}
            {/*        options={menuitems}*/}
            {/*        getOptionLabel={(option) => option.name}*/}
            {/*        filterSelectedOptions*/}
            {/*        style={{width: 500}}*/}
            {/*        //onChange={onChangeInput}*/}
            {/*        renderInput={(params) => (*/}
            {/*            <TextField*/}
            {/*                {...params}*/}
            {/*                variant="outlined"*/}
            {/*                label=""*/}
            {/*            />)}*/}
            {/*        />*/}
            {/*        <ErrorMessage error={errors.courses} />*/}
                {/*</div>*/}
                {/*{errors.courses && <p>שדה חובה</p>}*/}

            <input disabled={isSubmitting} type="submit" value="הירשם"/>
            {handleSubmit.name && <p>הירשם</p>}
        </form>
    );
}

const chos = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
// const MyComponent = () => (
//     <Select options={options} />
// )



// const MyComponent = () => (
//     <Select options={menuitems} />
// )

const rootElement = document.getElementById("root");
ReactDOM.render(<App1 />, rootElement );

export default App1


