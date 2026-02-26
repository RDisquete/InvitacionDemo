# 🕊️ Wedding Demo — R&M 2026

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=3ECF8E)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

Una experiencia digital premium diseñada para invitaciones de boda, centrada en una **estética editorial**, minimalismo y una experiencia de usuario fluida. Este proyecto combina la elegancia del diseño tipográfico con la potencia de un backend en tiempo real para gestionar momentos compartidos.

---

## 🌟 Características Principales

* **Estética Editorial de Lujo:** Diseño basado en tipografía *oversized*, rejillas asimétricas y texturas de papel realistas adaptativas (Mobile/Desktop).
* **Gestión de Recuerdos (Supabase):** Galería interactiva con subida de imágenes optimizada mediante compresión en el cliente (`browser-image-compression`).
* **Acceso Privado:** Sistema de autorización por contraseña para proteger la privacidad de la galería de invitados.
* **Animaciones Cinemáticas:** Implementación de `Framer Motion` con curvas de interpolación personalizadas y efectos de "revelado" al hacer scroll.
* **Confirmación de Asistencia:** Formulario dinámico con validación de campos, integrado con `Formspree`.
* **Performance & SEO:** Preloader nativo, precarga de assets críticos y gestión de metadatos dinámicos mediante `React Helmet Async`.

## 🛠️ Stack Tecnológico

| Herramienta | Uso |
| :--- | :--- |
| **React 18** | Biblioteca principal de UI con TypeScript |
| **Tailwind CSS** | Framework de estilos basado en utilidades |
| **Framer Motion** | Animaciones cinemáticas y transiciones de página |
| **Supabase** | Gestión de base de datos y almacenamiento (Bucket Storage) |
| **React Router 6** | Sistema de navegación y gestión de rutas |
| **Formspree** | Procesamiento de formularios de contacto sin servidor |

## 🚀 Instalación y Configuración Local

Sigue estos pasos para desplegar el proyecto en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/wedding-demo.git](https://github.com/tu-usuario/wedding-demo.git)
    cd wedding-demo
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno (`.env`):**
    Crea un archivo llamado `.env` en la raíz del proyecto y añade tus credenciales:
    ```env
    VITE_SUPABASE_URL=tu_url_de_supabase
    VITE_SUPABASE_ANON_KEY=tu_anon_key_de_supabase
    VITE_FORMSPREE_ID=tu_id_de_formspree
    VITE_GALLERY_PASSWORD=demordisquete
    ```

4.  **Iniciar entorno de desarrollo:**
    ```bash
    npm run dev
    ```

## 📐 Estructura del Proyecto

```text
src/
├── components/     # Componentes de UI (Reveal, Header, Footer, SEO, LocalTexture)
├── pages/          # Vistas principales (Inicio, Nosotros, Fotos, Contacto, Compartir)
├── hooks/          # Hooks personalizados para lógica de scroll y auth
├── assets/         # Estilos globales y definiciones tipográficas
├── main.tsx        # Punto de entrada de la aplicación
└── App.tsx         # Configuración de rutas y proveedores (Helmet, Router)

Gemini ha dicho
Tienes razón. Como tu colaborador que no acepta un "casi" por respuesta, aquí tienes el código absolutamente completo del README.md, sin explicaciones externas, listo para que hagas un copy-paste directo en tu archivo.

He incluido todas las secciones: desde los badges técnicos hasta la guía de instalación y la estructura de archivos que hemos construido.

README.md
Markdown
# 🕊️ Wedding Demo — C&A 2026

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=3ECF8E)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

Una experiencia digital premium diseñada para invitaciones de boda, centrada en una **estética editorial**, minimalismo y una experiencia de usuario fluida. Este proyecto combina la elegancia del diseño tipográfico con la potencia de un backend en tiempo real para gestionar momentos compartidos.

---

## 🌟 Características Principales

* **Estética Editorial de Lujo:** Diseño basado en tipografía *oversized*, rejillas asimétricas y texturas de papel realistas adaptativas (Mobile/Desktop).
* **Gestión de Recuerdos (Supabase):** Galería interactiva con subida de imágenes optimizada mediante compresión en el cliente (`browser-image-compression`).
* **Acceso Privado:** Sistema de autorización por contraseña para proteger la privacidad de la galería de invitados.
* **Animaciones Cinemáticas:** Implementación de `Framer Motion` con curvas de interpolación personalizadas y efectos de "revelado" al hacer scroll.
* **Confirmación de Asistencia:** Formulario dinámico con validación de campos, integrado con `Formspree`.
* **Performance & SEO:** Preloader nativo, precarga de assets críticos y gestión de metadatos dinámicos mediante `React Helmet Async`.

## 🛠️ Stack Tecnológico

| Herramienta | Uso |
| :--- | :--- |
| **React 18** | Biblioteca principal de UI con TypeScript |
| **Tailwind CSS** | Framework de estilos basado en utilidades |
| **Framer Motion** | Animaciones cinemáticas y transiciones de página |
| **Supabase** | Gestión de base de datos y almacenamiento (Bucket Storage) |
| **React Router 6** | Sistema de navegación y gestión de rutas |
| **Formspree** | Procesamiento de formularios de contacto sin servidor |

## 🚀 Instalación y Configuración Local

Sigue estos pasos para desplegar el proyecto en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/wedding-demo.git](https://github.com/tu-usuario/wedding-demo.git)
    cd wedding-demo
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Configurar Variables de Entorno (`.env`):**
    Crea un archivo llamado `.env` en la raíz del proyecto y añade tus credenciales:
    ```env
    VITE_SUPABASE_URL=tu_url_de_supabase
    VITE_SUPABASE_ANON_KEY=tu_anon_key_de_supabase
    VITE_FORMSPREE_ID=tu_id_de_formspree
    VITE_GALLERY_PASSWORD=demordisquete
    ```

4.  **Iniciar entorno de desarrollo:**
    ```bash
    npm run dev
    ```

## 📐 Estructura del Proyecto

```text
src/
├── components/     # Componentes de UI (Reveal, Header, Footer, SEO, LocalTexture)
├── pages/          # Vistas principales (Inicio, Nosotros, Fotos, Contacto, Compartir)
├── hooks/          # Hooks personalizados para lógica de scroll y auth
├── assets/         # Estilos globales y definiciones tipográficas
├── main.tsx        # Punto de entrada de la aplicación
└── App.tsx         # Configuración de rutas y proveedores (Helmet, Router)
📸 Concepto Visual
El proyecto utiliza capas de texturas en modo mix-blend-multiply para simular papel artesanal, rompiendo la frialdad de la pantalla digital. Cada transición está diseñada para guiar la mirada del usuario de forma orgánica, priorizando la legibilidad y la emoción.

✒️ Créditos
Este proyecto es una muestra conceptual diseñada y desarrollada por [Rafa/RDisquete].

Web: rdisquete.es