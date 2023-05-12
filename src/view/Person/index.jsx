import React from 'react';
import "./index.css"
import PersonHeader from "./widgets/PersonHeader";

const Person = () => {

    return (<>
            <PersonHeader></PersonHeader>
            <div className={"fool"}>
                <div className={"person_left"}>左侧</div>
                <div className={"person_center"}>中间</div>
                <div className={"person_right"}>右侧</div>
            </div>
        </>

    );
};

export default Person;