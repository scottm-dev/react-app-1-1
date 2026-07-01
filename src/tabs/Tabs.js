import React, { useState, useEffect } from 'react';
import TabContent from './TabContent';

const Tabs = (props) => {

  const [tabButtonList, setTabButtonList] = useState([]);
  const [tabContentList, setTabContentList] = useState([]);
  const [activeId, setActiveId] = useState();


  useEffect(() => {
    const buttons = [];
    const contentList = [];
    props.tabs.forEach((tab, index) => {
      buttons.push(<button key={`tab-button-${index}`} className='tab-button' onClick={() => setActiveId(index)}>{tab.button}</button>);
      contentList.push(<TabContent>{tab.content}</TabContent>);
    });

    setTabButtonList(buttons);
    setTabContentList(contentList);

  }, [props.tabs]);

  useEffect(() => {
    if (isNaN(activeId) && !isNaN(props.defaultTabIndex)) {
      setActiveId(props.defaultTabIndex);
    }
  }, [activeId, props.defaultTabIndex]);

  console.log('activeId', activeId);
  console.log('tabContentList[activeId]', tabContentList[activeId]);

  return (
    <div>       
      <div className='tabButtons'>{tabButtonList}</div>
      {tabContentList[activeId]}
    </div>
  );
}

  export default Tabs;