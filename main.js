// objeto literal con las personas y sus atributos

const personas = [
  {
    nombre: "Kevin",
    genero: "Masculino",
    edad: 26,
    trabajoIT: false,
    tieneTrabajo: true,
    hablaEnClase: true,
    moquero: true,
    fama: true,
    foto: ''
  },
  {
    nombre: "Juane",
    genero: "Masculino",
    edad: 22,
    trabajoIT: false,
    tieneTrabajo: false,
    hablaEnClase: false,
    moquero: false,
    fama: true,
    foto: ''
  },
  {
    nombre: "Angel",
    genero: "Masculino",
    edad: 24,
    trabajoIT: true,
    tieneTrabajo: true,
    hablaEnClase: true,
    moquero: false,
    fama: false,
    foto: ''
  },
  {
    nombre: "Mariel C",
    genero: "Femenino",
    edad: 29,
    trabajoIT: false,
    tieneTrabajo: true,
    hablaEnClase: true,
    moquero: false,
    fama: false,
    foto: ''
  },
  {
    nombre: "Anthony",
    genero: "Masculino",
    edad: 15,
    trabajoIT: false,
    tieneTrabajo: false,
    hablaEnClase: true,
    moquero: true,
    fama: false,
    foto: ''
  },
  {
    nombre: "Gi",
    genero: "Femenino",
    edad: 32,
    trabajoIT: false,
    tieneTrabajo: true,
    hablaEnClase: true,
    moquero: false,
    fama: false,
    foto: ''
  },
  {
    nombre: "Mati N",
    genero: "Masculino",
    edad: 32,
    trabajoIT: true,
    tieneTrabajo: true,
    hablaEnClase: true,
    moquero: false,
    fama: false,
    foto: ''
  },
];

const paginas = ["/hombreOMujer.html", "./masDe30.html"];
// si las variables existen traerlas desde el storage, sino crearlas

let cont = 0;
let saldoPersonas = [];

// ---------------------Pagina de Inicio-------------------

let btnJugar = document.getElementById("jugar");
if (btnJugar) {
  btnJugar.addEventListener("click", (e) => {
    sessionStorage.removeItem("saldoPersonas");
    sessionStorage.removeItem("cont");
    window.location = "./hombreOMujer.html";
  });
}

// ------------------ Pagina de preguntas ---------------

// esta variable se usa para luego validar qué opción se seleccionó
// Se va modificando en cada ciclo o cada repetición en la diferentes preguntas
let opcSelec = "";

// Variables necesarias para trabajar con los datos del hmtml
let classBody = document.querySelector("body").className; // esta variable es para extraer la clase del body, para saber qué pregunta es la que va, y luego se usa como parámetro para saber qué validar
let opc1 = document.getElementById("opc1");
let opc2 = document.getElementById("opc2");
let btnCerrar = document.getElementById("btnCerrar");

console.log(saldoPersonas.length);


if(saldoPersonas.length == 1){}


// Esto es porque en algunos páginas no están algunas de estas opciones y me tira error. Entonces valido antes y si existen, en la página correspondiente, se ejecturá el código. Y en las páginas donde no estén, no
if (opc1 || opc2) {
  // ternario para asignarle un valor a la variable dependiende si existe o no
  let h1Class = document.querySelector(".abierta") ? "abierta" : "";
  if (h1Class == "abierta") {
    opc1.addEventListener("click", (e) => {
      console.log("entra pregunta abierta si");
      saldoPersonas = JSON.parse(sessionStorage.getItem("saldoPersonas"));
      console.log("saldoPersonas ");
      console.log(saldoPersonas);
      sessionStorage.removeItem("saldoPersonas");
      cont++;
      opc2.disabled = true;
      opcSelec = opc1.innerText == "Si" ? true : "";
      validacion(classBody);
      //window.location = paginas[cont];
    });
    opc2.addEventListener("click", (e) => {
      console.log("entra pregunta abierta no");
      saldoPersonas = JSON.parse(sessionStorage.getItem("saldoPersonas"));
      sessionStorage.removeItem("saldoPersonas");
      cont++;
      opc1.disabled = true;
      opcSelec = opc2.innerText == "No" ? false : "";
      validacion(classBody);
      //window.location = paginas[cont];
    });
  } else {
    
    opc1.addEventListener("click", (e) => {
      console.log("entra en click pregunta cerrada masculino");
      cont++;
      opc2.disabled = true;
      opcSelec = opc1.innerText;
      console.log("clase boddy " + classBody);
      validacion(classBody);

      window.location = paginas[cont];
    });
    opc2.addEventListener("click", (e) => {
        console.log('entra pregunta cerrada femenino');
      cont++;
      opc1.disabled = true;
      opcSelec = opc2.innerText;
      validacion(classBody);
      window.location = paginas[cont];
    });
  }
}

// ----------------- Pagina de edad -------------

let validacion = (validacion) => {
  try {
    if (saldoPersonas.length != 0) {
      console.log("entro validacion length diferente de cero");
      if (validacion == "edad") {
        console.log("entra if de edad");
        if (opcSelec) {
          console.log("entra if opcSeleccionada");
          let resultado = saldoPersonas.filter((persona) => persona.edad >= 30);
          saldoPersonas = resultado;
          sessionStorage.setItem(
            "saldoPersonas",
            JSON.stringify(saldoPersonas)
          );
        } else {
          console.log("entra if opcSelec false");
          let resultado = saldoPersonas.filter((persona) => persona.edad < 30);
          saldoPersonas = resultado;
          sessionStorage.setItem(
            "saldoPersonas",
            JSON.stringify(saldoPersonas)
          );
        }
      }
    } else {
      console.log("entra else dentro del try, osea que lenght = 0");
      personas.forEach((persona) => {
        if (persona[validacion] == opcSelec) {
          saldoPersonas.push(persona);
          sessionStorage.setItem(
            "saldoPersonas",
            JSON.stringify(saldoPersonas)
          );
        }
      });
      console.log(saldoPersonas);
    }
  } catch {
    console.log("valor saldoPersonas" + saldoPersonas);
    personas.forEach((persona) => {
      console.log("entra validacion del catch");
      if (persona[validacion] == opcSelec) {
        saldoPersonas.push(persona);
        sessionStorage.setItem("saldoPersonas", JSON.stringify(saldoPersonas));
      }
    });
  }
};

if (btnCerrar) {
  btnCerrar.addEventListener("click", (e) => {
    sessionStorage.removeItem("saldoPersonas");
    sessionStorage.removeItem("cont");
    window.location = "/index.html";
  });
}
