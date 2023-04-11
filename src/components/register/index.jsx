import React from 'react';
import {Drawer} from 'antd';
import RegisterInput from "./registerInput";

const Register = (props) => {

    return (
        <div className={"absolute w-[31.1rem] h-[634px]  top-[-117px] right-[-3.2rem] rounded-br-2xl text-center   rounded-tr-2xl overflow-hidden   "} >
            <Drawer title="注册" placement="right" onClose={props.onClose} open={props.open}
                    width={500}
                    getContainer={false}
                    mask={false}>
               <RegisterInput></RegisterInput>
            </Drawer>
        </div>
   );
};

export default Register;