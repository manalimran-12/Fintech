import RootLayout from '@/app/layout';
import Header from "@/components/Header";
import Services from "@/components/Services";
import AboutUs from '@/components/AboutUs';
import { BlogSection } from "@/components/BlogSection";
// import {Investment} from "@/components/Investment";
// import {Products} from "@/components/Products";
import { Box } from '@mui/material';

export default function Home() {
  return (
    <RootLayout>
      <Box sx={{ width: '100%', height: '280vh', position: 'absolute' }}>
        <Header />
        <AboutUs />
        {/*<Products/>*/}
        <Services />
        {/* <Investment/> */}
        <BlogSection />
      </Box>
    </RootLayout>
  );
};