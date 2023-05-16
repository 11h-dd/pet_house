import React, {useEffect} from 'react';
import Layout from "../Layout";
import VisitOrStore from "../../components/visitOrreactTheStore";
import request from "../../requests/request";
import {PagesNumSelector, PagesSizeSelector, SavePages} from "../../store/features/PagesSlice";
import {useDispatch, useSelector} from "react-redux";

const Entrust = (props) => {
    const PageNum = useSelector(PagesNumSelector)
    const PageSize = useSelector(PagesSizeSelector)
    const  dispatch = useDispatch()
    useEffect(() => {
        (async function () {
            const response = await request({
                url: "entrust/char", params: {
                    pageNum: PageNum, pageSize: PageSize
                }
            })
            const PagesList = response.data
            dispatch(SavePages({
                result: PagesList.char,
                PageNum: PagesList.page_num,
                PageSize: PagesList.page_size,
                PageTotal: PagesList.page_total,
            }))
        })()
    }, [PageNum,dispatch,PageSize])
    return (<div className={"bg-[#f2f3f5]"}>
        <Layout>
            <div className={"container"}>
                <VisitOrStore/>
            </div>
        </Layout>

    </div>);
};

export default Entrust;