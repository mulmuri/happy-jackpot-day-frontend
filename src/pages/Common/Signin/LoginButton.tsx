import { Button } from '@mui/material';
import { useContext } from 'react';
import SignContext from '../../../contexts/Global';

const LoginButton = () => {
    const Sign = useContext(SignContext);
    const { requestSignin } = Sign.actions;

    return (
      <Button
        variant="contained"
        color="info"
        sx={{ m: 1, borderRadius: 0, width: "80%", height: 44 }}
        disableElevation
        onClick={requestSignin}
      > 로그인
      </Button>
    )
  }

export default LoginButton;