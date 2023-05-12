import {createBrowserRouter} from "react-router-dom";
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

export const router = createBrowserRouter([{
    path: "/", element: <Home/>,
}, {
    path: "loginAndRegister", element: <Login/>,
}, {
    path: "*", element: <NotFound/>
}, {
    path: "forPass", element: <ForgetPass/>
}, {
    path: "entrust", name: "寄养页面", element: <Entrust/>
}, {
    path: "merchant", name: "成为商家", element: <Merchant/>
}, {
    path: "petclinic", name: "宠物医院", element: <PetClinic/>
}, {
    path: "adoptionCommunity", name: "领养页面", element: <AdoptionCommunity/>
}, {
    path: "CollcaoTion", name: "日常托管", element: <CollcaoTion/>
},{
    path:"person",
    name:"个人主页",
    element: <Person></Person>
}

])