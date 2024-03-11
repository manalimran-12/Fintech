import RootLayout from '@/app/layout';
import { BlogSection } from '@/components/BlogSection';
import Box from '@mui/material/Box';
import Foo from '@/components/Foo'
import Typography from '@mui/material/Typography'
import { NewsLetter } from '@/components/NewsLetter';
import {H1,text} from '../styling';
export default function Home() {
  const styles = {
    height: '100%',
    overflowY: 'auto',
    overflowX: 'auto',
    position: 'absolute',
  };
  return (
    <RootLayout style={styles}>
      
      <BlogSection/>
    </RootLayout>
  );
}

