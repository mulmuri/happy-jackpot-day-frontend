import { PageItem } from "../../../components"
import { Accordion, AccordionDetails, AccordionSummary, Typography, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CampaignIcon from '@mui/icons-material/Campaign';
import React, { useState, useEffect } from "react";
import Aos from "aos";
import { aosInterface, scriptInterface } from '../../../model/viewInterface';



const letter: scriptInterface = {
    title: "공지가 없습니다.",
    content: `공지가 없습니다.`
}



const AnnouncementCard = (props: aosInterface) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <PageItem data-aos={props.animation} data-aos-duration={props.duration}>
      <Accordion elevation={0} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <IconButton  sx={{ p: 0, color: 'info.main' }}>
            <CampaignIcon/>
          </IconButton>

          <Typography sx={{ color: 'text.secondary', paddingLeft: 5 }}> {letter.title} </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography whiteSpace="pre-wrap">
            {letter.content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </PageItem>
  )

}

export default AnnouncementCard;