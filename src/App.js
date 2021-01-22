import React, {Component} from "react"
import './App.css';
import {UserForm} from './components/UserForm';
import UpdateDetailsForm from "./UpdateDetailsComponents/UpdateDetailsForm";

import ControllableStates from "./components/test"
import Test1 from "./components/Test1"
import Courses from "./components/Courses"
import Page from "./components/testPage"
import Tags from "./components/test2";
//import Tags from "./components/Courses";
import FormPropsTextFields from "./components/req"
import Registration from "./Reg/Registration"
import UserDetails from "./components/UserDetails"
import App1 from "./Reg/example"
import UpdateDetails from "./Reg/UpdateDetails"
import Register from "./Reg/Register";
//import Register2 from "./Reg/Register2";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Register/>
            </div>

        );
    }
}

// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <Page/>,<Tags/>
//             </div>
//         );
//     }
// }
export default App;
