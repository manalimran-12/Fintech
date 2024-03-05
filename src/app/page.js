import RootLayout from '@/app/layout';
import { BlogSection } from '@/components/BlogSection';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import {H1,text} from '../styling';
import { NewsLetter } from '@/components/NewsLetter';
export default function Home() {
  const styles = {
    height: '100%',
    overflowY: 'auto',
  };
  const sub1 = H1();
  return (
    <RootLayout style={styles}>
      
      <BlogSection/>
      
    </RootLayout>
  );
}

