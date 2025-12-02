import { useState } from 'react'

import PodcastPlayer from '../../components/Sites/CafeteriaEntrePatas/PodcastPlayer'

import FachadaBG from '../../images/sites/CafeteriaEntrePatas/fachadaBG.jpg'
import InternoBG from '../../images/sites/CafeteriaEntrePatas/internoBG.jpg'
import MenuBG from '../../images/sites/CafeteriaEntrePatas/modeloCardapio2.png'
import LeftArrow from '../../images/sites/CafeteriaEntrePatas/leftArrow.png'
import MenuIcon from '../../images/sites/CafeteriaEntrePatas/menu.png'

import AudioAffogato from '../../audios/CafeteriaEntreGatos/affogato.mp3'
import AudioLimonada from '../../audios/CafeteriaEntreGatos/limonada.mp3'

import DoorbellSFX from '../../audios/CafeteriaEntreGatos/doorbellSFX.mp3'

const ArrowLeft = () => <span className="text-3xl">&lt;</span>
const ArrowRight = () => <span className="text-3xl">&gt;</span>
const episodes = [
   { id: 1, title: "AFFOGATO", src: AudioAffogato },
   { id: 2, title: "LIMONADA DE LAVANDA", src: AudioLimonada }
]

const CafeteriaEntrePatas = () => {
   const [isInShop, setIsInShop] = useState(false)
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const [currentTrack, setCurrentTrack] = useState(null)
   const [mobileMenuPage, setMobileMenuPage] = useState(0)

   const enterShop = () => {
      const sfx = new Audio(DoorbellSFX)
      sfx.volume = 0.3
      sfx.play().catch(e => console.log("Erro ao tocar SFX:", e))
      setIsInShop(true)
   }
   const exitShop = (e) => {
      e.stopPropagation()
      setIsInShop(false)
      setIsMenuOpen(false)
   }
   const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
   const playEpisode = (episode) => {
      if (episode.src) {
         setCurrentTrack(episode)
      }
      else {
         alert('Esse episódio ainda não foi lançado.')
      }
      setIsMenuOpen(false)
   }

   const flipPage = (e, direction) => {
      e.stopPropagation()
      if (direction === 'next') setMobileMenuPage(1)
      if (direction === 'prev') setMobileMenuPage(0)
   }

   return (
      <div className="font-['VT323', monospace]">
         {/*Background*/}
         <div className='relative w-full h-screen overflow-hidden select-none'>
            {!isInShop ? (
               <img
                  src={FachadaBG}
                  alt="Fachada"
                  onClick={enterShop}
                  className='absolute object-cover h-full w-full'
               />
            ) : (
               <img
                  src={InternoBG}
                  alt="Interno"
                  className='absolute object-cover object-bottom-left h-full w-full'
               />
            )}
         </div>

         {/*HUD*/}
         {!isInShop && (
            <div
               onClick={enterShop}
               className="absolute inset-0 z-10 flex flex-col justify-between cursor-pointer bg-black/20 hover:bg-transparent transition-colors"
            >
               <a href="/feed" className="w-20 m-8 hover:scale-110 transition-transform">
                  <img src={LeftArrow} alt="Voltar" />
               </a>
               <h2 className="text-white text-center pb-8 text-xl drop-shadow-md animate-pulse">
                  Clique em qualquer lugar para entrar
               </h2>
            </div>
         )}

         {isInShop && !isMenuOpen && (
            <div className='absolute inset-0 z-20 pointer-events-none'>
               <button
                  onClick={exitShop}
                  className='pointer-events-auto absolute top-4 left-4 w-20 transition-all hover:scale-105 cursor-pointer'
               >
                  <img src={LeftArrow} alt="" />
               </button>
               <button
                  onClick={toggleMenu}
                  className='pointer-events-auto absolute top-4 right-4 w-15 transition-all hover:scale-105 cursor-pointer'
               >
                  <img src={MenuIcon} alt="" />
               </button>
            </div>
         )}

         {isInShop && currentTrack && (
            <PodcastPlayer
               track={currentTrack}
               onClose={() => setCurrentTrack(null)}
            />
         )}

         {/*CARDÁPIO*/}
         {isMenuOpen && (
            <div
               onClick={toggleMenu}
               style={{ containerType: 'inline-size' }}
               className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm'
            >
               <div
                  onClick={(e) => e.stopPropagation()}
                  className='relative w-full sm:max-w-4xl h-full sm:h-170 sm:aspect-3/4'
               >
                  <div className={`w-[200%] sm:w-full h-full relative transition-transform duration-500 ease-in-out
                     ${mobileMenuPage === 1 ? '-translate-x-1/2 md:translate-x-0' : 'translate-x-0'}`}>
                     <img
                        src={MenuBG}
                        alt="Cardápio"
                        className='w-full h-full object-contain drop-shadow-2xl [image-rendering:pixelated]'
                     />
                     <div className='absolute top-[calc(330px-60vw)] sm:top-[11%] bottom-[8%] left-[7%] sm:left-[15%] right-[5%] sm:right-[12%] grid grid-cols-2 gap-x-[10%]'>
                        {[...Array(6)].map((_, index) => {
                           const episode = episodes[index]
                           const isPlayingThis = currentTrack?.id === episode?.id

                           return (
                              <div
                                 key={index}
                                 className='relative flex items-center group'
                              >
                                 {episode ? (
                                    <button
                                       onClick={() => playEpisode(episode)}
                                       className={`h-full w-full flex items-center text-left text-black hover:text-white transition-colors
                                       ${isPlayingThis ? 'text-green-400' : 'text-[#f4e4ba]'}
                                       ${episode.id % 2 == 0 ? '-rotate-4' : 'rotate-4'}`}
                                    >

                                       <span className='text-[12vw] sm:text-5xl mr-3 opacity-80 
                                       group-hover:opacity-100 group-hover:scale-110 transition-transform"'>
                                          {isPlayingThis ? '?' : '?'}
                                       </span>
                                       <div className="flex flex-col">
                                          <span className="text-[calc(9vw)] sm:text-sm uppercase tracking-widest opacity-70">
                                             Episódio {episode.id}
                                          </span>
                                          <span className="text-[10vw] sm:text-3xl font-bold leading-none drop-shadow-md">
                                             {episode.title}
                                          </span>
                                       </div>
                                    </button>
                                 ) : (
                                    <div className="w-full h-full flex items-center justify-center opacity-80 select-none z-100">
                                       <span className="text-4xl text-[#1d1410]"></span>
                                    </div>
                                 )}
                              </div>
                           )
                        })}
                     </div>
                  </div>
               </div>
               <div className="absolute bottom-4 w-full h-8 flex justify-between px-8 md:hidden">
                  <button
                     onClick={(e) => flipPage(e, 'prev')}
                     disabled={mobileMenuPage === 0}
                     className={`bg-[#5c4033] text-[#f4e4ba] flex justify-center items-center px-1 rounded-full border-2 border-[#3e2b22] 
                     ${mobileMenuPage === 0 ? 'opacity-0 pointer-events-none hidden' : 'opacity-100'}`}
                  >
                     <ArrowLeft />
                  </button>

                  <span className="text-[#f4e4ba] bg-black/40 px-3 rounded py-1">
                     Página {mobileMenuPage + 1}
                  </span>

                  <button
                     onClick={(e) => flipPage(e, 'next')}
                     disabled={mobileMenuPage === 1}
                     className={`bg-[#5c4033] text-[#f4e4ba] flex justify-center items-center px-1 rounded-full border-2 border-[#3e2b22] 
                     ${mobileMenuPage === 1 ? 'opacity-0 pointer-events-none hidden' : 'opacity-100'}`}
                  >
                     <ArrowRight />
                  </button>
               </div>
               <button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 text-white w-10 h-10 border rounded-full font-bold transition cursor-pointer hover:scale-110"
               >
                  X
               </button>
            </div>
         )}
      </div>
   )
}

export default CafeteriaEntrePatas