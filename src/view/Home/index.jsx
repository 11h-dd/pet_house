import React from 'react';
import Layout from "../Layout";
import Banner from "../../components/Banner";
import MainContent from "../../components/MainContent";


const Home = (props) => {
    return (
            <Layout>
                <Banner></Banner>
                <main>
                    <MainContent></MainContent>
                </main>
            </Layout>
    );
};

export default Home;