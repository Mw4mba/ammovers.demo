// pages/index.js or app/page.js (depending on your Next.js version)
'use client'
import Image from 'next/image';
import TruckAnimation from '../components/truckanimation';
//import truckImage from '../../public/images/truck.png';
const truckImage = "/truck.png";

function trucykImage() {
  return (
    <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
  )
}
export default function HomePage() {
  const handleAnimationComplete = () => {
    console.log('Truck animation completed!');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#082463' }}>
        LogiFlow - Global Logistics
      </h1>
      
      {/* Basic usage - auto-start animation */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#082463', marginBottom: '1rem' }}>Auto-Start Animation</h2>
        <TruckAnimation 
          truckImage={truckImage}
          animationDuration={3000}
          autoStart={true}
          onAnimationComplete={handleAnimationComplete}
        />
      </section>
      
      {/* Scroll-triggered animation */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#082463', marginBottom: '1rem' }}>Scroll-Triggered Animation</h2>
        <div style={{ height: '100vh', background: '#f8fafc', padding: '2rem' }}>
          <p style={{ textAlign: 'center', color: '#64748b' }}>
            Scroll down to see the truck animation trigger when it comes into view!
          </p>
        </div>
        <TruckAnimation 
          truckImage={truckImage}
          animationDuration={2500}
          autoStart={false}
          onAnimationComplete={handleAnimationComplete}
        />
      </section>
      
      {/* Looping animation */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#082463', marginBottom: '1rem' }}>Looping Animation</h2>
        <TruckAnimation 
          truckImage={truckImage}
          animationDuration={2000}
          autoStart={true}
          loop={true}
        />
      </section>
    </div>
  );
}

// Alternative usage in a component
export function HeroSection() {
  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #082463 0%, #0f3a7a 100%)', 
      color: 'white', 
      padding: '4rem 0' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '4rem', 
          alignItems: 'center' 
        }}>
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
              Fast & Reliable Logistics
            </h1>
            <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
              Your cargo delivered safely and on time, anywhere in the world.
            </p>
          </div>
          <div>
            <TruckAnimation 
              truckImage={truckImage}
              animationDuration={3000}
              autoStart={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}