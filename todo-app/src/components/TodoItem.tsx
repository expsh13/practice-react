import React from "react";
import classNames from 'classnames'

export function TodoItem({item,onCheck}:any) {
  const handleChange = () => {
    onCheck(item);
    console.log('クリックされました！')
  };

  return (
    <label className="panel-block">
      <input 
        type="checkbox"
        checked={item.done}
        onChange={handleChange}
      />
      <span
        className={classNames({
          'gray-text': item.done // 真偽値
        })}
      >
        {item.text}
      </span>
    </label>
  );
}