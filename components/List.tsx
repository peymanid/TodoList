import React from 'react';

interface ListItem {
  name: string;
}

interface ListProps {
  list: ListItem[]; 
  buttonClick: (index: number) => void;
  removeClick: (index: number) => void;
  listType: 'todo' | 'done'; 
}

const List: React.FC<ListProps> = ({ list, buttonClick, removeClick, listType }) => {
  let content: JSX.Element | string = 'No Data Found'; 
  if (list.length > 0) {
    content = (
      <>
        {list.map((item, index) => (
          <div key={index} className="list-item">
            {item.name}
            <div>
              <button onClick={() => buttonClick(index)}>
                {listType === 'todo' ? 'Mark it as Done' : 'Mark it as To Do'}
              </button>
              <button onClick={() => removeClick(index)}>Remove</button>
            </div>
          </div>
        ))}
      </>
    );
  }

  return <div>{content}</div>;
};

export default List;
