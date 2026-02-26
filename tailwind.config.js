/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Los colores que estamos usando en el código
        olivo: {
          DEFAULT: '#556b2f', // Verde Olivo sólido
          dark: '#3e4e22',
        },
        pergamino: {
          DEFAULT: '#f4f1ea', // Crema papel antiguo
        },
        paniculata: {
          DEFAULT: '#fdfcf9', // Blanco roto/flor
        },
        carbon: {
          DEFAULT: '#2d2d2d', // Gris casi negro para texto
        },
      },
      fontFamily: {
        // Asegúrate de tener estas fuentes en tu index.html o cámbialas por 'serif' / 'sans'
        serif: ['Prata', 'serif'], 
        cuerpo: ['Libre Baskerville', 'serif'],
      },
    },
  },
  plugins: [],
}