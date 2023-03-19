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
  },
  {
    nombre: "Mariel C",
    genero: "Femenino",
    edad: 30,
    trabajoIT: false,
    tieneTrabajo: true,
    hablaEnClase: true,
    moquero: false,
    fama: false,
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



// ------------------ Pagina hombre o mujer ---------------

let opcSelec = "";

let classBody = document.querySelector("body").className;
let opc1 = document.getElementById("opc1");
let opc2 = document.getElementById("opc2");
let btnCerrar = document.getElementById("btnCerrar");

console.log(saldoPersonas.length);

if (opc1 || opc2) {
  let h1Class = document.querySelector(".abierta") ? "abierta" : "";
  if (h1Class == "abierta") {
    opc1.addEventListener("click", (e) => {
      cont++;
      opc2.disabled = true;
      opcSelec = opc1.innerText == "Si" ? true : "";
      validacion(classBody);
      //window.location = paginas[cont];
    });
    opc2.addEventListener("click", (e) => {
      cont++;
      opc1.disabled = true;
      opcSelec = opc2.innerText == "No" ? false : "";
      validacion(classBody);
      window.location = paginas[cont];
    });
  } else {
    cont++;
    opc1.addEventListener("click", (e) => {
      console.log("entra en click pregunta cerrada");
      console.log('saldo personas dentro de evento click cerrada',saldoPersonas);
      opc2.disabled = true;
      opcSelec = opc1.innerText;
      console.log('clase boddy ' + classBody);
      validacion(classBody);
      
      //window.location = paginas[cont];
    });
    opc2.addEventListener("click", (e) => {
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

//   if (saldoPersonas.length == null) {
//     personas.forEach((persona) => {
//       if (persona[validacion] == opcSelec) {
//         saldoPersonas.push(persona);
//         sessionStorage.setItem("saldoPersonas", JSON.stringify(saldoPersonas));
//       }
//     });
//   } else {
//     if (validacion == "edad") {
//       if (opcSelec) {
//         saldoPersonas.forEach((persona) => {
//           if (persona.edad >= 30) {
//             saldoPersonas.push(persona);
//             sessionStorage.setItem(
//               "saldoPersonas",
//               JSON.stringify(saldoPersonas)
//             );
//           }
//         });
//       }
//     }
//   }

try{
    if(saldoPersonas.length != 0){
        if (validacion == "edad") {
                  if (opcSelec) {
                    saldoPersonas.forEach((persona) => {
                      if (persona.edad >= 30) {
                        saldoPersonas.push(persona);
                        sessionStorage.setItem(
                          "saldoPersonas",
                          JSON.stringify(saldoPersonas)
                        );
                      }
                    });
                  }
                }
    }else{
        console.log('entra else dentro del try, osea que lenght = 0');
        personas.forEach((persona) => {
                  if (persona[validacion] == opcSelec) {
                    saldoPersonas.push(persona);
                    sessionStorage.setItem("saldoPersonas", JSON.stringify(saldoPersonas));
                  }
                });
                console.log(saldoPersonas);
    }
}catch{
    console.log('valor saldoPersonas' + saldoPersonas);
    personas.forEach((persona) => {
        console.log('entra validacion del catch');
              if (persona[validacion] == opcSelec) {
                saldoPersonas.push(persona);
                sessionStorage.setItem("saldoPersonas", JSON.stringify(saldoPersonas));
              }
            });
}

}

if (btnCerrar) {
  btnCerrar.addEventListener("click", (e) => {
    sessionStorage.removeItem("saldoPersonas");
    sessionStorage.removeItem("cont");
    window.location = "/index.html";
  });
}
