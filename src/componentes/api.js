import { useEffect } from "react";

const iconos = {
    0: "☀️",    // Cielo despejado
    1: "🌤️",   // Mayormente despejado
    2: "⛅",    // Parcialmente nublado
    3: "☁️",    // Nublado
    45: "🌫️",  // Neblina
    48: "🌫️",  // Neblina con escarcha
    51: "🌦️",  // Llovizna ligera
    53: "🌦️",  // Llovizna moderada
    55: "🌧️",  // Llovizna densa
    56: "🌧️",  // Llovizna helada ligera
    57: "🌧️",  // Llovizna helada densa
    61: "🌦️",  // Lluvia ligera
    63: "🌧️",  // Lluvia moderada
    65: "🌧️",  // Lluvia intensa
    66: "🌧️",  // Lluvia helada ligera
    67: "🌧️",  // Lluvia helada intensa
    71: "🌨️",  // Nevadas ligeras
    73: "🌨️",  // Nevadas moderadas
    75: "❄️",   // Nevadas intensas
    77: "🌨️",  // Gránulos de nieve
    80: "🌦️",  // Chubascos ligeros
    81: "🌧️",  // Chubascos moderados
    82: "⛈️",  // Chubascos violentos
    85: "🌨️",  // Chubascos de nieve ligeros
    86: "❄️",   // Chubascos de nieve intensos
    95: "⛈️",  // Tormenta (ligera o moderada)
    96: "⛈️",  // Tormenta con granizo ligero
    99: "⛈️"   // Tormenta con granizo intenso
};

const espesificacion = {
    0: "Cielo despejado",
    1: "Mayormente despejado",
    2: "Parcialmente nublado",
    3: "Nublado",
    45: "Neblina",
    48: "Neblina con escarcha",
    51: "Llovizna ligera",
    53: "Llovizna moderada",
    55: "Llovizna densa",
    56: "Llovizna helada ligera",
    57: "Llovizna helada densa",
    61: "Lluvia ligera",
    63: "Lluvia moderada",
    65: "Lluvia intensa",
    66: "Lluvia helada ligera",
    67: "Lluvia helada intensa",
    71: "Nevadas ligeras",
    73: "Nevadas moderadas",
    75: "Nevadas intensas",
    77: "Gránulos de nieve",
    80: "Chubascos ligeros",
    81: "Chubascos moderados",
    82: "Chubascos violentos",
    85: "Chubascos de nieve ligeros",
    86: "Chubascos de nieve intensos",
    95: "Tormenta (ligera o moderada)",
    96: "Tormenta con granizo ligero",
    99: "Tormenta con granizo intenso"
}










// ---------- APIS -----------
function clima_actual() {
    const url_clima_actual = "https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&hourly=precipitation_probability&current=temperature_2m,weather_code&timezone=auto"

    // clima actual
    const TEMPERATURA_ACTUAL_DOM = document.getElementById("CLIMA-ACTUAL");
    const ICONO_CLIMA_ACTUAL_DOM = document.getElementById("ICONO-CLIMA-ACTUAL")
    const RESUMEN_DOM = document.getElementById("resumen");
    const PROBABILIDAD_LLUVIA_DOM = document.getElementById("ProbabilidadDeLluvia");

    fetch(url_clima_actual)
        .then(response => {
            if (!response.ok) {
                throw new Error(`❌ Error al acceder a la API. Código de estado: ${response.status}`);
            }
            return response.json();
        })
        .then(dato => {
            // datos obtenidos:
            const temperatura_actual = dato.current.temperature_2m;
            const codigo_num_clima = dato.current.weather_code;
            const probabilidad_lluvia = dato.hourly.precipitation_probability;

            // aplicando datos Clima actual
            TEMPERATURA_ACTUAL_DOM.textContent = temperatura_actual + "°C";
            ICONO_CLIMA_ACTUAL_DOM.textContent = iconos[codigo_num_clima];
            RESUMEN_DOM.textContent = espesificacion[codigo_num_clima];
            PROBABILIDAD_LLUVIA_DOM.textContent = probabilidad_lluvia[0] + "%";
            console.log("✅ API: clima actual cargado correctamente");
        })
        .catch(error => {
            console.error("❌ Error al obtener los datos del clima:", error.message);
        });
}


function informacion_clima() {
    const url_informacion_clima = "https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&current=relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m&timezone=auto"

    // info
    const HUBICACION_DOM = document.getElementById("HUBICACION");
    const HUMEDAD_DOM = document.getElementById("HUMEDAD");
    const VIENTO_DOM = document.getElementById("VIENTO");
    const DIRECCION_DEL_VIENTO = document.getElementById("D.VIENTO");

    fetch(url_informacion_clima)
        .then(response => {
            if (!response.ok) {
                throw new Error(`❌ Error al acceder a la API. Código de estado: ${response.status}`);
            }
            return response.json();
        })
        .then(dato => {
            // datos obtenidos:
            const hubicacion = dato.timezone;
            const humedad = dato.current.relative_humidity_2m;
            const viento = dato.current.wind_speed_10m;
            const direccion_viento = dato.current.wind_direction_10m;

            // aplicando datos
            HUBICACION_DOM.textContent = hubicacion;
            HUMEDAD_DOM.textContent = humedad + "%";
            VIENTO_DOM.textContent = viento + " KMh";
            DIRECCION_DEL_VIENTO.textContent = direccion_viento + "°";

            console.log("✅ API: informacion del clima cargado correctamente");
        })
        .catch(error => {
            console.error("❌ Error al obtener los datos del clima:", error.message);
        });
}




function diasPrevistos() {
    const url_dias_previstos = "https://api.open-meteo.com/v1/forecast?latitude=-34.6131&longitude=-58.3772&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto";

    const TEMP_MAX = document.getElementById("TEMP-MAX");
    const TEMP_MNM = document.getElementById("TEMP-MIN");
    const TEMP_MAX_2 = document.getElementById("TEMP-MAX-2");
    const TEMP_MNM_2 = document.getElementById("TEMP-MIN-2");
    const TEMP_MAX_3 = document.getElementById("TEMP-MAX-3");
    const TEMP_MNM_3 = document.getElementById("TEMP-MIN-3");
    const TEMP_MAX_4 = document.getElementById("TEMP-MAX-4");
    const TEMP_MNM_4 = document.getElementById("TEMP-MIN-4");

    // dias
    const CLIMA_1 = document.getElementById("CLIMA-1")
    const CLIMA_2 = document.getElementById("CLIMA-2")
    const CLIMA_3 = document.getElementById("CLIMA-3")
    const CLIMA_4 = document.getElementById("CLIMA-4")

    //iconos
    const ICONO_1 = document.getElementById("icon-1");
    const ICONO_2 = document.getElementById("icon-2");
    const ICONO_3 = document.getElementById("icon-3");
    const ICONO_4 = document.getElementById("icon-4");

    fetch(url_dias_previstos)
        .then(response => {
            if (!response.ok) {
                throw new Error(`❌ Error al acceder a la API. Código de estado: ${response.status}`);
            }
            return response.json();
        })
        .then(dato => {
            // datos días previstos obtenidos
            const codigo_num_dias = dato.daily.weather_code;
            const temp_mxm = dato.daily.temperature_2m_max;
            const temp_min = dato.daily.temperature_2m_min;

            // aplicando datos
            CLIMA_1.textContent = espesificacion[codigo_num_dias[0]];
            ICONO_1.textContent = iconos[codigo_num_dias[0]];
            TEMP_MAX.textContent = "T.max: " + temp_mxm[0];
            TEMP_MNM.textContent = "T.min: " + temp_min[0];

            CLIMA_2.textContent = espesificacion[codigo_num_dias[1]];
            ICONO_2.textContent = iconos[codigo_num_dias[1]];
            TEMP_MAX_2.textContent = "T.max: " + temp_mxm[1];
            TEMP_MNM_2.textContent = "T.min: " + temp_min[1];

            CLIMA_3.textContent = espesificacion[codigo_num_dias[2]];
            ICONO_3.textContent = iconos[codigo_num_dias[2]];
            TEMP_MAX_3.textContent = "T.max: " + temp_mxm[2];
            TEMP_MNM_3.textContent = "T.min: " + temp_min[2];

            CLIMA_4.textContent = espesificacion[codigo_num_dias[3]];
            ICONO_4.textContent = iconos[codigo_num_dias[3]];
            TEMP_MAX_4.textContent = "T.max: " + temp_mxm[3];
            TEMP_MNM_4.textContent = "T.min: " + temp_min[3];

            console.log("✅ API: días previstos cargado correctamente");
        })
        .catch(error => {
            console.error("❌ Error al obtener los datos del clima:", error.message);
        });

}




function Api() {
    useEffect(() => {
        clima_actual();
        informacion_clima();
        diasPrevistos();
    }, []);

    return null;
}

export default Api;