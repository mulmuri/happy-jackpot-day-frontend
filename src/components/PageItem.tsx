import { Paper } from "@mui/material";
import styled from "styled-components";



const PageItem = styled(Paper)`
    width: 95%;
`

PageItem.defaultProps = {
    elevation : 3
}

export default PageItem
