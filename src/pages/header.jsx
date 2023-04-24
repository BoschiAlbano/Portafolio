import React from 'react';

const Header = () => {
    return (
        <nav className="w-full z-[100] h-[50px] shadow-xl flex flex-row justify-end  items-center font-[Merienda]  text-sm gap-5 pr-5 fixed text-[rgb(255,255,255,0.9)] sm:text-xl sm:gap-10 ">

            <h1 className="mover">Sobre mi</h1>
            <h1 className="mover">Mis Proyectos</h1>
            <h1 className="mover">Datos de Contacto</h1>

            
        </nav>
    );
}

export default Header;
