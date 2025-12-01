import { useState, useEffect, useRef } from 'react'

const PodcastPlayer = ({ track, onClose }) => {
   const audioRef = useRef(null)
   const progressBarRef = useRef(null)

   const [isPlaying, setIsPlaying] = useState(false)
   const [currentTime, setCurrentTime] = useState(0)
   const [duration, setDuration] = useState(0)

   const formatTime = (time) => {
      if (time && !isNaN(time)) {
         const minutes = Math.floor(time / 60)
         const seconds = Math.floor(time % 60)
         return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
      }
      return '00:00'
   }

   useEffect(() => {
      if (track && audioRef.current) {
         audioRef.current.play().catch(e => console.log("Interação necessária para tocar"))
         setIsPlaying(true)
      }
   }, [track])

   const togglePlay = () => {
      if (isPlaying) {
         audioRef.current.pause()
      } else {
         audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
   }

   const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime)
   }

   const handleLoadedMetadata = () => {
      setDuration(audioRef.current.duration)
   }

   const handleSeek = (e) => {
      if (progressBarRef.current && duration) {
         const rect = progressBarRef.current.getBoundingClientRect()
         const clickX = e.clientX - rect.left // Posição do clique dentro da barra
         const width = rect.width // Largura total da barra
         const percentage = clickX / width

         const newTime = percentage * duration
         audioRef.current.currentTime = newTime
         setCurrentTime(newTime)
      }
   }

   const progressPercent = duration ? (currentTime / duration) * 100 : 0

   return (
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-40 w-[90%] md:w-[400px] bg-[#5c4033] border-4 border-[#3e2b22] p-2 rounded shadow-xl flex items-center gap-3 animate-slide-down">
         {/* Elemento de Áudio Invisível */}
         <audio
            ref={audioRef}
            src={track.src}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
         />

         {/* Botão Play/Pause */}
         <button
            onClick={togglePlay}
            className="w-10 h-10 bg-[#f4e4ba] text-[#5c4033] border-2 border-[#3e2b22] flex items-center justify-center font-bold text-xl hover:bg-white active:translate-y-1"
         >
            {isPlaying ? '||' : '▶'}
         </button>

         {/* Informações da Faixa */}
         <div className="flex-1 overflow-hidden">
            <div className="flex justify-between items-end mb-1">
               <p className="text-white text-sm font-bold truncate pr-2">{track.title}</p>
               {/* Display de Tempo */}
               <span className="text-[#f4e4ba] text-xs font-mono shrink-0">
                  {formatTime(currentTime)} / {formatTime(duration)}
               </span>
            </div>

            {/* Barra de Progresso Interativa */}
            <div
               ref={progressBarRef}
               onClick={handleSeek}
               className="w-full h-3 bg-[#3e2b22] relative cursor-pointer group"
            >
               {/* Barra preenchida */}
               <div
                  className="h-full bg-[#f4e4ba] pointer-events-none transition-all duration-100 ease-linear"
                  style={{ width: `${progressPercent}%` }}
               ></div>

               {/* Efeito visual ao passar o mouse (opcional, para indicar que é clicável) */}
               <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>
            </div>
         </div>

         {/* Botão Fechar (Stop) */}
         <button
            onClick={onClose}
            className="text-red-400 hover:text-red-200 font-bold px-2"
         >
            X
         </button>
      </div>
   )
}

export default PodcastPlayer