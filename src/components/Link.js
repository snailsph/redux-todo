import React from 'react';
//单个过滤的小组件，同active显示状态，onclick触发父组件更新state
const Link = ({ active, children, onClick }) => {
  if(active){
    return <span>{children}</span>
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      >
      {children}
    </a>
  )
}

export default Link;
