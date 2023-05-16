import React from 'react';

const Icons = ({title}) => {
    return (
        <li className={" float-left h-[30px] mr-[10px] py-0 px-[10px] leading-[30px] border-solid border-[1px] text-[#757575] border-[#90d4c2] text-[14px]"}>
            {title}
        </li>
    );
};

export default Icons;