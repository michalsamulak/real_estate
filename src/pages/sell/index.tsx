import React from "react";
import addData from "../../../lib/firebase/firebaseAddToDB";

const Sell = () => {
    const handleForm = async () => {
        const data = {
            name: "John snow2",
            house: "Stark2",
        };
        const { result, error } = await addData(
            "users",
            "user-id2ssssddms,dm",
            data
        );
        console.log(result);
        if (error) {
            return console.log(error);
        }
    };

    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            tets
            <button onClick={handleForm}>clic</button>
        </div>
    );
};

export default Sell;
