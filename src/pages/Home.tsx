import { Box, Typography } from '@mui/material';
import { CustomButton } from '../components/CustomButton';

function Home() {
  return (
    <Box>
      <Typography>Przedałnów - TIMES</Typography>
      <CustomButton id={2} value="dupa" />
    </Box>
  );
}

export default Home;
