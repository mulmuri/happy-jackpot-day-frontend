import { Divider, Typography } from "@mui/material";
import { titleInterface } from "../model/viewInterface";




const DividerItem = ({title}: titleInterface) => {
    return (
        <Divider sx={{
            "&::before, &::after": {
                borderColor: "text.secondary",
            },
        }} textAlign="left">
          <Typography color="text.secondary">{title}</Typography>
        </Divider>
    )
}



export default DividerItem;