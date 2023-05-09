import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer";
import {FloatButton} from "antd";

function Layout(props) {
    return (
        <div>
            <Header></Header>
            {props.children}
            <Footer></Footer>
            <FloatButton.BackTop type={"default"} className={"hover:bg-[#f0f0f0]"}/>

        </div>
    );
}

export default Layout;