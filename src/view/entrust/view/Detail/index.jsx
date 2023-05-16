import React, {useEffect} from 'react';
import "../../../../components/visitOrreactTheStore/index.css"
import DetailHeader from "../../components/DetailHeader";
import "./index.css"
import Icons from "../../components/Icons";
import ListHeader from "../../components/LIstHeader";
import {Button, FloatButton, Tabs} from "antd";
import MapsGd from "../../../../components/MapsGD";
import Visit from "../../../../components/visitOrreactTheStore/visit";
import Stores from "../../../../components/visitOrreactTheStore/Store";
import {useParams} from "react-router-dom";
import request from "../../../../requests/request";
// const url = "https://pic3.58cdn.com.cn/anjuke_58/7326206d42eba51f98e12cde35ee3c76?w=1080"
const url2 = "https://pic5.58cdn.com.cn/anjuke_58/8c7a0b37449acd15165b89b80955f374"
const siliao = "https://img.58cdn.com.cn/fangrs/img/8cd99ff4e7f538be32ba65dc09d98a35.png"
const jingao = "https://pic8.58cdn.com.cn/nowater/fangfe/n_v21235c416922c4bf3878764e098da45cb.png"

const onChange = (key) => {
};
const items = [
    {
        key: '1',
        label: `上门`,
        children: <Visit/>,
    },
    {
        key: '2',
        label: `到店`,
        children: <Stores/>,
    }
];
const EntrustDetail = (props) => {
    const params = useParams()
    useEffect(() => {
        //在这里面写请求
        (async() => {
            const response = await request({
                url:"entrust/charById",
                params:{
                    id:params.id
                }
            })
            console.log(response,"response")
        })()
    },[params])
    return (<>
        <DetailHeader/>
        <div className={"w-full mt-[70px] h-[612px] backdrop-blur-md mb-3 "} style={{
            backgroundImage: `url(${url2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"
        }}>
            <div className={"w-full h-full backdrop-blur-md backdrop-saturate-50"}>
                <div className={"container relative"}>
                    <div className={"h-[612px] absolute left-[180px]"}>
                        <img src={url2} className={"h-full "} alt=""/>
                    </div>
                    <div className={"absolute  h-[100px] left-0 top-[520px]"}>
                        <ul className={"flex h-full"}>
                            <li className={"border-2 w-[120px] h-[80px] border-solid   mr-1 active"}>
                                <img src={url2} alt="" className={"h-full w-full"}/>
                            </li>
                            <li className={"border-2 w-[120px] h-[80px] border-solid border-[#4a4a4a]  mr-1"}>
                                <img src={url2} alt="" className={"h-full  w-full"}/>
                            </li>
                            <li className={"border-2 w-[120px] h-[80px] border-solid border-[#4a4a4a]   mr-1"}>
                                <img src={url2} alt="" className={"h-full  w-full"}/>
                            </li>
                        </ul>
                    </div>
                    <div
                        className={"absolute w-[374px] h-[100px] right-0 top-[512px] text-[#f95633] bg-[#272728] flex items-center tracking-[3px]"}>
                       <span className={"ml-[26px] text-5xl mr-2"}> 面议
                       </span>
                        <span className={"mt-4"}>
                            元/天
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className={"container relative "}>
            <div className={"flex"}>
                <div>
                    <div className={"mb-2"}>
                        江苏省宿迁市xxxxxx
                    </div>
                    <h2 className={"w-[620px] whitespace-nowrap text-[32px] mb-2 text-ellipsis overflow-hidden"}>合租｜可免押金
                        月付 地铁口 西元国际 万达广场 芝麻街 无杂费</h2>
                    <div>
                        <Icons title={"成功"}></Icons>
                        <Icons title={"押一付一"}></Icons>
                    </div>
                </div>
                <div
                    className={"w-[374px] absolute h-[100px] top-[-12px] right-0  border-solid border-[1px] border-[#d8d7d3] py-0 px-[25px]"}>
                    <div className={"mb-3 text-[14px] mt-2 flex"}>
                        <span className={"text-[#ccae46] mr-3"}>
                            已收藏</span>
                        <span className={"flex align-text-bottom"}>
                            <i style={{backgroundImage: `url(${jingao})`, backgroundSize: "15px 15px"}}
                               className={"w-[15px] h-[15px] mr-[2px]"}/>
                            举报</span>
                    </div>
                    <div className={"flex "}>
                        <div
                            className={"flex rounded-[4px]  items-center bg-[#f9f9f9] text-[#43a5ee] w-[74px] h-[44px] py-[14px] px-2 mr-4 text-[12px] "}>
                            <i className={" block w-[25px] h-[25px]"} style={{
                                backgroundImage: `url(${siliao})`,
                                backgroundSize: "78px auto",
                                backgroundPosition: "-32px 4px"
                            }}></i>
                            <span>
                                私聊
                            </span>
                        </div>
                        <span
                            className={" rounded-[4px] bg-[#c9ab40] text-[#ffffff] py-[9px] px-20 text-[18px]"}>查看电话</span>
                    </div>
                </div>
            </div>
        </div>
        <div className={"mt-[50px]  bg-[#f9f9f9]"}>
            <div className={"container"}>
                {/*头部标签*/}
                <ListHeader title={"房屋图片"} color={1}></ListHeader>
                {/*图片展示页面*/}
                <div className={"mt-[30px]"}>
                    <ul className={"flex flex-wrap ml-[107px]"}>
                        <li className={"LiImgs"}>
                            <img className={"Imgs"}
                                 src="https://pic2.58cdn.com.cn/anjuke_58/7326206d42eba51f98e12cde35ee3c76?w=1080"
                                 alt=""/>
                        </li>
                        <li className={"LiImgs"}>
                            <img className={"Imgs"}
                                 src="https://pic3.58cdn.com.cn/anjuke_58/00ba9c08a5ddd8ab41815640e5ff99a6?w=1080"
                                 alt=""/>
                        </li>
                        <li className={"LiImgs"}>
                            <img className={"Imgs"}
                                 src="https://pic3.58cdn.com.cn/anjuke_58/8c7a0b37449acd15165b89b80955f374?w=1080"
                                 alt=""/>
                        </li>
                    </ul>
                    <div className={"ml-[550px] mt-[20px]  "}>
                        <Button className={"mb-[30px]"}>更多图片+</Button>
                    </div>
                </div>
            </div>
        </div>
        <div className={"container"}>
            <div>
                <ListHeader title={"费用详细"} color={0}></ListHeader>
            </div>
            <div className={"mt-[30px]  flex "}>
                <div className={"w-1/2 mb-[30px] "}>
                    <div className={"mb-[20px] font-semibold text-[20px]"}>
                        小型动物
                    </div>
                    <div className={"text-[16px]"}>
                        <dt className={"mb-[20px]"}>
                            <span className={"mr-[100px]"}>付款方式</span>
                            <span className={"mr-[100px]"}>短期(元/天)</span>
                            <span className={"mr-[100px]"}>长期(元/天)</span>
                        </dt>
                        <dt>
                            <span className={"mr-[100px]"}>押一付一</span>
                            <span className={"mr-[100px]"}>50</span>
                            <span className={"mr-[100px]"}>100</span>
                        </dt>
                    </div>
                </div>
                <div className={"w-1/2 border-l-[1px] border-solid border-[#eaeaea] pl-[30px]"}>
                    <div className={"mb-[20px] font-semibold text-[20px]"}>
                        大型动物
                    </div>
                    <div>
                        <div className={"text-[16px]"}>
                            <dt className={"mb-[20px]"}>
                                <span className={"mr-[100px]"}>付款方式</span>
                                <span className={"mr-[100px]"}>短期(元/天)</span>
                                <span className={"mr-[100px]"}>长期(元/天)</span>
                            </dt>
                            <dt>
                                <span className={"mr-[100px]"}>押一付一</span>
                                <span className={"mr-[100px]"}>50</span>
                                <span className={"mr-[100px]"}>100</span>
                            </dt>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={"container"}>
            <ListHeader title={"地图地址"} color={false}></ListHeader>
            <div className={"mt-[30px] h-[570px]"}>
                <div className={"h-full rounded-2xl overflow-hidden"}>
                    <MapsGd></MapsGd>
                </div>
            </div>
        </div>
        <div className={"bg-[#f9f9f9]"}>
           <div className={"container"}>
               <div>
                   <ListHeader title={"服务选择"}></ListHeader>
               </div>
               <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
           </div>
        </div>
        <div className={"bg-[#e5e5e5] h-[50px] flex justify-center"}>
            <div className={"text-[14px] text-[#9a9a9a] leading-[50px]"}>宠物寄养帮助中心</div>
        </div>
        <FloatButton.BackTop type={"default"} className={"hover:bg-[#f0f0f0]"}/>
    </>)
};

export default EntrustDetail;