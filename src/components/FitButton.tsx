import { Button, styled } from "@mui/material"

const FitButton = styled(Button)({
    borderRadius: 0,
    height: "44px",
    width: '80%',
    maxWidth: '600px'
})

FitButton.defaultProps = {
    variant: "contained",
    color:   "info",
    disableElevation: true,
}


export default FitButton;

/*
variant: "contained",
bgcolor: "info.main",
color: "warning.main",
sx: 
*/