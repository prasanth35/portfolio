import useTypewriter from '../../Common/Components/UseTypeWritter';
import { Box, Grid, Stack, Typography } from '@mui/material';
import Lottie from 'lottie-react';
import DeveloperJson from '../../Assets/Lottie/developer.json';
import { Constants } from '../../Lib/Constants';



const Home = () => {
    const text = useTypewriter({
        words: Constants.DOMAINS,
        speed: 100,
    });

    return (
            <Box height="100vh" overflow="auto">
                <Box height="100%" display="flex" alignItems="center" justifyContent="center">
                    <Grid container mt={8} maxWidth="md">
                        <Grid item xs={12} sm={6}>
                            <Stack direction={'column'} padding={2}>
                                <Typography mt={10} variant='h4' color={'white'} fontWeight={700} letterSpacing={1}>Hi There!</Typography>
                                <Typography variant='h4' color={'white'} fontWeight={700} letterSpacing={1}>I'M <span className='text-violet-500'>{Constants.NAME}</span></Typography>
                                <Typography variant='h4' color={'white'} fontWeight={700} letterSpacing={1}>{text}</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Lottie animationData={DeveloperJson} loop />
                        </Grid>
                    </Grid>
                </Box>
                {/* <Box height="100%" display="flex" alignItems="center" justifyContent="center">
                    <Grid container mt={8} maxWidth="md">
                        <Grid item xs={12} sm={6}>
                            <Stack direction={'column'} padding={2}>
                                <Typography mt={10} variant='h4' color={'white'} fontWeight={700} letterSpacing={1}>Hi There!</Typography>
                                <Typography variant='h4' color={'white'} fontWeight={700} letterSpacing={1}>I'M <span className='text-violet-500'>{Constants.NAME}</span></Typography>
                                <Typography variant='h4' color={'white'} fontWeight={700} letterSpacing={1}>{text}</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Lottie animationData={DeveloperJson} loop />
                        </Grid>
                    </Grid>
                </Box> */}
            </Box>
    )
}

export default Home;
