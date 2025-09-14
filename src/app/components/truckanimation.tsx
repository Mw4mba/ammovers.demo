'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './TruckAnimation.module.css';

interface TruckAnimationProps {
  truckImage: string;
  animationDuration?: number;
  autoStart?: boolean;
  loop?: boolean;
  onAnimationComplete?: () => void;
}

const TruckAnimation = ({
  truckImage,
  animationDuration = 3000,
  autoStart = true,
  loop = false,
  onAnimationComplete
}: TruckAnimationProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const truckRef = useRef<HTMLDivElement>(null);

  const startAnimation = () => {
    if (!hasAnimated || loop) {
      setIsAnimating(true);
      setHasAnimated(true);
      
      // Reset position before animation
      if (truckRef.current) {
        truckRef.current.style.transform = 'translateX(-120%)';
      }
      
      // Trigger animation after a brief delay to ensure reset
      setTimeout(() => {
        if (truckRef.current) {
          truckRef.current.style.transform = 'translateX(0)';
        }
      }, 50);

      // Complete animation
      setTimeout(() => {
        setIsAnimating(false);
        if (onAnimationComplete) {
          onAnimationComplete();
        }
        
        // If looping, restart animation
        if (loop) {
          setTimeout(() => {
            startAnimation();
          }, 1000);
        }
      }, animationDuration);
    }
  };

  useEffect(() => {
    if (autoStart && !hasAnimated) {
      // Small delay to ensure component is mounted
      const timer = setTimeout(() => {
        startAnimation();
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [autoStart, hasAnimated]);

  // Intersection Observer for scroll-triggered animation
  useEffect(() => {
    if (!autoStart) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              startAnimation();
            }
          });
        },
        { threshold: 0.5 }
      );

      if (truckRef.current) {
        observer.observe(truckRef.current);
      }

      return () => {
        if (truckRef.current) {
          observer.unobserve(truckRef.current);
        }
      };
    }
  }, [autoStart, hasAnimated]);

  return (
    <div className={styles.animationContainer}>
      <div className={styles.road}>
        {/* Road markings */}
        <div className={styles.roadMarkings}>
          <div className={styles.marking}></div>
          <div className={styles.marking}></div>
          <div className={styles.marking}></div>
          <div className={styles.marking}></div>
          <div className={styles.marking}></div>
        </div>
        
        {/* Truck */}
        <div 
          ref={truckRef}
          className={`${styles.truck} ${isAnimating ? styles.animating : ''}`}
          style={{
            transition: `transform ${animationDuration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
            transform: 'translateX(-120%)'
          }}
        >
          <Image
            src={truckImage}
            alt="Logistics Truck"
            width={400}
            height={200}
            className={styles.truckImage}
            priority
          />
          
          {/* Exhaust smoke animation */}
          <div className={styles.exhaust}>
            <div className={styles.smoke}></div>
            <div className={styles.smoke}></div>
            <div className={styles.smoke}></div>
          </div>
        </div>
      </div>
      
      {/* Control buttons for demo */}
      <div className={styles.controls}>
        <button 
          onClick={startAnimation} 
          className={styles.startButton}
          disabled={isAnimating}
        >
          {isAnimating ? 'Animating...' : hasAnimated ? 'Animate Again' : 'Start Animation'}
        </button>
      </div>
    </div>
  );
};

export default TruckAnimation;