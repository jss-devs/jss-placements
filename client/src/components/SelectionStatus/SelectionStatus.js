import React from 'react';
import { Tag } from "antd";

const SelectionStatus = ({status}) => {
    if(status === "rejected") {
        return <Tag color="#dc3545">Not Selected</Tag>;
    }
    else if(status === "selected") {
        return <Tag color="#28a745">Shortlisted</Tag>;
    }
    return <Tag>Awaiting Result</Tag>;
}

export { SelectionStatus };
