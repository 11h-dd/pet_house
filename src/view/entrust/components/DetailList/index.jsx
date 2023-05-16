import React from 'react';
import "../../../../components/visitOrreactTheStore/index.css"
import MyRate from "../../../../components/MyRate";

const DetailList = ({res}) => {
    return (<div>
        <div>
            <img src={res.char_avatar} className={"w-full"} alt=""/>
        </div>
        <div className={"h-[100px] p-[5px]"}>
            <div className={"flex items-baseline mb-[8px]"}>
                <div className={"mr-[30px] overflow-hidden whitespace-nowrap text-ellipsis  font-semibold"}>
                    {res.char_shop_name}
                </div>
                <div className={"text-[14px]"}>
                    <MyRate StartCount={res.char_status} isDisabled={true}/>
                </div>
            </div>
            <div className={"text-[14px] mb-[8px]"}>
                <span className={"text-[15px] text-[#d1562b]"}>地区</span>:{res.char_address}
            </div>
            <div>
                <span className={"text-[15px] text-[#d1562b]"}>宠物店简介</span>:{res.char_info}
            </div>

        </div>
    </div>);
};

export default DetailList;