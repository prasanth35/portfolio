
import { Box, Typography } from '@mui/material';

const AboutMe = ({ label, description }:any) => (
  <Box component="section" sx={{ py: 4 }} id="profile">
    <Typography variant="h5" component="h5" gutterBottom>
      {label}
    </Typography>
    <Typography variant="body1">
      {description}
    </Typography>
  </Box>
);

export default AboutMe;
