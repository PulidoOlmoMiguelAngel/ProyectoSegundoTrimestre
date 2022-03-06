db.cruiser.insertMany([
    {
        _id: 1,
        Nombre: "Maller",
        Faccion: ["Amarr Empire"],
        Nivel: 1,
        Atributos: 
            {Defensa:{
                Escudo: 1000,
                Armadura: 2300,
                Estructura: 1700
            },
            Ataque: 240
        },
        Fecha_creacion: new Date("2100-01-01"),
        Precio: 10700000
    },
    {_id: 2, Nombre: "Omen", Faccion: ["Amarr Empire"], Nivel: 1, Atributos: {Defensa:{ Escudo: 1200, Armadura: 1700, Estructura: 1700}, Ataque: 250}, Fecha_creacion: new Date("2102-07-05"), Precio: 11600000},
    {_id: 3, Nombre: "Arbitrator", Faccion: ["Amarr Empire"], Nivel: 1, Atributos: {Defensa:{ Escudo: 1100, Armadura: 1500, Estructura: 1600}, Ataque: 300}, Fecha_creacion: new Date("2107-10-02"), Precio: 9000000},
    {_id: 4, Nombre: "Devoter", Faccion: ["Amarr Empire"], Nivel: 2, Atributos: {Defensa:{ Escudo: 1100, Armadura: 2400, Estructura: 1800}, Ataque: 500}, Fecha_creacion: new Date("2127-12-07"), Precio: 274000000},
    {_id: 5, Nombre: "Legion", Faccion: ["Amarr Empire"], Nivel: 3, Atributos: {Defensa:{ Escudo: 1800, Armadura: 2900, Estructura: 1800}, Ataque: 900}, Fecha_creacion: new Date("2115-01-11"), Precio: 18600000},
    {_id: 6, Nombre: "Caracal", Faccion: ["Caldari State"], Nivel: 1, Atributos: {Defensa:{ Escudo: 1700, Armadura: 1200, Estructura: 1400}, Ataque: 350}, Fecha_creacion: new Date("2102-05-19"), Precio: 11300000},
    {_id: 7, Nombre: "Moa", Faccion: ["Caldari State"], Nivel: 1, Atributos: {Defensa:{ Escudo: 2500, Armadura: 1000, Estructura: 1500}, Ataque: 250}, Fecha_creacion: new Date("2108-06-01"), Precio: 10600000},
    {_id: 8, Nombre: "Osprey", Faccion: ["Caldari State"], Nivel: 1, Atributos: {Defensa:{ Escudo: 1650, Armadura: 1000, Estructura: 1450}, Ataque: 250}, Fecha_creacion: new Date("2110-10-13"), Precio: 9000000},
    {_id: 9, Nombre: "Cerberus", Faccion: ["Caldari State"], Nivel: 2, Atributos: {Defensa:{ Escudo: 2000, Armadura: 1200, Estructura: 1400}, Ataque: 500}, Fecha_creacion: new Date("2104-03-22"), Precio: 211000000},
    {_id: 10, Nombre: "Tengu", Faccion: ["Caldari State"], Nivel: 3, Atributos: {Defensa:{ Escudo: 2600, Armadura: 2100, Estructura: 1700}, Ataque: 850}, Fecha_creacion: new Date("2118-04-01"), Precio: 197000000},
    {_id: 11, Nombre: "Vexor", Faccion: ["Gallente Federation"], Nivel: 1, Atributos: {Defensa:{ Escudo: 1100, Armadura: 2000, Estructura: 2000}, Ataque: 350}, Fecha_creacion: new Date("2108-09-21"), Precio: 11300000},
    {_id: 12, Nombre: "Ishtar", Faccion: ["Gallente Federation"], Nivel: 2, Atributos: {Defensa:{ Escudo: 1400, Armadura: 1600, Estructura: 2300}, Ataque: 450}, Fecha_creacion: new Date("2115-08-27"), Precio: 194000000},
    {_id: 13, Nombre: "Proteus", Faccion: ["Gallente Federation"], Nivel: 3, Atributos: {Defensa:{ Escudo: 1800, Armadura: 2500, Estructura: 2200}, Ataque: 850}, Fecha_creacion: new Date("2117-11-09"), Precio: 184000000},
    {_id: 14, Nombre: "Rupture", Faccion: ["Minmatar Republic"], Nivel: 1, Atributos: {Defensa:{ Escudo: 1500, Armadura: 1800, Estructura: 1500}, Ataque: 250}, Fecha_creacion: new Date("2104-09-23"), Precio: 10100000},
    {_id: 15, Nombre: "Bellicose", Faccion: ["Minmatar Republic"], Nivel: 1, Atributos: {Defensa:{ Escudo: 1400, Armadura: 1200, Estructura: 1500}, Ataque: 300}, Fecha_creacion: new Date("2104-03-29"), Precio: 11500000},
    {_id: 16, Nombre: "Muninn", Faccion: ["Minmatar Republic"], Nivel: 2, Atributos: {Defensa:{ Escudo: 1580, Armadura: 2150, Estructura: 1400}, Ataque: 400}, Fecha_creacion: new Date("2114-07-23"), Precio: 205000000},
    {_id: 17, Nombre: "Loki", Faccion: ["Minmatar Republic"], Nivel: 3, Atributos: {Defensa:{ Escudo: 2500, Armadura: 2500, Estructura: 1000}, Ataque: 1000}, Fecha_creacion: new Date("2118-01-01"), Precio: 201000000},
    {_id: 18, Nombre: "Gila", Faccion: ["Gallente Federation", "Caldari State"], Nivel: 4, Atributos: {Defensa:{ Escudo: 3200, Armadura: 2200, Estructura: 2500}, Ataque: 500}, Fecha_creacion: new Date("2120-09-23"), Precio: 339000000},
    {_id: 19, Nombre: "Phantasm", Faccion: ["Amarr Empire", "Caldari State"], Nivel: 4, Atributos: {Defensa:{ Escudo: 2700, Armadura: 2200, Estructura: 2100}, Ataque: 600}, Fecha_creacion: new Date("2122-03-12"), Precio: 370000000},
    {_id: 20, Nombre: "Ashimmu", Faccion: ["Amarr Empire", "Minmatar Republic"], Nivel: 4, Atributos: {Defensa:{ Escudo: 2300, Armadura: 3000, Estructura: 2400}, Ataque: 550}, Fecha_creacion: new Date("2122-07-21"), Precio: 177000000},
    {_id: 21, Nombre: "Cynabal", Faccion: ["Gallente Federation", "Minmatar Republic"], Nivel: 4, Atributos: {Defensa:{ Escudo: 2400, Armadura: 2300, Estructura: 2100}, Ataque: 600}, Fecha_creacion: new Date("2123-11-10"), Precio: 285000000},
    {_id: 22, Nombre: "Vigilant", Faccion: ["Gallente Federation", "Minmatar Republic"], Nivel: 4, Atributos: {Defensa:{ Escudo: 2200, Armadura: 2500, Estructura: 2700}, Ataque: 500}, Fecha_creacion: new Date("2121-09-10"), Precio: 435000000},
]);