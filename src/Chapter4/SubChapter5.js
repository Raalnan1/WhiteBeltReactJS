import React, { useState } from 'react';

function SubChapter5() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div>
      <p>Details about "Understanding the useState hook".</p>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px' }}>Status: {isOn ? 'On' : 'Off'}</span>
        <span onClick={toggle} style={{ cursor: 'pointer' }}>
          {isOn ? '💡' : '💤'}
        </span>
      </div>
    </div>
  );
}

export default SubChapter5;
