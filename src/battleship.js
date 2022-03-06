db.battleship.insertMany([
    {
        _id: 1,
        Nombre: "Apocalypse",
        Faccion: ["Amarr Empire"],
        Nivel: 1,
        Atributos: 
            {Defensa:{
                Escudo: 6600,
                Armadura: 7700,
                Estructura: 7700
            },
            Ataque: 1100
        },
        Fecha_creacion: new Date("2100-01-01"),
        Precio: 297000000
    },
    {_id: 2, Nombre: "Armageddon", Faccion: ["Amarr Empire"], Nivel: 1, Atributos: {Defensa:{ Escudo: 7500, Armadura: 9400, Estructura: 8800}, Ataque: 1200}, Fecha_creacion: new Date("2102-07-05"), Precio: 282000000},
    {_id: 3, Nombre: "Abaddon", Faccion: ["Amarr Empire"], Nivel: 1, Atributos: {Defensa:{ Escudo: 7700, Armadura: 9400, Estructura: 8800}, Ataque: 1150}, Fecha_creacion: new Date("2107-10-02"), Precio: 303000000},
    {_id: 4, Nombre: "Redeemer", Faccion: ["Amarr Empire"], Nivel: 2, Atributos: {Defensa:{ Escudo: 4400, Armadura: 5400, Estructura: 5000}, Ataque: 1500}, Fecha_creacion: new Date("2127-12-07"), Precio: 1080000000},
    {_id: 5, Nombre: "Paladin", Faccion: ["Amarr Empire"], Nivel: 2, Atributos: {Defensa:{ Escudo: 7000, Armadura: 8800, Estructura: 8500}, Ataque: 1600}, Fecha_creacion: new Date("2115-01-11"), Precio: 1416000000},
    {_id: 6, Nombre: "Scorpion", Faccion: ["Caldari State"], Nivel: 1, Atributos: {Defensa:{ Escudo: 7700, Armadura: 6100, Estructura: 7200}, Ataque: 1150}, Fecha_creacion: new Date("2102-05-19"), Precio: 232000000},
    {_id: 7, Nombre: "Raven", Faccion: ["Caldari State"], Nivel: 1, Atributos: {Defensa:{ Escudo: 7700, Armadura: 6400, Estructura: 7100}, Ataque: 1050}, Fecha_creacion: new Date("2108-06-01"), Precio: 300000000},
    {_id: 8, Nombre: "Rokh", Faccion: ["Caldari State"], Nivel: 1, Atributos: {Defensa:{ Escudo: 9400, Armadura: 7700, Estructura: 8300}, Ataque: 1100}, Fecha_creacion: new Date("2110-10-13"), Precio: 289000000},
    {_id: 9, Nombre: "Golem", Faccion: ["Caldari State"], Nivel: 2, Atributos: {Defensa:{ Escudo: 8800, Armadura: 6700, Estructura: 7700}, Ataque: 1800}, Fecha_creacion: new Date("2104-03-22"), Precio: 1440000000},
    {_id: 10, Nombre: "Widow", Faccion: ["Caldari State"], Nivel: 2, Atributos: {Defensa:{ Escudo: 5400, Armadura: 4400, Estructura: 4400}, Ataque: 1600}, Fecha_creacion: new Date("2118-04-01"), Precio: 1100000000},
    {_id: 11, Nombre: "Megathron", Faccion: ["Gallente Federation"], Nivel: 1, Atributos: {Defensa:{ Escudo: 7000, Armadura: 7200, Estructura: 8300}, Ataque: 1200}, Fecha_creacion: new Date("2108-09-21"), Precio: 292000000},
    {_id: 12, Nombre: "Kronos", Faccion: ["Gallente Federation"], Nivel: 2, Atributos: {Defensa:{ Escudo: 7300, Armadura: 7900, Estructura: 9500}, Ataque: 1600}, Fecha_creacion: new Date("2115-08-27"), Precio: 1313000000},
    {_id: 13, Nombre: "Sin", Faccion: ["Gallente Federation"], Nivel: 2, Atributos: {Defensa:{ Escudo: 4400, Armadura: 5000, Estructura: 5400}, Ataque: 1800}, Fecha_creación: new Date("2117-11-09"), Precio: 990000000},
    {_id: 14, Nombre: "Typhoon", Faccion: ["Minmatar Republic"], Nivel: 1, Atributos: {Defensa:{ Escudo: 7200, Armadura: 6600, Estructura: 6600}, Ataque: 1300}, Fecha_creacion: new Date("2104-09-23"), Precio: 301000000},
    {_id: 15, Nombre: "Templest", Faccion: ["Minmatar Republic"], Nivel: 1, Atributos: {Defensa:{ Escudo: 7500, Armadura: 7700, Estructura: 7500}, Ataque: 1250}, Fecha_creacion: new Date("2104-03-29"), Precio: 297000000},
    {_id: 16, Nombre: "Panther", Faccion: ["Minmatar Republic"], Nivel: 2, Atributos: {Defensa:{ Escudo: 5000, Armadura: 4400, Estructura: 5000}, Ataque: 1700}, Fecha_creacion: new Date("2114-07-23"), Precio: 1120000000},
    {_id: 17, Nombre: "Vargur", Faccion: ["Minmatar Republic"], Nivel: 2, Atributos: {Defensa:{ Escudo: 8300, Armadura: 7300, Estructura: 6900}, Ataque: 1600}, Fecha_creacion: new Date("2118-01-01"), Precio: 1450000000},
    {_id: 18, Nombre: "Rattlesnake", Faccion: ["Gallente Federation", "Caldari State"], Nivel: 3, Atributos: {Defensa:{ Escudo: 14000, Armadura: 9900, Estructura: 11000}, Ataque: 2500}, Fecha_creacion: new Date("2120-09-23"), Precio: 1150000000},
    {_id: 19, Nombre: "Nighmare", Faccion: ["Amarr Empire", "Caldari State"], Nivel: 3, Atributos: {Defensa:{ Escudo: 11600, Armadura: 9500, Estructura: 9100}, Ataque: 2000}, Fecha_creacion: new Date("2122-03-12"), Precio: 1300000000},
    {_id: 20, Nombre: "Bhaalgorn", Faccion: ["Amarr Empire", "Minmatar Republic"], Nivel: 3, Atributos: {Defensa:{ Escudo: 11200, Armadura: 12000, Estructura: 10200}, Ataque: 2100}, Fecha_creacion: new Date("2122-07-21"), Precio: 770000000},
    {_id: 21, Nombre: "Machariel", Faccion: ["Gallente Federation", "Minmatar Republic"], Nivel: 3, Atributos: {Defensa:{ Escudo: 12300, Armadura: 11200, Estructura: 9100}, Ataque: 2600}, Fecha_creacion: new Date("2123-11-10"), Precio: 850000000},
    {_id: 22, Nombre: "Vindicator", Faccion: ["Gallente Federation", "Minmatar Republic"], Nivel: 3, Atributos: {Defensa:{ Escudo: 9700, Armadura: 10300, Estructura: 11500}, Ataque: 2300}, Fecha_creacion: new Date("2121-09-10"), Precio: 1460000000},
]);