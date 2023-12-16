import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ImLink } from "react-icons/im";
import Opacidad from "@/components/frameMotion/opacity";

const Tarjeta = ({
    titulo,
    descripcion,
    github,
    deploy,
    tecnologias,
    foto,
    derecha,
}) => {
    return (
        <Opacidad>
            <div
                className={`w-full relative mb-[5rem] display ${
                    derecha ? "flex-row-reverse" : "flex-row"
                } border-none sm:border-black shadow-xl sm:shadow-none p-2 sm:p-0 `}
            >
                <div
                    className={`foto  ${
                        derecha ? "left-0 " : "right-0 "
                    } w-full`}
                >
                    <Image
                        className="rounded-lg w-full"
                        src={foto}
                        alt="Imagen de proyecto"
                        width={500}
                        height={1000}
                        style={{ objectFit: "cover" }}
                        // objectFit={"contain"}
                        // layout="fill"
                    />
                </div>
                <section
                    className={`position ${
                        derecha ? "left-0" : "right-0"
                    }  flex flex-col justify-center items-center`}
                >
                    <div
                        className={` w-full bg-gradient-to-r from-[#EA546C] to-[#598CBE] text-transparent bg-clip-text font-[Merienda] mb-3 ${
                            derecha ? "text-left" : "text-right"
                        }`}
                    >
                        {/* ${
                            derecha ? "text-right" : "text-left"
                        } */}
                        <p className={` text-2xl sm:text-3xl  `}>{titulo}</p>
                    </div>

                    <p className="text-[rgb(255,255,255,0.9)] z-[102] bg-[#604A84] rounded-md p-2 text-center min-h-[6rem] flex justify-center sm:justify-start items-center text-base sm:text-base">
                        {descripcion}
                    </p>

                    <div
                        className={`w-full z-[103] flex flex-row items-center my-4 gap-5 ${
                            derecha ? "justify-start" : "justify-end"
                        } `}
                    >
                        <a
                            className="text-[2rem] text-[#A7A4A5] hover:text-[#ffffff]"
                            href={github}
                        >
                            <FaGithub />
                        </a>
                        <a
                            className="text-[2rem] text-[#A7A4A5] hover:text-[#ffffff]"
                            href={deploy}
                        >
                            <ImLink />
                        </a>
                    </div>

                    <div
                        className={` w-full flex items-center flex-wrap z-[104] gap-1 ${
                            derecha ? "justify-start" : "justify-end"
                        }`}
                    >
                        {tecnologias.map((value, index) => {
                            return (
                                <div key={index} className="flexTec">
                                    <span className="ItemsTecnologias text-xs">
                                        {value}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </Opacidad>
    );
};

export default Tarjeta;
