import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa'
import { ImLink } from 'react-icons/im'

const Tarjeta = ({ titulo, descripcion, github, deploy, tecnologias, foto, derecha }) => {


    return (
        <div className="relative w-full h-auto sm:h-[500px] mb-10 sm:mb-0 border-none sm:border-black rounded-sm shadow-xl sm:shadow-none p-2 sm:p-0">

            {/* Foto  */}
            <div className={`absolute  ${derecha ? "TarjetaGrandeFoto" : "TarjetaGrandeFotoOpuesto"}`}>

                {derecha ? null : <div></div>}
                <Image className="rounded-xl"
                    src={foto}
                    height={1000}
                    width={1300}
                    alt='Imagen de proyecto'
                />

            </div>

            {/* Datos de Proyecto */}
            <div className={`absolute ${derecha ? "TarjetaGrandeDatos" : "TarjetaGrandeDatosOpuesto"}`}>
                
                {derecha ? <div></div> : null}

                <div className="flex flex-col">

                    <div className="bg-gradient-to-r from-[#EA546C] to-[#598CBE] text-transparent bg-clip-text font-[Merienda] mb-3">
                        <p className={`text-[2.5rem] sm:text-[4rem] ${derecha ? 'text-end' : 'text-start'}`}>{titulo}</p>
                    </div>

                    <p className="text-[rgb(255,255,255,0.9)] bg-[#604A84] rounded-md p-2 text-center min-h-[6rem] flex justify-center sm:justify-start items-center text-[1.2rem] sm:text-[1.5rem]">{descripcion}</p>

                    <div className={`w-full flex flex-row items-center my-3 sm:my-10 gap-5 ${derecha ? 'justify-end' : 'justify-start'}`}>
                        <a className="text-[3rem] text-[#A7A4A5] hover:text-[#ffffff]" href={github}><FaGithub /></a>
                        <a className="text-[3rem] text-[#A7A4A5] hover:text-[#ffffff]" href={deploy}><ImLink /></a>
                    </div>

                    <div className={`flex items-center gap-1 ${derecha ? 'justify-end' : 'justify-start'}`}>
                        {tecnologias.map((value, index) => {
                            return (
                                <div key={index} className="flexTec">
                                    <span className="ItemsTecnologias">{value}</span>
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Tarjeta;
