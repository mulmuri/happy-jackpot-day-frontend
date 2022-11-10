import { PageFrame } from "../../../components"
import { styled } from '@mui/material/styles';
import { AccountSection, MainInfoSection, RecommenderSection } from "./Table";
import LogoSection from "../../../components/LogoSection";
import MemberContext, { MemberProvider } from "../../../contexts/Member";
import { useContext, useEffect } from "react";





const Root = styled('div')(({ theme }) => ({
    width: '95%',
    //...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(3),
    },
}));


const Profile = () => {


    return (
        <MemberProvider>
            <ProfileProps/>
        </MemberProvider>
    )
}


const ProfileProps = () => {
    const Profile = useContext(MemberContext);
    const { fetchProfile } = Profile.actions;

    useEffect(() => {
        fetchProfile()
    }, [])

    return (
      <PageFrame>
        <LogoSection logo="Profile" color="info.main"/>
        <Root>
          <MainInfoSection/>
          <AccountSection/>
          <RecommenderSection/>
        </Root>
      </PageFrame>
    )
}

export default Profile;