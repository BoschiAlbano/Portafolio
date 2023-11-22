import React from "react";

import Reveal from "../frameMotion/reveal";

const Titulo = ({ titulo, subtitulo, referencia }) => {
    return (
        <Reveal>
            <div
                ref={referencia}
                className="flex flex-col items-center text-[rgb(255,255,255,0.9)] mt-40 mb-10"
            >
                <h1 className="text-ml sm:text-xl font-bold mb-0">{titulo}</h1>
                <p className="text-[2rem] sm:text-[3rem] mb-0">{subtitulo}</p>
                <hr className="my-2 h-[2px] border-none bg-[#5E4A87] w-[50%]" />
            </div>
        </Reveal>
    );
};

export default Titulo;
