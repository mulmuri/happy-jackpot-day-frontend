import { FormControl, InputLabel, Input, FormHelperText, ThemeProvider } from '@mui/material';
import { formInterface } from '../model/viewInterface';
import { formTheme } from '../theme/formTheme';



const InputItem = ({formType, label, handleChange, handleCheck, error}: formInterface) => {

    return (
        <ThemeProvider theme={formTheme}>
        <FormControl variant="standard" color="primary" error={error.isError}
          sx={{ m: 1, width: "80%" }}>
            <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
            <Input
              id={formType+"-section"}
              onChange={handleChange}
              onBlur={handleCheck}
            />
            {error.isError && error.target === formType &&
                <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
        </ThemeProvider>
    )
}

export default InputItem;