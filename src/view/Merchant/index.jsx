import React from 'react';
import Layout from "../Layout";
import CharRegister from "../../components/CharRegister";

//Start
// 我是成为商家页面
// 成为商家 user表里面的relation变为1
// 商家表加上这个用户创建的店
// 商家表:
//     CharId uint              商家Id
// UserId uint              用户id
// CharShopName string      店名
// CharUserName string      商家名字
// CharPhone string         商家联系电话
// CharAvatar string        商家头像
// CharAddress string       商家地址
// 商家员工表:
//     CharPersonId uint        商家店员Id
// CharId uint              商家Id
// CharPersonName string    商家员工姓名
// CharPersonAvatar string  商家员工头像
// CharPersonPhone string   商家员工手机号
// CHarPersonStatus int     商家员工评分
// //在寄养页面限定为市区
// 然后根据市区返回商家
// //商家还有评论表
// 商家评论表
// CharCommon:
// CharCommonId uint//评论id
// CharId uint //商家id 在那个商家里面评论的
// 评论内容表
// CharMessageId uint //商家评论内容id
// CharId uint //商家id 在那个商家里面评论的
// UserId uint //评论人
// Message string //内容
// //商家还有轮播图表 //店家在个人页面可以选择上传展示轮播图图片
// 商家轮播图表:
//     ShopBanner:
//         ShopBannerId uint //商家图片id
// CharId uint //商家Id
// CharImages string  //商家图片
//
// 点击进入商家详情页 然后如果是上门的话就选择 店员,可以通过评分选择
// 成为员工
// 定位市 然后根据商家表里面市的相同进行返回数据
//End


const Merchant = (props) => {
    return (<div>
        <Layout>
            <div className={"h-[500px] bg-amber-600 relative"}>
                <img className={"h-full w-full"}
                     src="https://storage.googleapis.com/petbacker/images/cms/headers/pet-sitter-job-background-3.jpg"
                     alt=""/>
                <div className={"container"}>
                    <div className={"absolute top-[141px] "}>
                        <div className={"text-[3.5rem] text-purple-50"}>
                            成为宠物寄养商家
                        </div>
                        <p className={"text-[1rem] text-purple-50"}>
                            成为寄养商家是一种有趣而灵活的<br/>赚钱方式，同时还可以与宠物共度时光.
                        </p>
                    </div>
                </div>
            </div>
            <div className={"container"}>
                {/*头部*/}
                <h1 className={"text-[2.6rem] font-bold mt-[40px] mb-[40px] text-center"}>完成三个步骤提供服务</h1>
                {/*选择部分*/}
                <div className={"mb-[70px]"}>
                    <ul className={"flex items-center"}>
                        <li className={"w-1/3 text-center p-1 "}>
                            <div className={"ml-[180px] rounded-full border-2 border-[#212529] border-solid w-[30px]"}>
                                1
                            </div>
                            <div className={"mb-[10px] font-bold"}>
                                免费列出您的服务
                            </div>
                            <div className={"text-left"}>
                                无需注册费即可提供宠物服务,列如宠物寄宿,宠物日托,上门服务
                            </div>
                        </li>
                        <li className={"w-1/3 text-center p-1 "}>
                            <div className={"ml-[180px] rounded-full border-2 border-[#212529] border-solid w-[30px]"}>
                                2
                            </div>
                            <div className={"mb-[10px] font-bold"}>
                                决定您的工作方式
                            </div>
                            <div className={"text-left"}>
                                选择您自己的时间表,价格以及其他条件,我们将一路协助您
                            </div>
                        </li>
                        <li className={"w-1/3 text-center p-1"}>
                            <div className={"ml-[180px] rounded-full border-2 border-[#212529] border-solid w-[30px]"}>
                                3
                            </div>
                            <div className={"mb-[10px] font-bold"}>
                                欢迎您的第一只宠物
                            </div>
                            <div className={"text-left"}>
                                列表通过之后您就可以开始接收工作了,您可以在预定前与宠物主人提出任何问题,并通过支付宝轻松付款
                            </div>
                        </li>
                    </ul>
                </div>
                {/*列表*/}
                <div className={"text-[18px]"}>
                    <div>
                        <div className={" h-[193px] border-solid border-inherit border border-[#e0e4e7] p-[30px] w-[70%] mb-2"}>
                            <ul className={"list-disc list-inside"}>
                                <b className={"pt-1"}>作为宠物寄养商家的优势</b>
                                <li>自由选择您的服务,报价</li>
                                <li>简单可靠的订单支付系统</li>
                                <li>会有人为您的店铺打分评价</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"flex h-[193px]]"}>
                        <img className={"h-[193px]"} src="https://storage.googleapis.com/petbacker/images/cms/icons/pet-sitter-job-dog-3.png" alt=""/>
                        <div className={"border-solid border-inherit border border-[#e0e4e7] p-[30px] w-[70%] mb-2"}>
                            <ul className={"list-disc list-inside"}>
                                <b className={"pt-1"}>一旦成为宠物寄养商家您必须</b>
                                <li>轻松管理:我们将全权处理所有客户的订单</li>
                                <li>市场行情:通过我们的广告系统,附近的人会更快地找到你</li>
                                <li>客服:细心的响应可会问题的客服团队</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"flex"}>
                        <div className={"border-solid border-inherit border border-[#e0e4e7] p-[30px] w-[70%] mb-2"}>
                            <ul className={"list-disc list-inside"}>
                                <b className={"pt-1"}>我们鼓励宠物寄养</b>
                                <li>定期更新的您的宠物信息</li>
                                <li>尽可能的上传更多的照片以证实对宠物的热爱</li>
                            </ul>
                        </div>
                        <img className={"h-[193px]"}  src="https://storage.googleapis.com/petbacker/images/cms/icons/pet-sitter-job-dog-2.png" alt=""/>
                    </div>
                    <div className={"flex"}>
                        <img className={"h-[193px]"} src="https://storage.googleapis.com/petbacker/images/cms/icons/pet-sitter-job-dog-3.png" alt=""/>
                        <div className={"border-solid border-inherit border border-[#e0e4e7] p-[30px] w-[70%] mb-2"}>
                            <ul className={"list-disc list-inside"}>
                                <b className={"pt-1"}>一旦与我们合作成为保姆, 你必须:</b>
                                <li>以友好和专业的方式亲自交付您承诺的服务</li>
                                <li>以友好和专业的方式亲自交付您承诺的服务</li>
                                <li>快速和专业的回应 (24 小时以内) 客户的咨询和预订请求</li>
                            </ul>
                        </div>
                    </div>
                    <div className={"flex"}>
                        <div className={"border-solid border-inherit border border-[#e0e4e7] p-[30px] w-[70%] mb-2"}>
                            <ul className={"list-disc list-inside"}>
                                <b className={"pt-1"}>同样重要的是，要知道</b>
                                <li>不会收取任何前期或后续费用 - 当您成功被预订及完成工作后，仅会收取报价中一定比例的交易费用</li>
                                <li>简若欲申请，您必须阅读并同意我们的条款及条件</li>
                                <li>为处理您的申请，我们需要您正确的联系信息，如邮件,手机号等等</li>
                            </ul>
                        </div>
                        <img className={"h-[193px]"} src="https://storage.googleapis.com/petbacker/images/cms/icons/pet-sitter-job-cat-3.png" alt=""/>
                    </div>
                </div>
                {/*表单设置 */}
                <h1 className={"text-[2.6rem] font-bold mt-[40px] mb-[40px] text-center"}>填入信息成为宠物寄养商家</h1>
                <div className={"p-8 container border  border-inherit border bg-[#f8fafc] rounded-3xl  shadow-xl"}>
                <CharRegister/>
                </div>
                <div className={"mb-[80px]"}>

                </div>

            </div>
        </Layout>

    </div>);
};

export default Merchant;