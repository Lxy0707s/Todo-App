import React from 'react';
import {FilterTypes} from "@/pages/Mobx-ToDo/model";
import {Button} from "antd";
import './style.css';

const FilterView = (props:any) => {
    const {filterData} = props
    return (
        <p className="filterView">
            过滤选项:
            <Button className={"button-style"} onClick={()=>filterData(FilterTypes.ALL)}>全部</Button>
            <Button className={"button-style"} onClick={()=>filterData(FilterTypes.COMPLETED)}>完成</Button>
            <Button className={"button-style"} onClick={()=>filterData(FilterTypes.UNCOMPLETED)}>待定</Button>
        </p>
    );
}


export default FilterView;
