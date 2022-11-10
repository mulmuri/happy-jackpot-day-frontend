import styled from "styled-components";
import { wrapperInterface } from "../model/viewInterface";



const WhiteSpace = styled.div<wrapperInterface>`
    width: 100%;
    height: ${props => props.height}
`;

export default WhiteSpace;