import React from 'react';
import "./home.css"
const Footer = (props) => {
    return (
        <div className="footer mt-3 ">
            <div className="footer_item container pt-[5rem]">
                <div className="item">
                    宠物服务
                    <ul>
                        <li>宠物寄养</li>
                        <li>宠物保姆</li>
                        <li>宠物日托</li>
                        <li>宠物护理</li>
                    </ul>
                </div>
                <div>
                    宠物爱好者
                    <ul>
                        <li>成为宠物保姆</li>
                    </ul>
                </div>
                <div>
                    关于我们
                    <ul>
                        <li>帮助中心</li>
                        <li>使用条列</li>
                        <li>隐私政策</li>
                    </ul>
                </div>
                <div>
                    联系我们
                    <ul>
                        <li>发送邮件给我们</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;