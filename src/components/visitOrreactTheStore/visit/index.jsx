import React from 'react';

const Visit = (props) => {
    return (
        <div>
                <div>
                    在家
                    {/*上门*/}
                    宠物姓名:
                    宠物种类:
                    宠物性别:
                    宠物喜好:
                    宠物性格(可以具体详细):
                    宠物疾病史:
                    居家地址(可以不用详细,到时候会打电话询问):
                    主人手机:
                    主人姓名:
                    选择何时来家:
                    选择合适结束:
                    选择商家:
                    选择商家里面的店员:
                    备注:
                    服务价格:
                </div>
            {props.id}
        </div>
    );
};

export default Visit;