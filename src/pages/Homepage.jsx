import Homepage from '../components/Homepage';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import Chicago from '../components/Chicago';
import CallToAction from '../components/CallToAction';

export default function HomePage() {
  return (
    <main>
      <Homepage />
      <Specials />
      <Testimonials />
      <Chicago />
      <CallToAction />
    </main>
  );
}
