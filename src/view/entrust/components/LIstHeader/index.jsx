import React from 'react';

const ListHeader = ({title,color}) => {
    return (
        <div className={"text-4xl text-center"}>
            <div className={"pt-[26px] w-[160px] my-0 mx-auto relative"}>
                <div className={`relative z-10 bg-[${color?"#f9f9f9":"#ffffff"}]`}>{title}</div>
                <hr className={"absolute left-[50%] bottom-[15px]  w-[395px] ml-[-200px] border-[1px] border-solid border-[#d5d5d5] z-0"}/>
            </div>
        </div>
    );
};

export default ListHeader ;