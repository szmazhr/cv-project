import React from 'react';
import Heading from './Heading';

function List({ listItems, heading }) {
  const list = listItems.map((item) => {
    if (item.length > 0 && item[1] && typeof item !== 'string') {
      return (
        item[1] && (
          <li key={item[1]}>
            {item[0]}
            {item[1]}
          </li>
        )
      );
    }
    if (typeof item === 'string') {
      return <li key={item}>{item}</li>;
    }
    return null;
  });

  return (
    <div className={heading.toLowerCase().replace(/\s+/g, '-')}>
      <Heading text={heading} />
      <ul>{list}</ul>
    </div>
  );
}
export default List;
