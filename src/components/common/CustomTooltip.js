import { Fade, Tooltip } from '@mui/material';
import React from 'react';

const CustomTooltip = ({ children, title = 'tooltip' }) => {
  return (
    <Tooltip
      placement="top"
      title={title}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
    >
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
