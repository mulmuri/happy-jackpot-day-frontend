import { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Grid, Paper } from "@mui/material"
import MileageContext from '../../../contexts/MileageRequest';







const TestGrid = () => {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: 0,
        paddingTop: "10%",
        paddingBottom: "10%"
      }));

      const vals = ['1','2','3','4','5','6','7','8','9',"00",'0','<-'];

    const { handlePanelClick } = useContext(MileageContext).actions;

    return (
        <Box sx={{ flexGrow: 1, width: "100%", maxWidth: '600px'}}
        style={{position: 'fixed', bottom: '100px'}}
        >
            <Grid container spacing={0}>
                {vals.map((val, idx) => (
                <Grid key={idx} item xs={4}>
                    <Item onClick={() => {
                        handlePanelClick(val)
                    }}>{val}</Item>
                </Grid>
                ))}
            </Grid>
        </Box>
    )
}


const Panel = () => {
    return (
        <TestGrid/>
    )
}


export default Panel;