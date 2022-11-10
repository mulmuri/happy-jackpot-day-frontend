import { Typography } from '@mui/material';
import { scriptInterface } from '../model/viewInterface';
import BoxItem from './BoxItem';
import Wrapper from './Wrapper';



const PageTitleItem = (props: scriptInterface) => {
    return (
        <BoxItem>
          <Wrapper top="50px" bottom="20px">
            <Typography color="text.secondary" variant="h4" textAlign="center">
                {props.title}
            </Typography>                
          </Wrapper>
        </BoxItem>
    )
}

export default PageTitleItem;