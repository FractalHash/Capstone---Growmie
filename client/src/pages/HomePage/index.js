import { useState } from "react";
import Hero from "../../components/Hero";
import HowToUse from "../../components/HowToUse";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <Hero openModal={openModal} />
      {isModalOpen && <HowToUse closeModal={closeModal} />}
    </main>
  );
};

export default HomePage;