import Api from "./api";
import { useState } from "react";

function Estructura() {
    const [apiKey, setApiKey] = useState(0);

    const llamandoAlApi = () => {
        // Incrementamos el contador para cambiar la key
        setApiKey(prevKey => prevKey + 1);
    };


    // boton recargar
    const recargar = () => {
        const BOTON = document.getElementById("BOTON-RECARGAR");
        BOTON.classList.add("rotar");

        setTimeout(() => {
            BOTON.classList.remove("rotar");
        }, 1000)
    }







    return (
        <div className="App
        flex items-center justify-center">
            <div data-aos="zoom-in" className="CONT-GENERAL
            w-[900px] h-[650px]
            p-10
            rounded-4xl
            overflow-hidden" onLoad={llamandoAlApi}>

                <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200" data-aos-anchor="#example-anchor"
                    data-aos-offset="500" className="
                w-[100%] h-[100%]
                grid grid-cols-1 grid-rows-7 gap-2">




                    {/* CONT TIMEPO ACTUAL */}
                    <section className="
                    w-[100%] h-[100%]
                    row-span-3
                    grid grid-cols-3 grid-rows-1 gap-4">


                        <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400" data-aos-anchor="#example-anchor"
                            data-aos-offset="500" className="CONT-TIEMPO-ACTUAL
                        rounded-4xl">
                            <div className="
                            flex flex-col items-start justify-center gap-2
                            h-[100%]
                            pl-10">
                                <div className="
                                flex items-end">
                                    <h1 id="CLIMA-ACTUAL" className="text-4xl">❓</h1><span id="ICONO-CLIMA-ACTUAL"
                                        className="text-7xl"></span>
                                </div>
                                <p id="resumen" className="text-sm">datos</p>
                                <p>Pro. lluvia <span id="ProbabilidadDeLluvia">❓</span></p>

                                <button id="BOTON-RECARGAR" className="
                                absolute 
                                bottom-5 right-5 
                                flex items-center justify-center 
                                text-4xl 
                                cursor-pointer" onClick={() => { llamandoAlApi(); recargar(); }}><i className="bi bi-arrow-counterclockwise" ></i></button>
                            </div>
                        </div>




                        {/* CONT INFO DETALLADO */}
                        <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="600" data-aos-anchor="#example-anchor"
                            data-aos-offset="500" className="CONT-INFO
                        col-span-2 col-start-2
                        flex flex-col gap-4
                        rounded-4xl
                        p-10">
                            <div className="
                            flex place-content-between items-center">
                                <p>Hubicacion :</p>
                                <p id="HUBICACION">❓</p>
                            </div>

                            <div className="
                            flex place-content-between items-center">
                                <p>Humedad :</p>
                                <p id="HUMEDAD">❓</p>
                            </div>

                            <div className="
                            flex place-content-between items-center">
                                <p>Viento :</p>
                                <p id="VIENTO">❓</p>
                            </div>

                            <div className="
                            flex place-content-between items-center">
                                <p>Direccion del viento :</p>
                                <p id="D.VIENTO">❓</p>
                            </div>
                        </div>
                    </section>






                    <section className="
                    w-[100%] h-[100%]
                    row-span-4 row-start-4
                    grid grid-cols-3 grid-rows-1 gap-4">

                        {/* CONT PRONOSTICO */}
                        <ul data-aos="zoom-in" data-aos-duration="800" data-aos-delay="800" data-aos-anchor="#example-anchor"
                            data-aos-offset="500" className="CONT-PRONOSTICO
                        grid grid-cols-1 grid-rows-4 gap-4
                        p-4
                        rounded-4xl">
                            <li data-aos="zoom-in" data-aos-duration="800" data-aos-delay="1000" className="
                            grid grid-cols-3 grid-rows-1
                            items-center justify-center
                            p-2
                            rounded-2xl">
                                <div className="flex flex-col">
                                    <span id="icon-1"></span>
                                    <h1 id="CLIMA-1" className="text-[10px]">❓</h1>
                                </div>
                                <div className="
                                flex flex-col
                                text-end">
                                    <p id="TEMP-MAX" className="text-[10px]"></p>
                                    <p id="TEMP-MIN" className="text-[10px]"></p>
                                </div>
                                <p id="DIA-1" className="PRONS-DIAS 
                                text-xs
                                text-end">Hoy</p>
                            </li>

                            <li data-aos="zoom-in" data-aos-duration="800" data-aos-delay="1200" className="
                            grid grid-cols-3 grid-rows-1
                            items-center justify-center
                            p-2
                            rounded-2xl">
                                <div className="flex flex-col">
                                    <span id="icon-2"></span>
                                    <h1 id="CLIMA-2" className="text-[10px]">❓</h1>
                                </div>
                                <div className="
                                flex flex-col
                                text-end">
                                    <p id="TEMP-MAX-2" className="text-[10px]"></p>
                                    <p id="TEMP-MIN-2" className="text-[10px]"></p>
                                </div>
                                <p id="DIA-2" className="PRONS-DIAS
                            text-xs
                            text-end">Mañana</p>
                            </li>

                            <li data-aos="zoom-in" data-aos-duration="800" data-aos-delay="1400" className="
                            grid grid-cols-3 grid-rows-1
                            items-center justify-center
                            p-2
                            rounded-2xl">
                                <div className="flex flex-col">
                                    <span id="icon-3"></span>
                                    <h1 id="CLIMA-3" className="text-[10px]">❓</h1>
                                </div>
                                <div className="
                                flex flex-col
                                text-end">
                                    <p id="TEMP-MAX-3" className="text-[10px]"></p>
                                    <p id="TEMP-MIN-3" className="text-[10px]"></p>
                                </div>
                                <p id="DIA-3" className="PRONS-DIAS
                                text-xs
                                text-end">P.Mañana</p>
                            </li>

                            <li data-aos="zoom-in" data-aos-duration="800" data-aos-delay="1600" className="
                            grid grid-cols-3 grid-rows-1
                            items-center justify-center
                            p-2
                            rounded-2xl">
                                <div className="flex flex-col">
                                    <span id="icon-4"></span>
                                    <h1 id="CLIMA-4" className="text-[10px]">❓</h1>
                                </div>
                                <div className="
                                flex flex-col
                                text-end">
                                    <p id="TEMP-MAX-4" className="text-[10px]"></p>
                                    <p id="TEMP-MIN-4" className="text-[10px]"></p>
                                </div>
                                <p id="DIA-4" className="PRONS-DIAS
                                text-xs
                                text-end">T.P.Mañana</p>
                            </li>
                        </ul>




                        {/* MAPA */}
                        <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="1000" className="CONT-MAPA
                        col-span-2 col-start-2
                        rounded-4xl
                        overflow-hidden">
                            <iframe className="MAPA 
                            w-[100%]
                            h-[100%]"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74312.76418935676!2d-58.48864904639159!3d-34.5993259116147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3b4ef90cbd%3A0xa0b3812e88e88e87!2sBuenos%20Aires%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1743523587463!5m2!1ses-419!2sar"
                                loading="lazy"
                                title="Mapa de ubicación de la empresa">
                            </iframe>
                        </div>
                    </section>
                </div>
            </div>
            <Api key={apiKey} />

        </div>
    )
}

export default Estructura;