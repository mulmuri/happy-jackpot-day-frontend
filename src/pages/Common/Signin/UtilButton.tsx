import { useState, Fragment } from 'react';
import { Typography, Modal, Box, Link, Divider, Alert, AlertTitle } from "@mui/material";
import { scriptInterface } from '../../../model/viewInterface';



const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    boxShadow: 24,
    p: 1,};


const register: scriptInterface = {
    title: `회원가입`,
    content: `추천인의 기기를 통해서만 \n 회원가입을 할 수 있습니다.`
}

const findidpw: scriptInterface = {
    title: `아이디/비밀번호 찾기`,
    content: `관리자에게 문의해주세요.`
}


const CustomLink = (props: scriptInterface) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Fragment>
        <Link
          underline="hover"
          variant="body2"
          component="button"
          color="text.secondary"
          onClick={handleOpen}>
          {props.title}
        </Link>
          <Modal
            open={open}
            onClose={handleClose}
          >
            <Alert sx={style} severity="error">
              <AlertTitle>안내</AlertTitle>
              <Typography textAlign="inherit" >
                {props.content}
              </Typography>
            </Alert>
          </Modal>
          </Fragment>
    )
}



const UtilButton = () => {
    return (
        <Box
          sx={{
            display: 'flex',
            textAlign: 'right',
            alignItems: 'right',
            width: '80%',
            color: 'text.primary',
            '& svg': {
              m: 1.5,
            },
            '& hr': {
              mx: 0.5,
            },
          }}
        >
            <CustomLink title={register.title} content={register.content}/>
            <Divider orientation="vertical" flexItem />
            <CustomLink title={findidpw.title} content={findidpw.content}/>
        </Box>
    )
}


export default UtilButton;
