import { Button } from "@mui/material";
import { Fragment } from "react";
import { PageFrame, PageTitleItem } from "../../../components";
import { MileageManagerProvider } from "../../../contexts/MileageManager";

//import ImageIcon from '@mui/icons-material/Image';
//import { Spreadsheet } from "react-spreadsheet";

const Main = () => {


    return (
        <PageFrame>
          <MileageManagerProvider>
            <PageTitleItem title="마일리지 업데이트"/>
          </MileageManagerProvider>
        </PageFrame>
    )
}

export default Main;