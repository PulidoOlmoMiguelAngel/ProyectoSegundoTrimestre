// db.frigate.drop()
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

// db.cruiser.drop()
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

// db.battleship.drop()
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

// db.pilotos.drop()
db.pilotos.insertMany([
    {
        _id: 1,
        Nombre: "Miguel Angel",
        Edad: 22,
        Atributos: {
            Defensa:{ 
                Escudo: 2500, 
                Armadura: 1000, 
                Estructura: 2000
            }, 
            Ataque: 1200
        },
        PilotoDe: ["Panther","Kronos","Paladin","Rattlesnake","Phantasm","Cerberus","Loki","Ares","Manticore"],
    },
    {_id: 2, Nombre: "Kiko", Atributos: {Defensa: {Escudo: 1500, Armadura: 2000, Estructura: 2000}, Ataque: 1100}, PilotoDe: ["Machariel","Redeemer","Muninn","Rokh","Omen","Raptor","Condor"]},
    {_id: 3, Nombre: "Toni", Atributos: {Defensa: {Escudo: 1600, Armadura: 1900, Estructura: 2000}, Ataque: 1100}, PilotoDe: ["Golem","Sin","Typhoon"]},
    {_id: 4, Nombre: "Raul", Atributos: {Defensa: {Escudo: 1400, Armadura: 1900, Estructura: 2300}, Ataque: 1000}, PilotoDe: ["Proteus","Osprey","Ishtar","Dramiel","Anathema"]},
    {_id: 5, Nombre: "Adri", Atributos: {Defensa: {Escudo: 1600, Armadura: 2100, Estructura: 1800}, Ataque: 1300}, PilotoDe: ["Cruor","Legion","Daredevil","Magnate"]},
    {_id: 6, Nombre: "Marina", Atributos: {Defensa: {Escudo: 1900, Armadura: 1700, Estructura: 2100}, Ataque: 1000}},
    {_id: 7, Nombre: "Salva", Atributos: {Defensa: {Escudo: 2000, Armadura: 1900, Estructura: 1800}, Ataque: 1200}, PilotoDe: ["Megathron","Templest","Rupture","Heron"]},
])