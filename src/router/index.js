import {createBrowserRouter, Navigate} from "react-router-dom";
import Home from "../view/Home";
import Login from "../view/login";
import NotFound from "../view/NotFound";
import ForgetPass from "../view/ForgetPass";
import Entrust from "../view/entrust";
import Merchant from "../view/Merchant";
import PetClinic from "../view/petClinic";
import AdoptionCommunity from "../view/AdoptionCommunity";
import CollcaoTion from "../view/collcaotion";
import Person from "../view/Person";
import {lazy, Suspense} from "react";
import {Spin} from "antd";
import SC from "../view/Person/component/SC";
import DingDan from "../view/Person/component/DD";
import XGphone from "../view/Person/component/XGphone";
import XGpas from "../view/Person/component/XGpas";
import BDEmail from "../view/Person/component/BDemail";
import ChangeUserNames from "../view/Person/component/Usernames";
import Chat from "../view/chat";

const EntrustDetail = lazy(() => import("../view/entrust/view/Detail"))
export const router = createBrowserRouter([{
    path: "/", element: <Home/>,
}, {
    path: "loginAndRegister", element: <Login/>,
}, {
    path: "*", element: <NotFound/>
}, {
    path: "forPass", element: <ForgetPass/>
}, {
    path: "entrust", name: "寄养页面", element: <Entrust/>,
}, {
    path: "merchant", name: "成为商家", element: <Merchant/>
}, {
    path: "petclinic", name: "宠物医院", element: <PetClinic/>
}, {
    path: "adoptionCommunity", name: "领养页面", element: <AdoptionCommunity/>
}, {
    path: "CollcaoTion", name: "日常托管", element: <CollcaoTion/>
}, {
    path: "person", name: "个人主页", element: <Person></Person>, children: [{
        index: true, element: <Navigate to={"collect"}></Navigate>
    }, {
        path: "collect", element: <SC/>,
    }, {
        path: "order", element: <DingDan/>
    }, {
        path: "phone", element: <XGphone/>
    }, {
        path: "password", element: <XGpas/>
    }, {
        path: "email", element: <BDEmail/>
    }, {
        path: "usernames", element: <ChangeUserNames/>
    }]
}, {
    path: "entrust/details/:id", element: (<Suspense fallback={<Spin/>}>
        <EntrustDetail/>
    </Suspense>), name: "我要寄样详情页"
}, {
    path: "chat/:charId", element: <Chat/>, name: "私聊界面"
}

])