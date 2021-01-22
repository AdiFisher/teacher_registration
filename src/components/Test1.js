import React, { useState } from "react";
import Multi from "./Multi";
import Button from "@material-ui/core/Button";

const Test = () => {
    const callbackFromMultiSelect = (favBooks, key, reference) => {
        const newUsers = { ...users };
        newUsers[key].favBooks = favBooks;
        setUsers(newUsers);
    };

    const favBooks = [
        { name: "LOTR", from: "a", to: "a" },
        { name: "GOT", from: "b", to: "b" },
        { name: "HP", from: "c", to: "c" }
    ];

    const menuItems = [
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

    //make users object to manipalulate data
    const startUsers = {
        user1: {
            favBooks: [favBooks[0], favBooks[2]]
        },
        user2: {
            favBooks: [favBooks[1]]
        }
    };

    const [users, setUsers] = useState(startUsers);

    const handleUsers = () => {
        //do sometging with userdata

        console.log(users);
    };
    return (
        <div className={"mainStore"}>
            {Object.keys(users).map((userKey) => {
                return (
                    <Multi
                        key={userKey}
                        callbackFromMultiSelect={callbackFromMultiSelect}
                        reference={"test"}
                        favBooks={users[userKey].favBooks}
                        userKey={userKey}
                        options={favBooks}
                    />
                );
            })}
            <Button onClick={handleUsers}> Sumbit values</Button>
        </div>
    );
};

export default Test;
