import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [error, setError] = useState('');
   const [isHovered, setIsHovered] = useState(false);

   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();

      if (username === '0112' && password === '0112') {
         navigate('/feed')
      } else {
         setError('Usuário inválido!');
         setPassword('');
      }
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-300 to-white p-4">
         {/* Contêiner principal do formulário */}
         <div
            className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-10 w-full max-w-sm 
                           transform transition-all duration-500 ease-out 
                           hover:scale-105 hover:shadow-2xl"
         >
            {/* Título */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-purple-800 mb-8 text-center 
                               animate-fade-in-down transform translate-y-5 opacity-0"
               style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }}
            >
               Login
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
               {/* Campo de Usuário */}
               <div>
                  <input
                     type="text"
                     placeholder="Insira o Usuário"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     required
                     className="w-full px-5 py-3 rounded-full bg-purple-50 border border-purple-200 text-purple-800 
                                       placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent
                                       transition duration-300 ease-in-out transform hover:scale-105"
                  />
               </div>
               {/* Campo de Senha */}
               <div>
                  <input
                     type="password"
                     placeholder="Insira a Senha"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required
                     className="w-full px-5 py-3 rounded-full bg-purple-50 border border-purple-200 text-purple-800 
                                       placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent
                                       transition duration-300 ease-in-out transform hover:scale-105"
                  />
               </div>
               {/* Botão de Entrar */}
               <button
                  type="submit"
                  className={`w-full py-3 rounded-full text-white font-bold text-lg 
                                    transition-all duration-300 ease-in-out 
                                    bg-linear-to-br from-purple-300 to-purple-600
                                    hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75
                                    transform active:scale-95`}
               >
                  Entrar
               </button>
               {/* Mensagem de Erro */}
               {error && (
                  <p className="text-red-500 text-sm mt-4 text-center animate-bounce">
                     Nome de usuário ou senha incorretos!
                  </p>
               )}
            </form>
         </div>
      </div>
   )
}

export default Login