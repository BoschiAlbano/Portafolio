import Image from 'next/image'
import Head from 'next/head'
import Header from './header'
import { IoCloudDownload, IoCall, IoCodeSlash, IoServer, IoBuild } from 'react-icons/io5'

import Titulo from '@/components/titulo'
import Tarjeta from '@/components/tarjeta/grande'
import TarjetaChica from '@/components/tarjeta/chica'
import Formulario from '@/components/formulario'

import { RiMailSendLine } from 'react-icons/ri'
import { FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'


import { useEffect } from 'react'

export default function Home() {

  let tituto = "Boschi Albano Jose"

  useEffect(() => {

    window.addEventListener('blur', () => {
      document.title = '¡No te vayas! Dame Trabajo 😱'
    })

    window.addEventListener('focus', () => {
      document.title = tituto
    })

  }, []);


  function copiar(text) {
    const clipboard = window.navigator.clipboard;
  
    if (!clipboard) {
      // Si el portapapeles no está disponible en el navegador, muestra un mensaje de error
      console.error("El portapapeles no está disponible en este navegador");
      return;
    }
  
    clipboard.writeText(text)
      .then(() => {
        console.log("Texto copiado al portapapeles: ", text);
      })
      .catch((error) => {
        console.error("Error al copiar texto al portapapeles: ", error);
      });
  }

  return (<>

    <Head>
      <title>{tituto}</title>
      <meta name="description" content="Aplicacion Creada con nextJS" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />


    <div className="flex flex-col justify-center items-center h-auto pt-[100px] px-3 sm:px-20">

      {/* Saludo */}
      <div className="text-center">

        <h1 className="text-[rgba(255,255,255,0.9)] text-3xl">Hola 👋 Soy</h1>

        <div className="w-full bg-gradient-to-r from-[#EA546C] to-[#598CBE] text-transparent bg-clip-text text-center font-[Merienda]">
          <p className="sm:text-[8rem] sm:leading-[7rem] text-[7rem] leading-[6rem]">Boschi</p>
          <p className="sm:text-[4.5rem] sm:leading-[7rem] text-[3.5rem] leading-[6rem]">Albano José</p>
        </div>

        <h1 className="text-[rgba(255,255,255,0.9)] text-2xl">Tecnico Universitario en Programacion</h1>

        <div className="flex flex-col justify-between mt-[40px] gap-6 p-5 sm:flex sm:flex-row sm:justify-center sm:p-0">

          <a href='./CV.pdf' download={"Boschi Albano Jose"} className="saltar bg-gradient-to-r from-[#EA546C] to-[#598CBE] text-center font-[Merienda] rounded-md text-black text-2xl p-2 flex justify-center items-center gap-3"> Descargar CV<IoCloudDownload /></a>

          <button className="saltar bg-gradient-to-r from-[#EA546C] to-[#598CBE] text-center font-[Merienda] rounded-md text-black text-2xl p-2 flex justify-center items-center gap-3"> Contactame <IoCall /></button>

        </div>

      </div>

      {/* Quien Soy? */}
      <div className="saltar Columnas mt-[100px] p-0  sm:border sm:border-black sm:p-10 rounded-sm shadow-xl">

        <Image alt='Boschi Albano Jose' src={"/Foto.jpg"} height={250} width={250} className="rounded-full"></Image>

        <div className="w-full flex flex-col text-start text-[rgba(255,255,255,0.9)]">

          <div className="w-[200px] flex flex-row text-center bg-gradient-to-r from-[#EA546C] to-[#598CBE] text-transparent bg-clip-text items-baseline gap-3">
            <h1 className="text-[50px] font-bold  text-left font-[Merienda] w-[200px]">Sobre mí</h1>
          </div>



          <div className="sm:text-xl text-lg">
            <h1>✔ Soy una persona autodidacta, responsable y comprometida con mi trabajo.</h1>
            <h1>✔ Constantemente estoy aprendiendo nuevas tecnologias y herramientas para mejorar mis habilidades.</h1>
            <h1>✔ No dudes en <span className="font-bold">Contactarse</span> conmigo si tiene alguna pregunta.</h1>
          </div>

        </div>

      </div>

      {/* Tecnologias */}
      <Titulo titulo={"Tecnologias que use"} subtitulo={"Tecnologias"} />

      <div className="GrillaTecnologias">

        <div className='Tecnologias'>
          <IoCodeSlash className='IconoTec' />
          <h1 className='h1Tec'>Frontend</h1>
          <div className="flexTec">
            <span className="ItemsTecnologias">HTML5</span>
            <span className="ItemsTecnologias">Css</span>
            <span className="ItemsTecnologias">JavaScript</span>
            <span className="ItemsTecnologias">JSX</span>
            <span className="ItemsTecnologias">React Js</span>
            <span className="ItemsTecnologias">Tailwind Css</span>
          </div>
        </div>

        <div className='Tecnologias'>
          <IoServer className='IconoTec' />
          <h1 className='h1Tec'>Backend</h1>
          <div className="flexTec">
            <span className="ItemsTecnologias">Node Js</span>
            <span className="ItemsTecnologias">Express Js</span>
            <span className="ItemsTecnologias">Sql Server</span>
            <span className="ItemsTecnologias">Mongo Db</span>
            <span className="ItemsTecnologias">GraphQl</span>
          </div>
        </div>

        <div className='Tecnologias'>
          <IoBuild className='IconoTec' />
          <h1 className='h1Tec'>Herramientas</h1>
          <div className="flexTec">
            <span className="ItemsTecnologias">GitHub</span>
            <span className="ItemsTecnologias">Postman</span>
          </div>
        </div>

        <div className='Tecnologias'>
          <IoBuild className='IconoTec' />
          <h1 className='h1Tec'>Escritorio</h1>
          <div className="flexTec">
            <span className="ItemsTecnologias">C#</span>
            <span className="ItemsTecnologias">Entity Framework</span>
          </div>
        </div>

      </div>


      {/* Mis Proyectos */}

      <Titulo titulo={"Algunos de mis proyectos"} subtitulo={"Mis Proyectos"} />

      <Tarjeta titulo={"Ecommerce Web"} descripcion={"Esta aplicacion diseñada para que los usuarios se registren, visualicen y carguen su carrito para hacer su pedido"} github={"urlGit"} deploy={"https://login-boschialbano.vercel.app/"} tecnologias={["JS", "React JS", "GraphQl"]} foto={"/AppMartinWeb.png"} derecha={true} />

      <Tarjeta titulo={"Primer Proyecto"} descripcion={"Esta es la descripcion del proyecto"} github={"urlGit"} deploy={"https://login-boschialbano.vercel.app/"} tecnologias={["JS", "React JS", "GraphQl"]} foto={"/AppMartinWeb.png"} derecha={false} />

      <Tarjeta titulo={"Primer Proyecto"} descripcion={"Esta es la descripcion del proyecto"} github={"urlGit"} deploy={"https://login-boschialbano.vercel.app/"} tecnologias={["JS", "React JS", "GraphQl"]} foto={"/AppMartinWeb.png"} derecha={true} /> 


      {/* Otros Proyectos */}
      <Titulo titulo={"¿Te interesaria conocer otros proyectos?"} subtitulo={"Proyectos Interesantes"} />

      <div className="Galeria mb-30">
        <TarjetaChica github={"Repo de Git"} deploy={"Si tiene deploy"} titulo={"Aplicacion de noticias"} descripcion={"proyecto diseñado con react para consumir api de noticias"} tecnologias={["React JS", "Js", "Ionic Framework"]} />


        <TarjetaChica github={"Repo de Git"} deploy={"Si tiene deploy"} titulo={"Aplicacion de noticias"} descripcion={"proyecto diseñado con react para consumir api de noticias"} tecnologias={["React JS", "Js", "Ionic Framework"]} />


        <TarjetaChica github={"Repo de Git"} deploy={"Si tiene deploy"} titulo={"Aplicacion de noticias"} descripcion={"proyecto diseñado con react para consumir api de noticias"} tecnologias={["React JS", "Js", "Ionic Framework"]} />

      </div>

      {/* Datos de Contacto */}

      <Titulo titulo={"¿Quieres contactarme?"} subtitulo={"Datos de Contacto"} />

      <Formulario />


      {/* footer */}

      <div className="w-full border-t-[3px] pt-5 border-[#5E4A87]">

        <div className="flex flex-row justify-center text-center bg-gradient-to-r from-[#EA546C] to-[#598CBE] text-transparent bg-clip-text items-baseline mb-5">
          <h1 className="text-[30px] sm:text-[50px] font-bold  text-left font-[Merienda]">Gracias por visitar mi sitio web!</h1>
        </div>

        <div className="w-full flex flex-row gap-2 mb-5 justify-center items-center">
          <span onClick={() => copiar("albanob24@gmail.com")}><RiMailSendLine className='text-[3rem] text-[#A7A4A5] hover:text-[#ffffff]'/></span>
          <a href={'https://github.com/BoschiAlbano'}><FaGithub className='text-[3rem] text-[#A7A4A5] hover:text-[#ffffff]'/></a>
          <a href={'No tengo'}><BsLinkedin className='text-[3rem] text-[#A7A4A5] hover:text-[#ffffff]'/></a>
        </div>

      </div>

    </div>

  </>
  )
}