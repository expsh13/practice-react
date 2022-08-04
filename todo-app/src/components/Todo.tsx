import React from 'react';
import { TodoItem } from './TodoItem';
import { Input } from './Input';
import { Filter } from './Filter';
import { text } from 'stream/consumers';


export function Todo() {

  const getKey = (): string => Math.random().toString(32).substring(2);

  const [items, setItems] = React.useState([
    { key: getKey(), text: 'Learn JavaScript', done: false },
    { key: getKey(), text: 'Learn React', done: false },
    { key: getKey(), text: 'Get some good sleep', done: false },
  ]);

  const [filter, setFilter] = React.useState('ALL');

  const handleFilterChange = (value:any) => setFilter(value);

  const displayItems = items.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.done;
    if (filter === 'DONE') return item.done;
  });

  const handleAdd = (txt:any) => {
    // スプレッド構文
    setItems([...items, { key: getKey(), text: txt, done: false }]);
    // console.log(txt);
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
      <Filter
        onChange={handleFilterChange}
        value={filter}
      />
      {items.map(item => (
        <TodoItem 
          key={item.key} 
          item={item}
          onCheck={handleCheck}
        />
      ))}
      <div className="panel-block">
        {displayItems.length} items
      </div>
    </div>
  );

}