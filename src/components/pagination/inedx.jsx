import React from 'react';
import { Pagination } from 'antd';
const MyPagination = (props) => {
    return (
        <div className={"ml-[460px]"}>
            <Pagination defaultCurrent={1} total={50} />
        </div>
    );
};

export default MyPagination;