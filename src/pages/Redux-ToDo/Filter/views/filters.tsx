import React from 'react';
import Links from "./Links";
import {FilterTypes} from '../../constants'

import './style.css';

export const FilterView: React.FC = () =>  {
  return (
    <p className="filters">
      <Links filter={FilterTypes.ALL}> {FilterTypes.ALL} </Links>
      <Links filter={FilterTypes.COMPLETED}> {FilterTypes.COMPLETED} </Links>
      <Links filter={FilterTypes.UNCOMPLETED}> {FilterTypes.UNCOMPLETED} </Links>
    </p>
  );
};

export default FilterView;
