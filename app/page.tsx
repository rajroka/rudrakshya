import Banner from '@/components/Banner';
import TrustSeals from '@/components/TrustSeals';
import CategoryQuickLinks from '@/components/CategoryQuickLinks';

export default function HomePage() {
  return (
    <>
      <Banner />
      <TrustSeals />
      <CategoryQuickLinks />
      
      {/* Other sections like Featured Products, Testimonials, etc. will go here */}
    </>
  );
}