import { Typography } from "@mui/material";
import { scriptInterface } from "../model/viewInterface";
import BoxItem from "./BoxItem";
import WhiteSpace from "./WhiteSpace";



const MessageItem = ({title, content}: scriptInterface) => {
    return (
      <BoxItem>
        <Typography variant="h4" color="text.secondary" sx={{textAlign: "center"}}>
          {title}
        </Typography>
        <WhiteSpace height="10px"/>
        <Typography variant="h6" component="p" color="text.primary"
          sx={{ml: 2.7, textAlign: "center", whiteSpace: "pre-wrap"}}>
          {content}
        </Typography>
        <WhiteSpace height="20px"/>
      </BoxItem>
    )
}

export default MessageItem;