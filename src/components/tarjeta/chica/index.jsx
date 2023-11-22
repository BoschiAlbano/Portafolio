import React from "react";
import { FaGithub } from "react-icons/fa";
import { ImLink } from "react-icons/im";
import { IoCloudDownload } from "react-icons/io5";

const TarjetaChica = ({
    github,
    deploy,
    titulo,
    descripcion,
    tecnologias,
    descargar = false,
    textoDescarga = false,
}) => {
    return (
        <div className="EfectoDegrade p-1 rounded-2xl">
            <div className="Galeria_Tarjetas mb-0 p-3 rounded-2xl shadow-sm shadow-[#000000] bg-[#202024] flex flex-col justify-between items-center">
                <div className="flex flex-row justify-end items-center gap-5">
                    <a href={github}>
                        <FaGithub className="text-[3rem] text-[#A7A4A5] hover:text-[#ffffff]" />
                    </a>
                    {deploy.length != 0 ? (
                        <a href={deploy}>
                            <ImLink className="text-[3rem] text-[#A7A4A5] hover:text-[#ffffff]" />
                        </a>
                    ) : null}
                    {descargar ? (
                        <a
                            href={descargar}
                            download={textoDescarga}
                            className="saltar bg-[#A7A4A5] text-center font-[Merienda] rounded-full text-black text-2xl p-3 flex justify-center items-center gap-3 hover:bg-[#ffffff]"
                        >
                            {" "}
                            <IoCloudDownload color="#202024" />
                        </a>
                    ) : null}
                </div>

                <h1 className="font-bold text-center text-[#A7A4A5] text-[3rem] font-[Merienda] my-5">
                    {titulo}
                </h1>

                <p className="text-[#A7A4A5] text-center text-2xl my-5">
                    {descripcion}
                </p>

                <div className="flex flex-row gap-1 w-full justify-between items-center ">
                    <div className="flex flex-row gap-2 w-full justify-center">
                        {tecnologias.map((value, index) => {
                            return (
                                <div className="flexTec" key={index}>
                                    <span className="ItemsTecnologias">
                                        {value}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TarjetaChica;
// Lalunitalelu
