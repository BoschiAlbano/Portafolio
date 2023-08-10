import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa'
import { ImLink } from 'react-icons/im'

const Tarjeta = ({ titulo, descripcion, github, deploy, tecnologias, foto, derecha }) => {


    return (
        <div className={`w-full  relative mb-[5rem] display ${derecha ? "flex-row-reverse" : "flex-row"} border-none sm:border-black shadow-xl sm:shadow-none p-2 sm:p-0`}>

                <div className={`foto`}>
                    <Image className="rounded-xl"
                        src={foto}
                        height={300}
                        width={600}
                        alt='Imagen de proyecto'
                        layout="responsive"
                    />      
                </div>

                <section className={`position ${derecha ? 'left-0' : 'right-0'}`}>
                    
                    <div className={`bg-gradient-to-r z-[101] from-[#EA546C] to-[#598CBE] text-transparent bg-clip-text font-[Merienda] mb-3 centrar ${derecha ? 'text-left' : 'text-right'}`}>

                        <p className={`text-[2.5rem] sm:text-[4rem]`}>{titulo}</p>

                    </div>

                    <p className="text-[rgb(255,255,255,0.9)] z-[102] bg-[#604A84] rounded-md p-2 text-center min-h-[6rem] flex justify-center sm:justify-start items-center text-[1rem] sm:text-[1.2rem]">{descripcion}</p>

                    <div className={`w-full z-[103] flex flex-row items-center my-4 gap-5 ${derecha ? 'justify-start' : 'justify-end'}`}>
                        <a className="text-[3rem] text-[#A7A4A5] hover:text-[#ffffff]" href={github}><FaGithub /></a>
                        <a className="text-[3rem] text-[#A7A4A5] hover:text-[#ffffff]" href={deploy}><ImLink /></a>
                    </div>

                    <div className={`flex items-center flex-wrap z-[104] gap-1 ${derecha ? 'justify-start' : 'justify-end'}`}>
                            {tecnologias.map((value, index) => {
                                return (
                                    <div key={index} className="flexTec">
                                        <span className="ItemsTecnologias">{value}</span>
                                    </div>
                                )
                            })}
                    </div>
                </section>

        </div>
    );
}

export default Tarjeta;
