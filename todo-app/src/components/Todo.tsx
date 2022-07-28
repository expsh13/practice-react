import React from 'react';
import { TodoItem } from './TodoItem';
import { Input } from './Input';


export function Todo() {

  const getKey = (): string => Math.random().toString(32).substring(2);

  const [items, setItems] = React.useState([
    { key: getKey(), text: 'Learn JavaScript', done: false },
    { key: getKey(), text: 'Learn React', done: false },
    { key: getKey(), text: 'Get some good sleep', done: false },
  ]);

  const handleAdd = text => {
    setItems([...items, { key: getKey(), text, done: false }]);
  };

  const handleCheck = (checked:any) => {
    console.log('各アイテムがクリックされた時に動く関数')
    // アイテム情報の更新
    const newItems = items.map(item => {
      if (item.key === checked.key) {
        item.done = !item.done;
      }
      return item;
    });
    setItems(newItems);
  };


  return (
    <div className="panel">
      <div className="panel-heading">
        ⚛️ React ToDo
      </div>
      <Input onAdd={handleAdd} />
      {items.map(item => (
        <TodoItem 
          key={item.key} 
          item={item}
          onCheck={handleCheck}
        />
      ))}
      <div className="panel-block">
        {items.length} items
      </div>
    </div>
  );

}