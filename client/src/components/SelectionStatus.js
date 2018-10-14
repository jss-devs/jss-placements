import React from 'react';
import { Tag } from 'antd';

const SelectionStatus = ({ status }) => {
  const insideText = {
    selected: 'Shortlisted',
    rejected: 'Not Selected',
    pending: 'Results Awaited'
  };
  const textColor = {
    selected: '#28a745',
    rejected: '#dc3545',
    pending: ''
  };
  const text = insideText[status];
  const color = textColor[status];
  return <Tag color={color}>{text}</Tag>;
};

export { SelectionStatus };
