import React from 'react';
import Layout from "../Layout";
import VisitOrStore from "../../components/visitOrreactTheStore";

const Entrust = (props) => {
    return (
        <div>
            <Layout>
                <div className={"container"}>
                    <VisitOrStore/>
                </div>

            </Layout>

        </div>
    );
};

export default Entrust;