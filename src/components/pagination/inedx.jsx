import React from 'react';
import { Pagination } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {PageNumAdd, PagesNumSelector, PagesSizeSelector, PagesTotalSelector} from "../../store/features/PagesSlice";
const MyPagination = (props) => {
    const PageNum = useSelector(PagesNumSelector)
    const PageSize = useSelector(PagesSizeSelector)
    const PageTotal = useSelector(PagesTotalSelector)
    const dispatch = useDispatch()
    const Change = (value) => {
        dispatch(PageNumAdd(value))
    }
    return (
        <div className={"ml-[460px]"}>
            <Pagination current={PageNum} onChange={Change} defaultCurrent={PageNum} pageSizeOptions={PageSize} defaultPageSize={PageSize} total={PageTotal} />
        </div>
    );
};

export default MyPagination;