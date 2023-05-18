import Image from 'next/image'
import Head from 'next/head'
import Header from './header'
import { IoCloudDownload, IoCall, IoCodeSlash, IoServer, IoBuild } from 'react-icons/io5'
import {BsWindows} from 'react-icons/bs'
import Titulo from '@/components/titulo'
import Tarjeta from '@/components/tarjeta/grande'
import TarjetaChica from '@/components/tarjeta/chica'
import Formulario from '@/components/formulario'

import { RiMailSendLine } from 'react-icons/ri'
import { FaGithub } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'


import { useEffect, useRef } from 'react'

export default function Home() {

  let tituto = "Boschi Albano Jose"

  const SobreMi = useRef(null);
  const MisProyectos = useRef(null);
  const DatoContacto = useRef(null);

  useEffect(() => {

    window.addEventListener('blur', () => {
      document.title = '¡No te vayas! 😱'
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
      <link rel="icon" href="/Portafolio.ico" />
    </Head>

    <Header SobreMi={SobreMi} DatoContacto={DatoContacto} MisProyectos={MisProyectos}/>


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

          <button onClick={() => DatoContacto.current.scrollIntoView({ behavior: 'smooth' })} className="saltar bg-gradient-to-r from-[#EA546C] to-[#598CBE] text-center font-[Merienda] rounded-md text-black text-2xl p-2 flex justify-center items-center gap-3"> Contactame <IoCall /></button>

        </div>

      </div>

      {/* Quien Soy? */}
      <div ref={SobreMi} className="saltar Columnas mt-[100px] p-0  sm:border sm:border-black sm:p-10 rounded-sm shadow-xl">

        <Image alt='Boschi Albano Jose' src={"/Foto2.jpeg"} height={250} width={250} className="rounded-full"></Image>

        <div className="w-full flex flex-col items-center sm:items-start text-start text-[rgba(255,255,255,0.9)]">

          <div className="w-[200px] flex flex-row text-center justify-center bg-gradient-to-r from-[#EA546C] to-[#598CBE] text-transparent bg-clip-text items-baseline gap-3">
            <h1 className="text-[40px] sm:text-[50px] font-bold  text-left font-[Merienda] w-[200px]">Sobre mí</h1>
          </div>



          <div className="sm:text-xl text-lg">
            <h1>✔ Soy una persona autodidacta, responsable y comprometida con mi trabajo.</h1>
            <h1>✔ Constantemente estoy aprendiendo nuevas tecnologias y herramientas para mejorar mis habilidades.</h1>
            <h1>✔ No dude en <span className="font-bold">Contactarse</span> conmigo si tiene alguna pregunta.</h1>
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
          <BsWindows className='IconoTec' />
          <h1 className='h1Tec'>Escritorio</h1>
          <div className="flexTec">
            <span className="ItemsTecnologias">C#</span>
            <span className="ItemsTecnologias">Entity Framework</span>
          </div>
        </div>

      </div>


      {/* Mis Proyectos */}

      <Titulo referencia={MisProyectos} titulo={"Algunos de mis proyectos"} subtitulo={"Mis Proyectos"} />

      <Tarjeta titulo={"App Ministerio"} descripcion={"Aplicación móvil diseñada para el “Ministerio de Obras y Servicios Públicos”, con el fin de que la App brinde información a los usuarios, sobre los servicios públicos. además de permitir que los usuarios realicen sus reclamos."} github={"https://github.com/BoschiAlbano/Mobile_app_Ministerio"} deploy={""} tecnologias={["Ionic Framework", "React JS", "Express js"]} foto={"/Ministerio.png"} derecha={false} />

      <Tarjeta titulo={"E-Commerce"} descripcion={"Aplicacion de ventas para escritorio. (Control de Articulos, facturas, cuenta corriente, caja, reportes, etc.)"} github={"https://github.com/BoschiAlbano/App-Martin"} deploy={""} tecnologias={["C#", "Entity Framework", "Sql Server"]} foto={"/AppMartin.png"} derecha={true} />

      <Tarjeta titulo={"E-Commerce Web"} descripcion={"Aplicacion que permite realizar pedidos, armando tu carrito de compras."} github={"https://github.com/BoschiAlbano/App-Martin-Web"} deploy={"https://login-boschialbano.vercel.app/"} tecnologias={["Next js", "mongodb", "GraphQl"]} foto={"/AppMartinWeb.png"} derecha={false} /> 


      {/* Otros Proyectos */}
      <Titulo titulo={"¿Te interesaria conocer otros proyectos?"} subtitulo={"Proyectos Interesantes"} />

      <div className="Galeria mb-30">
        <TarjetaChica github={"https://github.com/BoschiAlbano/Giphy-React"} deploy={"https://giffy-boschialbano.vercel.app/"} titulo={"giffy"} descripcion={"proyecto diseñado para consumir Api de gifs"} tecnologias={["java Script", "React Js"]} />


        <TarjetaChica github={""} deploy={"https://noticias-app-gamma.vercel.app/"} titulo={"Comics xkcd"} descripcion={"Curso de Next js - Youtube midudev"} tecnologias={["React JS", "java Script", "node js"]} />


        <TarjetaChica github={""} deploy={""} titulo={"Sin Titulo"} descripcion={"Sin Descripcion"} tecnologias={[]} />

      </div>

      {/* Datos de Contacto */}

      <Titulo referencia={DatoContacto} titulo={"¿Quieres contactarme?"} subtitulo={"Datos de Contacto"} />

      <Formulario />


      {/* footer */}

      <div className="w-full border-t-[3px] pt-5 border-[#5E4A87]">

        <div className="flex flex-row justify-center text-center bg-gradient-to-r from-[#EA546C] to-[#598CBE] text-transparent bg-clip-text items-baseline mb-5">
          <h1 className="text-[25px] sm:text-[50px] font-bold  text-left font-[Merienda]">Gracias por visitar mi sitio web!</h1>
        </div>

        <div className="w-full flex flex-row gap-2 mb-5 justify-center items-center">
          <span onClick={() => copiar("Boschi.albano.jose@gmail.com")}><RiMailSendLine className='text-[3rem] text-[#A7A4A5] hover:text-[#ffffff]'/></span>
          <a href={'https://github.com/BoschiAlbano'}><FaGithub className='text-[3rem] text-[#A7A4A5] hover:text-[#ffffff]'/></a>
          <a href={'No tengo'}><BsLinkedin className='text-[3rem] text-[#A7A4A5] hover:text-[#ffffff]'/></a>
        </div>

      </div>

    </div>

  </>
  )
}