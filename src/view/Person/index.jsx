import React, {useEffect, useState} from 'react';
import "./index.css"
import PersonHeader from "./widgets/PersonHeader";
import request from "../../requests/request";
import GetChar from "./widgets/getChar";
import GetUser from "./widgets/getUser";

const Person = () => {
    const [IsChar,SetIsChar] = useState(0)
         const getInfo = async ()=> {
             request({
                 url:"/user/person",
                 method:"GET",

             }).then(res => {
                 SetIsChar(res.data.relation)
             })
         }
    useEffect(() => {getInfo()},[])
    return (<>
            <PersonHeader></PersonHeader>
            {IsChar?<GetChar/>:<GetUser/>}
        </>

    );
};

export default Person;