import { useState } from "react";
import Hero from "../../components/Hero";
import HowToUse from "../../components/HowToUse";

const HomePage = ({ openModal,closeModal, setIsModalOpen, isModalOpen }) => {

  return (
    <main>
      <Hero openModal={openModal} />
      {isModalOpen && <HowToUse closeModal={closeModal} />}
    </main>
  );
};

export default HomePage;