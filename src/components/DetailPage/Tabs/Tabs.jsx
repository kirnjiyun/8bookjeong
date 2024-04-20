// TabsComponent.jsx
import React from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #f0f0f0;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Tab = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.isActive ? 'white' : '#464646')};
  background-color: ${(props) => (props.isActive ? '#464646' : 'transparent')};
  cursor: pointer;
`;

function TabsComponent({ onTabClick, activeTab }) {
  return (
    <TabsContainer>
      <Tab isActive={activeTab === 'bookInfo'} onClick={() => onTabClick('bookInfo')}>
        도서정보
      </Tab>
      <Tab isActive={activeTab === 'delivery'} onClick={() => onTabClick('delivery')}>
        배송/반품/교환
      </Tab>
    </TabsContainer>
  );
}

export default TabsComponent;
