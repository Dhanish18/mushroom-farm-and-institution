import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutFarm from './components/AboutFarm';
import MushroomCollection from './components/MushroomCollection';
import GrowingProcess from './components/GrowingProcess';
import FarmExperience from './components/FarmExperience';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductDetailsModal from './components/ProductDetailsModal';
import VideoModal from './components/VideoModal';
import GuideModal from './components/GuideModal';
import ProfileModal from './components/ProfileModal';
import Toast from './components/Toast';
import { MUSHROOMS } from './data/mushrooms';

export default function App() {
  // Start with 3 items in cart matching the Stitch mock UI
  const [cartItems, setCartItems] = useState([
    { ...MUSHROOMS[0], quantity: 1 },
    { ...MUSHROOMS[2], quantity: 1 },
    { ...MUSHROOMS[5], quantity: 1 },
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedMushroom, setSelectedMushroom] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  const handleAddToCart = (mushroom, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === mushroom.id);
      if (existing) {
        return prev.map((i) =>
          i.id === mushroom.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...mushroom, quantity }];
    });
    showToast(`Added ${quantity}kg of ${mushroom.name} to your basket`);
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id) => {
    const item = cartItems.find((i) => i.id === id);
    setCartItems((prev) => prev.filter((i) => i.id !== id));
    if (item) {
      showToast(`Removed ${item.name} from basket`);
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0c120d] font-sans antialiased text-[#f2ecd9]">
      {/* Fixed Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenProfile={() => setIsProfileModalOpen(true)}
      />

      {/* Main Page Flow Matching Stitch Design */}
      <main className="w-full bg-[#0c120d]">
        <div className="flex flex-col w-full">
          {/* 1. Hero Section with Live Three.js Sprouting Mushroom 3D Experience */}
          <Hero onOpenVideo={() => setIsVideoModalOpen(true)} />

          {/* 2. About Our Farm & Bio-Stewardship */}
          <AboutFarm />

          {/* 3. Mushroom Collection with Category Filter */}
          <MushroomCollection
            onSelectMushroom={(m) => setSelectedMushroom(m)}
            onAddToCart={(m) => handleAddToCart(m, 1)}
            cartItems={cartItems}
          />

          {/* 4. The Growing Process with Real-Time Telemetry Vault */}
          <GrowingProcess />

          {/* 5. Bio-Architectural Chamber Experience */}
          <FarmExperience />

          {/* 6. The Udhayan Distinction / Why Choose Us */}
          <WhyChooseUs />

          {/* 7. Verified Testimonials */}
          <Testimonials />

          {/* 8. Final Immersive CTA */}
          <CTASection onOpenGuide={() => setIsGuideModalOpen(true)} />
        </div>
      </main>

      {/* Footer & Dispatch Newsletter */}
      <Footer 
        onCategoryClick={(name) => {
          const matched = MUSHROOMS.find((m) => m.name.toLowerCase().includes(name.toLowerCase()));
          if (matched) setSelectedMushroom(matched);
        }}
        onOpenContact={() => setIsGuideModalOpen(true)}
      />

      {/* Interactive Modals and Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <ProductDetailsModal
        mushroom={selectedMushroom}
        onClose={() => setSelectedMushroom(null)}
        onAddToCart={handleAddToCart}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

      <GuideModal
        isOpen={isGuideModalOpen}
        onClose={() => setIsGuideModalOpen(false)}
      />

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
      />

      {/* Notification Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
}
