import RootLayout from '@/app/layout';
import Header from '@/components/Header'
import Products from '@/components/Products';
import { BlogSection } from '@/components/BlogSection';

export default function Home() {
  return (
    <RootLayout>
      <Products/>
    </RootLayout>
  );
}

