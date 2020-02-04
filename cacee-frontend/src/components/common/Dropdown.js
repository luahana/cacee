import React from 'react';
import styled, { css } from 'styled-components';

const DropDownBlock = styled.div`
  user-select: none;
  position: relative
  width: 16rem;
  ${props =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}
`;

const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  cursor: default;
  position: relative;
  background-color: white;
`;

const DropdownTitle = styled.div`
  font-weight: 50;
`;

const DropdownList = styled.ul`
  margin-top: 0.2rem;
  z-index: 10;
  position: absolute;
  width: 100%;
  border: 1px solid rgb(223, 223, 223);
  border-top: none;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: white;
  box-shadow: 0 2px 5px -1px rgb(232, 232, 232);
  padding: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

const DropdownListItem = styled.li`
  width: 100%;
  font-size: 0.8rem;
  padding: 0.5rem;
  line-height: 1rem;
  cursor: default;
  display: inline-block;
  white-space: nowrap;
  text-overflow: ellipsis;

  .selected {
    color: white
    background-color: #FFCC01
  }
      
  :hover {
    color: white;
    background-color: #ffcc01;
  }
`;

const Dropdown = ({
  listOpen,
  list,
  headerTitle,
  toggleList,
  selectItem,
  fullWidth,
}) => (
  <DropDownBlock fullWidth={fullWidth}>
    <DropdownHeader onClick={() => toggleList()}>
      {headerTitle}
      <DropdownTitle>
        {listOpen ? (
          <i className="fa fa-angle-up fa-2x"></i>
        ) : (
          <i className="fa fa-angle-down fa-2x"></i>
        )}
      </DropdownTitle>
    </DropdownHeader>
    {listOpen && (
      <DropdownList onClick={e => e.stopPropagation()}>
        {list.map(item => (
          <DropdownListItem key={item.id} onClick={() => selectItem(item)}>
            {item.title}{' '}
            {/* {item.selected && <i className="fa fa-check fa-2x"></i>} */}
          </DropdownListItem>
        ))}
      </DropdownList>
    )}
  </DropDownBlock>
);

export default Dropdown;
