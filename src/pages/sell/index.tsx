import React from "react";
import addData from "../../lib/firebase/firebaseAddToDB";
import dataset from "../../../data/staticData.json";
import Head from "next/head";
const Sell = () => {
    const dbTitle = "properties";
    const handleForm = async () => {
        const data = {
            name: "John snow2",
            house: "Stark2",
        };
        const { result, error } = await addData(dbTitle, "resr", data);

        console.log(result);
        if (error) {
            return console.log(error);
        }
    };

    return (
        <div>
            <Head>
                <title>Sell your property</title>
            </Head>

            tets
            <button onClick={handleForm}>clic</button>
        </div>
    );
};

export default Sell;
