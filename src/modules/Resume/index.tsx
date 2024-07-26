import { Button, Stack } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  return (
    <Stack
      flexDirection={'column'}
      alignItems={'center'}
      height='100vh'
      overflow="auto"
      mt={10}
      gap={3}
    >
      <Document file={require('../../Assets/Pdf/prasanthResume.pdf')} >
        <Page pageNumber={1} scale={0.6} />
      </Document>

      <Button  color='success' variant='contained' target='_blank' href={require('../../Assets/Pdf/prasanthResume.pdf')}>
        <DownloadForOfflineIcon /> &nbsp;
        Download Resume
      </Button>
    </Stack>
  );
};

export default Resume;
