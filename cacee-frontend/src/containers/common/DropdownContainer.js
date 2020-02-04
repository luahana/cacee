import React, { useEffect, useState } from 'react';
import Dropdown from '../../components/common/Dropdown';

const DropdownContainer = ({ list, title, subTitle, onSelect, fullWidth }) => {
  const [listOpen, setListOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(subTitle + title);

  const toggleList = () => {
    setListOpen(!listOpen);
  };

  const selectItem = ({ title, key, id }) => {
    setHeaderTitle(subTitle + title);
    onSelect(key);
    setListOpen(false);
  };

  const closeList = () => {
    if (listOpen) {
      setListOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeList);
    return () => {
      window.removeEventListener('click', closeList);
    };
  }, [listOpen]);

  return (
    <Dropdown
      fullWidth={fullWidth}
      listOpen={listOpen}
      list={list}
      headerTitle={headerTitle}
      toggleList={toggleList}
      selectItem={selectItem}
    />
  );
};

export default DropdownContainer;
