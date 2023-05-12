import React, {useEffect} from 'react';
import {myWoW} from "../../utils/myWow";
import one from "../../assets/images/1.jpg"
import two from "../../assets/images/2.jpeg"
import three from "../../assets/images/3.jpeg"
import four from "../../assets/images/4.webp"
import h1s from "../../assets/images/h1.jpeg"
import h2s from "../../assets/images/h2.jpeg"
import h3s from "../../assets/images/h3.jpeg"
import h4s from "../../assets/images/h4.webp"
import {Button, Carousel} from "antd";
const contentStyle = {
    height: '350px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const MainContent = (props) => {
    useEffect(() => {
        myWoW.init()
    }, [])
    return (<>
        <div className={"text-center text-3xl "}>
            <div className={"h-[30rem] bg-[#f2f3f5]"}>
                <div className={"container pt-8 pb-8"}>
                    <h1 className={"mb-10 wow animate__fadeInDown"}>宠物寄养</h1>
                    <p className={"wow animate__fadeInDown"}>
                        爱宠一生为伴，梦梦与您结缘
                        梦梦知你心，宠物伴身边
                    </p>
                    <div className={"flex justify-between mt-10 wow animate__fadeInRightBig"}>
                        <img className={"w-60 h-60 bg-amber-950"} src={one} alt=""/>
                        <img className={"w-60 h-60 bg-amber-950"} src={two} alt=""/>
                        <img className={"w-60 h-60 bg-amber-950"} src={three} alt=""/>
                    </div>
                </div>
            </div>
            <div className={"h-[30rem] bg-[#ffffff]"}>
                <div className={"container pt-8 pb-8"}>
                    <h1 className={"wow  animate__fadeInLeft mb-10 "}>服务种类</h1>
                    {/**/}
                    <div className={"flex wow animate__fadeInLeft"}>
                        <div className={"mr-20"}>
                            <img src={four} alt="" className={"h-[350px] w-[600px] rounded-2xl"}/>
                        </div>
                        <div className={"text-[30px]"}>
                            <h3>我们会让他们真正快乐心心相系,宠物情缘,快乐共享,宝贝家园</h3>
                            <p className={"text-orange-800"}>上门喂养</p>
                            <p className={"text-orange-800"}>上门洗澡</p>
                            <p className={"text-orange-800"}>宠物护理</p>
                            <p className={"text-orange-800"}>商家服务</p>
                            <Button>了解更多</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"h-[30rem] bg-[#f2f3f5]"}>
                <div className={"container pt-8 pb-8"}>
                    <h1 className={"wow animate__zoomIn"}>护理措施</h1>
                    <div className={"wow animate__lightSpeedInRight"}>
                        <Carousel effect="fade" autoplay={true}>
                            <div>
                                <h3 style={contentStyle}>
                                    <img className={"w-full"} src={h1s} alt=""/>
                                </h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}><img src={h2s} className={"w-full"} alt=""/></h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}><img src={h3s} className={"w-full"} alt=""/></h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}><img src={h4s} className={"w-full"} alt=""/></h3>
                            </div>
                        </Carousel>
                        <p className={"mt-2 wow animate__bounceInRight"}>我们准备了贴心的宠物医疗服务</p>
                    </div>
                </div>
            </div>
            {/*wow animate__fadeInDown*/}
            <div className={" h-[30rem] bg-[#ffffff]"}>
                <div className={"container pt-8 pb-8 wow animate__flipInY"}>
                    <h1>服务承诺</h1>
                    <ul>
                        <li>如果主子不在家,家中需要提前备足猫粮并告知铲屎位置,离家时规制好易碎物品食品电器等等</li>
                        <li>一定的要说明宠物身体情况,喜好还有习惯,有无疾病史,一边进行更好的护理工作</li>
                        <li>在签合同之前一定要对机构,平台,还有上门人员进行考察哦,必须专业,有责任心</li>
                    </ul>
                </div>
            </div>
        </div>
    </>);
};

export default MainContent;