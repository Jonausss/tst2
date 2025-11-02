import React, { useState } from 'react';

function SlideElement({ title, description, date, imageUrl }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Card Principal */}
      <div 
        className="bg-white bg-opacity-90 rounded-2xl shadow-2xl p-8 mx-auto flex flex-col items-center 
                    w-full max-w-lg md:max-w-xl transition-transform duration-500 border-4 border-pink-300 min-h-[70vh]">
        
        {/* Imagem - Agora com evento onClick */}
        <div 
          className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden mb-6 relative shadow-lg cursor-pointer transform hover:scale-[1.02] transition-transform duration-300"
          onClick={openModal} // Adiciona o evento de clique aqui
        >
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover" 
            style={{ filter: 'brightness(0.95)' }} 
          />
          
          {/* Data Flutuante no canto */}
          <span className="absolute top-4 right-4 bg-purple-600 text-white text-md font-bold px-4 py-2 rounded-full shadow-lg">
            {date}
          </span>
        </div>

        {/* Título do Momento */}
        <h3 className="text-4xl font-extrabold text-purple-900 text-center mb-3">
          {title}
        </h3>

        {/* Descrição - Texto maior e com margem */}
        <p className="text-xl text-gray-700 text-center italic mt-4 max-w-md">
          "{description}"
        </p>
        
      </div>

      {/* Modal de Tela Cheia (Condicionalmente Renderizado) */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75"
          onClick={closeModal} // Fecha o modal ao clicar fora da imagem
        >
          <div className="relative max-w-full max-h-full flex items-center justify-center">
            {/* Imagem dentro do modal */}
            <img 
              src={imageUrl} 
              alt={title} 
              className="max-w-full max-h-screen object-contain rounded-lg shadow-2xl" 
              onClick={(e) => e.stopPropagation()} // Impede que o clique na imagem feche o modal
            />
            {/* Botão de fechar */}
            <button 
              className="fixed top-4 right-4 text-white text-4xl font-bold bg-gray-800 bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center transform transition hover:scale-110"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SlideElement;