import { TableBody, TableContainer, TableRow, Table, TableCell, TableHead } from "@mui/material"
import { tableInfoInterface } from "../model/viewInterface";



const TableStructure = ({dataArray, instructions, headers, divider}: tableInfoInterface) => {

    return (
      <TableContainer>
     <Table>
          {headers && 
            <TableHead>
              <TableRow
                style={{"whiteSpace": "nowrap"}}
              >
                {headers.map((header, idx) => {
                  return <TableCell key={idx+1} align={header.pos}>{header.col}</TableCell>
                })}
              </TableRow>
            </TableHead>
          }
          <TableBody>
            {dataArray.map((data, idx) => (
              <TableRow
                key={idx+1}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                  '& > td, & > th': { p: 1, borderColor: (!divider) ? "transparent" : "gray"}
                }}
                style={{"whiteSpace": "nowrap"}}
              >
                {instructions.map((instruction, idx) => {
                    return (idx === 0)
                    ? <TableCell key={idx+1} component="th" scope="row"> {data[instruction.col]} </TableCell>
                    : <TableCell key={idx+1} align={instruction.pos}>    {data[instruction.col]} </TableCell>
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default TableStructure;
