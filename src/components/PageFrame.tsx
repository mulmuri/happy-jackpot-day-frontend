import React from 'react';
import { Stack, Toolbar } from '@mui/material';
import { ChildrenProps } from '../model/viewInterface';



const PageFrame = ({children}: ChildrenProps) => {
  return (
    <>
    <Toolbar/>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{pt: 1}}
      >
        
        {children}
      </Stack>
      <div style={{height: 66}}/>
    </>
  );
}

export default PageFrame;


