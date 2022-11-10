import { Container, ThemeProvider } from '@mui/material';
import { ChildrenProps } from '../model/viewInterface';
import { mainTheme } from '../theme/mainTheme';


const ViewFrame = ({children}: ChildrenProps) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Container maxWidth="sm" sx={{m: "0 auto", p: 0}}>
        {children}
      </Container>
    </ThemeProvider>
  )
}

export default ViewFrame;