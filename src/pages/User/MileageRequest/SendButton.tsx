import React, { useContext, Fragment, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Snackbar } from '@mui/material';
import MileageRequestContext from '../../../contexts/MileageRequest';
import { FitButton } from '../../../components';
import { defaultAlart, alertInterface, scriptInterface } from '../../../model/viewInterface';
import { TransitionProps } from '@mui/material/transitions';




const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const SendButton = () => {

    const MileageRequest = useContext(MileageRequestContext);
    const { isMileageReqError, mileageReq, checkExcess} = {...MileageRequest.state, ...MileageRequest.actions}

    const [snackState, setSnackState] = useState<alertInterface>(defaultAlart());
    const [modalState, setModalState] = useState<alertInterface>(defaultAlart())

    const handleSnackOpen = (message: string) => {
        setSnackState({
            message: message,
            open: true
        });

        if (!snackState.open) {
            setTimeout(() => setSnackState({
            message: message,
                open: true,
            }), 200)
        }
    }

    const handleSnackClose = () => {
        setSnackState({
            ...snackState,
            open: false
        })
    }

    const handleModalOpen = () => {
        setModalState({
            ...modalState,
            open: true
        });
    }

    const handleModalClose = () => {
        setModalState({
            ...modalState,
            open: false
        })
    }

    const handleButtonClick = () => {
        if (isMileageReqError) handleSnackOpen("보유 마일리지를 초과할 수 없습니다.");
        else if (mileageReq.length === 0) handleSnackOpen("마일리지를 입력해주세요.");
        else if (!checkExcess(mileageReq, 10)) handleSnackOpen("일정 이상의 마일리지가 필요합니다.");
        else handleModalOpen();
    }

    const message: scriptInterface = {
        title: "전환 안내",
        content: mileageReq + " 마일리지를 전환하시겠습니까?"
    }



    return (
        <Fragment>
          <FitButton
            onClick={handleButtonClick}
            style={{position: "fixed", bottom: "56px", width: "100%"}}
          >
            마일리지 전환
          </FitButton>
          <Snackbar
            style={{marginTop: 56}}
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      
            open={snackState.open}
            onClose={handleSnackClose}
            autoHideDuration={3000}
            message={snackState.message}
          />
          <Dialog
            open={modalState.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleModalClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{message.title}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                {message.content}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleModalClose}>Disagree</Button>
              <Button onClick={handleModalClose}>Agree</Button>
            </DialogActions>
          </Dialog>
        </Fragment>
    )
}


export default SendButton;