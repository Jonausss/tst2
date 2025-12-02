import React from 'react'

const FeedCard = ({ image, title, description, link, buttonText = "Assistir" }) => {
   return (
      <article className="
      w-[16.2rem] h-72 
      bg-brand-purple 
      m-5 
      rounded-[30px] 
      flex flex-col items-center justify-end 
      overflow-hidden 
      border-0 border-black-purple/10
      shadow-2xl
    ">
         <img
            src={image}
            alt={title}
            className="w-full h-[50%] object-cover"
         />
         <div className="
        bg-white/50 
        w-full h-[50%] 
        px-4 
        flex flex-col 
        text-ellipsis overflow-hidden
      ">
            <h3 className="font-bold text-lg leading-tight mt-2">{title}</h3>
            <p className="text-sm text-left my-2 grow">{description}</p>
            <div className="text-center mb-4">
               <a
                  href={link}
                  className="
              bg-lilac text-black-purple 
              border border-black-purple rounded-xl 
              px-4 py-1 
              hover:bg-light-lilac transition-colors
              inline-block
            "
               >
                  {buttonText}
               </a>
            </div>
         </div>
      </article>
   )
}

export default FeedCard