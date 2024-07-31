import React from 'react';
import TagITem from '../TagItem/TagItem';

const TabList = ({ tags, title }) => {
  const content = tags?.map((item) => <TagITem key={item.id} title={item.tag} />);

  return (
    <div>
      {title && (
        <div className="mb-3">
          <h2>{title}</h2>
        </div>
      )}
      <div className="flex flex-wrap gap-2">{content}</div>
    </div>
  );
};

export default TabList;
