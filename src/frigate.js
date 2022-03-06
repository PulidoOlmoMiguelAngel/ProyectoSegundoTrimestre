db.frigate.insertMany([
    {
        _id: 1,
        Nombre: "Crucifier",
        Faccion: ["Amarr Empire"],
        Nivel: 1,
        Atributos: 
            {Defensa:{
                Escudo: 250,
                Armadura: 400,
                Estructura: 350
            },
            Ataque: 40
        },
        Fecha_creacion: new Date("2100-01-01"),
        Precio: 419000
    },
    {_id: 2, Nombre: "Magnate", Faccion: ["Amarr Empire"], Nivel: 1, Atributos: {Defensa:{ Escudo: 250, Armadura: 350, Estructura: 250}, Ataque: 30}, Fecha_creacion: new Date("2102-07-05"), Precio: 567000},
    {_id: 3, Nombre: "Inquisitor", Faccion: ["Amarr Empire"], Nivel: 1, Atributos: {Defensa:{ Escudo: 225, Armadura: 500, Estructura: 330}, Ataque: 30}, Fecha_creacion: new Date("2107-10-02"), Precio: 508000},
    {_id: 4, Nombre: "Anathema", Faccion: ["Amarr Empire"], Nivel: 2, Atributos: {Defensa:{ Escudo: 422, Armadura: 528, Estructura: 422}, Ataque: 60}, Fecha_creacion: new Date("2127-12-07"), Precio: 24600000},
    {_id: 5, Nombre: "Purifier", Faccion: ["Amarr Empire"], Nivel: 2, Atributos: {Defensa:{ Escudo: 350, Armadura: 600, Estructura: 450}, Ataque: 300}, Fecha_creacion: new Date("2115-01-11"), Precio: 24600000},
    {_id: 6, Nombre: "Condor", Faccion: ["Caldari State"], Nivel: 1, Atributos: {Defensa:{ Escudo: 400, Armadura: 500, Estructura: 250}, Ataque: 35}, Fecha_creacion: new Date("2102-05-19"), Precio: 411000},
    {_id: 7, Nombre: "Heron", Faccion: ["Caldari State"], Nivel: 1, Atributos: {Defensa:{ Escudo: 400, Armadura: 200, Estructura: 200}, Ataque: 20}, Fecha_creacion: new Date("2108-06-01"), Precio: 551000},
    {_id: 8, Nombre: "Merlin", Faccion: ["Caldari State"], Nivel: 1, Atributos: {Defensa:{ Escudo: 500, Armadura: 350, Estructura: 400}, Ataque: 35}, Fecha_creacion: new Date("2110-10-13"), Precio: 217000},
    {_id: 9, Nombre: "Raptor", Faccion: ["Caldari State"], Nivel: 2, Atributos: {Defensa:{ Escudo: 525, Armadura: 350, Estructura: 425}, Ataque: 60}, Fecha_creacion: new Date("2104-03-22"), Precio: 23201000},
    {_id: 10, Nombre: "Manticore", Faccion: ["Caldari State"], Nivel: 2, Atributos: {Defensa:{ Escudo: 625, Armadura: 350, Estructura: 400}, Ataque: 300}, Fecha_creacion: new Date("2118-04-01"), Precio: 27300000},
    {_id: 11, Nombre: "Atron", Faccion: ["Gallente Federation"], Nivel: 1, Atributos: {Defensa:{ Escudo: 300, Armadura: 350, Estructura: 400}, Ataque: 30}, Fecha_creacion: new Date("2108-09-21"), Precio: 462000},
    {_id: 12, Nombre: "Ares", Faccion: ["Gallente Federation"], Nivel: 2, Atributos: {Defensa:{ Escudo: 300, Armadura: 400, Estructura: 625}, Ataque: 55}, Fecha_creacion: new Date("2115-08-27"), Precio: 17200000},
    {_id: 13, Nombre: "Nemesis", Faccion: ["Gallente Federation"], Nivel: 2, Atributos: {Defensa:{ Escudo: 400, Armadura: 475, Estructura: 650}, Ataque: 300}, Fecha_creacion: new Date("2117-11-09"), Precio: 22000000},
    {_id: 14, Nombre: "Rifter", Faccion: ["Minmatar Republic"], Nivel: 1, Atributos: {Defensa:{ Escudo: 450, Armadura: 450, Estructura: 350}, Ataque: 25}, Fecha_creacion: new Date("2104-09-23"), Precio: 332000},
    {_id: 15, Nombre: "Probe", Faccion: ["Minmatar Republic"], Nivel: 1, Atributos: {Defensa:{ Escudo: 300, Armadura: 300, Estructura: 225}, Ataque: 20}, Fecha_creacion: new Date("2104-03-29"), Precio: 565000},
    {_id: 16, Nombre: "Stiletto", Faccion: ["Minmatar Republic"], Nivel: 2, Atributos: {Defensa:{ Escudo: 400, Armadura: 400, Estructura: 500}, Ataque: 60}, Fecha_creacion: new Date("2114-07-23"), Precio: 22700000},
    {_id: 17, Nombre: "Hound", Faccion: ["Minmatar Republic"], Nivel: 2, Atributos: {Defensa:{ Escudo: 550, Armadura: 425, Estructura: 350}, Ataque: 300}, Fecha_creacion: new Date("2118-01-01"), Precio: 24600000},
    {_id: 18, Nombre: "Worm", Faccion: ["Gallente Federation", "Caldari State"], Nivel: 3, Atributos: {Defensa:{ Escudo: 830, Armadura: 500, Estructura: 620}, Ataque: 125}, Fecha_creacion: new Date("2120-09-23"), Precio: 93900000},
    {_id: 19, Nombre: "Succubus", Faccion: ["Amarr Empire", "Caldari State"], Nivel: 3, Atributos: {Defensa:{ Escudo: 650, Armadura: 550, Estructura: 540}, Ataque: 145}, Fecha_creacion: new Date("2122-03-12"), Precio: 93400000},
    {_id: 20, Nombre: "Cruor", Faccion: ["Amarr Empire", "Minmatar Republic"], Nivel: 3, Atributos: {Defensa:{ Escudo: 480, Armadura: 740, Estructura: 580}, Ataque: 135}, Fecha_creacion: new Date("2122-07-21"), Precio: 72300000},
    {_id: 21, Nombre: "Dramiel", Faccion: ["Gallente Federation", "Minmatar Republic"], Nivel: 3, Atributos: {Defensa:{ Escudo: 590, Armadura: 590, Estructura: 520}, Ataque: 135}, Fecha_creacion: new Date("2123-11-10"), Precio: 89700000},
    {_id: 22, Nombre: "Daredevil", Faccion: ["Gallente Federation", "Minmatar Republic"], Nivel: 3, Atributos: {Defensa:{ Escudo: 530, Armadura: 560, Estructura: 630}, Ataque: 145}, Fecha_creacion: new Date("2121-09-10"), Precio: 115000000},
]);