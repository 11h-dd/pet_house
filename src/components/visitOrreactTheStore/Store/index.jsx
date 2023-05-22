import React from 'react';

const Stores = (props) => {
    return (
        <div>
            到店
            {/*///*/}
            宠物姓名:
            宠物种类:
            宠物性别:
            宠物性格(可以具体详细):
            宠物疾病史:
            何时开始寄养:
            宠物喜好:
            主人手机:
            主人姓名:
            何时结束:
            {props.id}
        </div>
    );
};

export default Stores;