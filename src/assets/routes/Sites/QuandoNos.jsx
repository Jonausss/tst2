import React from 'react';
import SlideElement from '../../components/Sites/QuandoNos/SlideElements';
import { momentsData } from '../../data/Sites/QuandoNos/momentsData';

console.log(momentsData)

const QuandoNos = () => {
   return (
      <div className="min-h-screen py-8 bg-gradient-to-br from-purple-300 to-pink-400">

         {/* Título da Página */}
         <h1 className="mx-4 text-5xl font-extrabold text-white text-center pt-10 pb-4 drop-shadow-lg"> Quando Nós... </h1>
         <p className="mx-4 text-xl text-purple-100 text-center italic"> Relembrando alguns momentos do casal mais lindo desse mundo :) </p>
         
         <div className="flex overflow-x-scroll snap-x hide-scrollbar">
            {momentsData.map((moment) => (
               <div
                  key={moment.id}
                  className="flex-shrink-0 w-full snap-center p-4"
                  style={{ minWidth: '100%' }} // Garante que a largura mínima é 100%
               >
                  <SlideElement
                     title={moment.title}
                     description={moment.description}
                     date={moment.date}
                     imageUrl={moment.imageUrl}
                  />
               </div>
            ))}
         </div>

         <p className="text-center text-purple-100"> Arraste para o lado para ver o próximo, clique na imagem para tela cheia</p>
      </div>
   )
}

export default QuandoNos