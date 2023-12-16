import React from "react";

const Header = ({ SobreMi, MisProyectos, DatoContacto }) => {
    return (
        <nav className="w-full z-[100] h-[50px] shadow-xl flex flex-row justify-end  items-center font-[Merienda]  text-sm gap-5 pr-5 fixed text-[rgb(255,255,255,0.9)] sm:text-xl sm:gap-10 ">
            <h1
                className="mover"
                onClick={
                    () => {
                        let Posicion = SobreMi.current.getBoundingClientRect();

                        window.scrollTo({
                            top: window.scrollY + (Posicion.top - 100),
                            behavior: "smooth",
                        });
                    }
                    // SobreMi.current.scrollIntoView({ behavior: "smooth" })
                }
            >
                Sobre mi
            </h1>
            <h1
                className="mover"
                onClick={() => {
                    let Posicion = MisProyectos.current.getBoundingClientRect();

                    window.scrollTo({
                        top: window.scrollY + (Posicion.top - 100),
                        behavior: "smooth",
                    });

                    // MisProyectos.current.scrollIntoView({ behavior: "smooth" })
                }}
            >
                Mis Proyectos
            </h1>
            <h1
                className="mover"
                onClick={
                    () => {
                        {
                            let Posicion =
                                DatoContacto.current.getBoundingClientRect();

                            window.scrollTo({
                                top: window.scrollY + (Posicion.top - 100),
                                behavior: "smooth",
                            });
                        }
                    }
                    // DatoContacto.current.scrollIntoView({ behavior: "smooth" })
                }
            >
                Datos de Contacto
            </h1>
        </nav>
    );
};

export default Header;
