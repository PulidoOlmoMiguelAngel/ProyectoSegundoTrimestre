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