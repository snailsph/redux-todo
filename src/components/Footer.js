import React from 'react';
import FilterLink from '../containers/FilterLink';
//包含过滤组件的底部组件
const Footer = () => (
  <p>
    Show:
    {"  "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {"  "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {"  "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer;
