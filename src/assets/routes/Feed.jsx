import React from 'react'
import FeedCard from '../components/FeedCard';

const Feed = () => {
   const navButtonStyle = "bg-lilac text-black-purple text-xl m-4 px-3 py-1 border border-black-purple rounded-2xl hover:bg-light-lilac transition-colors text-center cursor-pointer block text-decoration-none";

   return (
      <div id="container" className="min-h-screen w-full bg-linear-to-r from-off-white to-lilac font-sans">

         <header className="w-full md:h-[10vh] mb-4 md:mb-0">
            <nav className="
          w-full 
          md:fixed md:h-[10vh] md:flex-row 
          flex flex-col justify-center items-center 
          z-50 bg-linear-to-r from-off-white/90 to-lilac/90 backdrop-blur-sm md:bg-transparent
        ">
               <a href="#news" className={navButtonStyle}>Novidades</a>
               <a href="#games" className={navButtonStyle}>Jogos</a>
               <a href="#sites" className={navButtonStyle}>Sites</a>
               <a href="#videos" className={navButtonStyle}>Videos</a>
            </nav>
         </header>

         {/* Seções */}
         <section id="news" className="min-h-screen flex flex-col items-center pt-20 bg-linear-to-b from-black/5 to-transparent">
            <h1 className="text-4xl mt-10 md:mt-20 p-4">Novidades</h1>
            <button className={`${navButtonStyle} m-0`}>Indecisão</button>

            <div className="flex flex-wrap items-center justify-center p-8 gap-4 mb-20 w-full">
               nenhum
            </div>
         </section>

         <section id="games" className="min-h-screen flex flex-col items-center bg-linear-to-b from-black/5 to-transparent">
            <h1 className="text-4xl mt-20 p-4 uppercase">Jogos</h1>
            <button className={`${navButtonStyle} m-0`}>Indecisão</button>

            <div className="flex flex-wrap items-center justify-center p-8 gap-4 mb-20 w-full">
               <FeedCard
                  image="/src/assets/img/thumb/CatLettersThumb.png"
                  title="Cat's Letters (PC)"
                  description="Um gato tentando chegar no seu amor panda (+cartas)"
                  link="../../games/Cat's Letters/pages/stage1.html"
                  buttonText="Jogar"
               />
               <FeedCard
                  image="/src/assets/img/thumb/ConsolationCatThumb.png"
                  title="Consolation cat"
                  description="Escolha como quer que o gatinho te console"
                  link="../../games/Consolation cat/pages/consolationCat.html"
                  buttonText="Jogar"
               />
            </div>
         </section>

         <section id="sites" className="min-h-screen flex flex-col items-center bg-linear-to-b from-black/5 to-transparent">
            <h1 className="text-4xl mt-20 p-4 uppercase">Sites</h1>
            <button className={`${navButtonStyle} m-0`}>Indecisão</button>

            <div className="flex flex-wrap items-center justify-center p-8 gap-4 mb-20 w-full">
               <FeedCard
                  image="/src/assets/img/thumb/LovePosts.png"
                  title="Love posts 💜"
                  description="Posts de amor como o Pinterest!"
                  link="/11"
                  buttonText="Entrar"
               />
               <FeedCard
                  image="/src/assets/img/thumb/CafeteriaEntrePatas.png"
                  title="Cafeteria Entre Patas"
                  description="Ainda em desenvolvimento"
                  link="/12"
                  buttonText="Entrar"
               />
            </div>
         </section>

         <section id="videos" className="min-h-screen flex flex-col items-center bg-linear-to-b from-black/5 to-transparent">
            <h1 className="text-4xl mt-20 p-4 uppercase">Videos</h1>
            <button className={`${navButtonStyle} m-0`}>Indecisão</button>

            <div className="flex flex-wrap items-center justify-center p-8 gap-4 mb-20 w-full">
               <FeedCard
                  image="/src/assets/img/thumb/💋Beijinho na sua boquinha para sarar o meu amor 😚.webp"
                  title="💋Beijinho na sua boquinha..."
                  description=""
                  link="https://youtube.com/shorts/1KgEL-Upg7w"
               />
               <FeedCard
                  image="/src/assets/img/thumb/emojiGatinhoComVoceThumb.webp"
                  title="*emoji gatinho com você*"
                  description=""
                  link="https://youtu.be/ZN2GVnnFKTE"
               />
               <FeedCard
                  image="/src/assets/img/thumb/😽beijin💜.jpg"
                  title="😽beijin💜"
                  description=""
                  link="https://youtube.com/shorts/jEnu9qOJIwQ?si=Lvv7IJ3yeaTztZfY"
               />
               <FeedCard
                  image="/src/assets/img/thumb/Jogo 🐼🫂🐱.jpg"
                  title="Jogo 🐼🫂🐱"
                  description=""
                  link="https://www.youtube.com/watch?v=ggyaZk9PWRc"
               />
            </div>
         </section>

         <footer className="fixed left-0 bottom-0 w-full pointer-events-none">
            <div className="w-full flex justify-end pr-8 pb-4 pointer-events-auto">
               <a href="#container" className="group">
                  <div className="
              bg-lilac 
              border-[3px] border-black-purple 
              rounded-full 
              w-16 h-16 
              flex items-center justify-center
              hover:bg-light-lilac
            ">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black-purple w-8 h-8">
                        <path d="m5 12 7-7 7 7" />
                        <path d="M12 19V5" />
                     </svg>
                  </div>
               </a>
            </div>
         </footer>
      </div>
   )
}

export default Feed