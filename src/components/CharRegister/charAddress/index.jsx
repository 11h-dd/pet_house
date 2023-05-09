import React, {useEffect, useState} from 'react';
import {Cascader, Form} from "antd";
import request from "../../../requests/request";
// {
//     value: 'zhejiang',
//         label: 'Zhejiang',
//     children: [
//     {
//         value: 'hangzhou',
//         label: 'Hangzhou',
//         children: [
//             {
//                 value: 'xihu',
//                 label: 'West Lake',
//             },
//         ],
//     },
// ],
// },
// const residences = []
var aaa = []
const CharAddress = (props) => {
    const [residences, Setresidences] = useState([])
    useEffect(() => {
        (async () => {
            const response = await request.request({
                method: "get", url: "regin/province"
            })
            if (response.status === 200) {
                const Province = response.data
                Province.forEach(item => {
                    aaa.push({
                        regin_id: item.regin_id, label: item.name, value: item.name, children: []
                    })
                })
                Setresidences(aaa)
            }
        })()
    }, [])
    //点击获取市区
    const myonFoucs = async (value, selectOptions) => {
        if (selectOptions.length === 2) {
            const response = await request({
                url: "/regin/city", method: "get", params: {
                    regin_id: Number(selectOptions[1].regin_id) + 1
                }
            })
            const childrenData = response.data
            for (const childrenCityElement of childrenData) {
                childrenCityElement["label"] = childrenCityElement.name
                childrenCityElement["value"] = childrenCityElement.name
            }
            let CityQu = Number(childrenData[0].pid) - 1
            for (let residence of residences) {
                for (let residenceChildren of residence.children) {
                    if (residenceChildren.regin_id === CityQu) {
                        residenceChildren["children"] = childrenData
                        Setresidences([...residences])
                        return
                    }
                }
            }
        }
        const response = await request({
            url: "/regin/city", method: "get", params: {
                regin_id: selectOptions[0].regin_id
            }
        })
        //通过id请求过来的市
        const childrenCity = response.data
        if (!childrenCity) return
        for (const childrenCityElement of childrenCity) {
            childrenCityElement["label"] = childrenCityElement.name
            childrenCityElement["value"] = childrenCityElement.name
            childrenCityElement["children"] = []
        }
        const ProvinceIndex = childrenCity[0].pid

        for (let residence of residences) {
            if (residence.regin_id === ProvinceIndex) {
                //确定是哪个省里面的
                // const index = residences.indexOf(residence)
                residence["children"] = childrenCity
                Setresidences([...residences])
                return
            }
        }

    }
    return (<>
            <Form.Item
                name="charAddress"
                label="商家地址"
                rules={[{
                    type: 'array', required: true, message: '请填写您店家的地址',
                }]}
            >
                <Cascader options={residences} onChange={myonFoucs} changeOnSelect={true}/>
            </Form.Item>

        </>


    );
};

export default CharAddress;