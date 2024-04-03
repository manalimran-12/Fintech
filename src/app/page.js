import RootLayout from '@/app/layout';
import Header from "@/components/Header";
import Services from "@/components/Services";
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';
import { BlogSection } from "@/components/BlogSection";
import Investment from "@/components/Investment";
import Products from "@/components/Products";
import { Box } from '@mui/material';

export default function Home() {
  return (
    <RootLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Header />
        <AboutUs />
        <Contact/>
        <Products/>
        <Services />
        <Investment/> 
        <BlogSection />
      </Box>
    </RootLayout>
  );
};