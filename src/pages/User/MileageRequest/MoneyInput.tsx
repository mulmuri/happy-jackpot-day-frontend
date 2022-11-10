import { useContext } from 'react';
import { FormControl, Input, InputAdornment, FormHelperText } from "@mui/material";
import addComma from '../../../util/addComma';
import MileageRequestContext from '../../../contexts/MileageRequest';
import MileageContext from '../../../contexts/Mileage';



const MoneyInput = () => {

    const { mileage } = useContext(MileageContext).state;
    const { isMileageReqError, mileageReq } = useContext(MileageRequestContext).state;

    return (
      <FormControl variant="standard" error={isMileageReqError} sx={{ m: 1, mt: 3, width: '25ch' }}>
        <Input
          value={addComma(mileageReq)}
          endAdornment={<InputAdornment position="end">원</InputAdornment>}
        />
        <FormHelperText>현재 금액: {addComma(mileage.amount)}원</FormHelperText>
      </FormControl>
    )
}

export default MoneyInput;