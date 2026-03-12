import { useState, useEffect } from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingPanel from './components/BookingPanel';
import BookingConfirmation from './components/BookingConfirmation';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isBookingPanelOpen, setIsBookingPanelOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      '.hero-content',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  useEffect(() => {
    if (isBookingPanelOpen) {
      gsap.fromTo(
        '.booking-panel',
        { x: '100%' },
        { x: 0, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [isBookingPanelOpen]);

  useEffect(() => {
    if (isConfirmationOpen) {
      gsap.fromTo(
        '.confirmation-modal',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' }
      );
    }
  }, [isConfirmationOpen]);

  const handleBookRide = () => {
    setIsBookingPanelOpen(true);
  };

  const handleCloseBookingPanel = () => {
    setIsBookingPanelOpen(false);
  };

  const handleConfirmBooking = (bookingData) => {
    setCurrentBooking(bookingData);
    setIsConfirmationOpen(true);
  };

  const handleCloseConfirmation = () => {
    setIsConfirmationOpen(false);
    setCurrentBooking(null);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero onBookRide={handleBookRide} />
      <About />
      <Contact />
      <Footer />

      <BookingPanel
        isOpen={isBookingPanelOpen}
        onClose={handleCloseBookingPanel}
        onConfirmBooking={handleConfirmBooking}
      />

      <BookingConfirmation
        isOpen={isConfirmationOpen}
        booking={currentBooking}
        onClose={handleCloseConfirmation}
      />
    </div>
  );
}

export default App;
