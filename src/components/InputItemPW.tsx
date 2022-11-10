import React, { useState } from 'react';

import { FormControl, InputLabel, Input, InputAdornment, IconButton, FormHelperText, ThemeProvider } from '@mui/material';
import { formInterface } from '../model/viewInterface';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { formTheme } from '../theme/formTheme';



const InputItemPW = ({formType, label, handleChange, error}: formInterface) => {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <ThemeProvider theme={formTheme}>
      <FormControl variant="standard" color="primary"
        sx={{ m: 0, width: "80%" }}>
        <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
        <Input
          id={formType+"-section"}
          onChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff color="primary" /> : <Visibility color="primary" />}
              </IconButton>
            </InputAdornment>
          }
        />
        {error.isError && error.target === formType &&
            <FormHelperText>{error.message}</FormHelperText>}
      </FormControl>
      </ThemeProvider>
    )
}

export default InputItemPW;