import "./index.css"
import {Button} from "antd";
const Banner = (props) => {
    return (
            <>
            <div className={"h-[900px]  bg-[#f6f6f6]"}>
                    <div className={"animalsTitles"}>
                        <div className={"container left"}>
                            <h1>爱它照顾它它也是<br/><br/>我们的家人</h1>
                            <p>可爱与忠实，不只有在宠物店才有！窝心的陪伴，是我们彼此永远的需要！还有很多流浪被抛弃的动物，一直等著有人去爱牠！给牠个温暖的家！当你想要养宠物时，不妨考虑领养这些更需要帮助的狗狗猫猫！爱不分出处！牠也会更感恩！更爱你！</p>
                            <div className={" h-[20rem] w-[20rem] rounded-[2rem]"}>
                                <Button className={"bg-[#f3724a] text-[#fdfdfd]"}>我要寄养宠物</Button>
                                <Button className={"bg-[#f3724a] text-[#fdfdfd]"}s>成为商家</Button>
                            </div>
                        </div>
                    </div>
                    <div className={"banners"} >
                    </div>
            </div>
            </>
    );
};

export default Banner;