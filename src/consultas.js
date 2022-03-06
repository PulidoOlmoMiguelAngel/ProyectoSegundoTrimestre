
/* 
    Queremos saber los puntos de defensa de todas las naves.
*/

db.battleship.aggregate([
    {
        $lookup: {
            from: "frigate",
            localField: "_id",
            foreignField: "_id",
            as: "arrayFrigate"
        }
    },
    {
        $lookup: {
            from: "cruiser",
            localField: "_id",
            foreignField: "_id",
            as: "arrayCruiser"
        }
    },
    {
        $unwind: "$arrayFrigate"
    },
    {
        $unwind: "$arrayCruiser"
    },

    {
        $project: {
            _id: 0,
            NombreFrigate: "$arrayFrigate.Nombre",
            EscudoFrigate: "$arrayFrigate.Atributos.Defensa.Escudo",
            ArmaduraFrigate: "$arrayFrigate.Atributos.Defensa.Armadura",
            EstructuraFrigate: "$arrayFrigate.Atributos.Defensa.Estructura",
            
            NombreBattleship: "$Nombre",
            Escudo: "$Atributos.Defensa.Escudo",
            Armadura: "$Atributos.Defensa.Armadura",
            Estructura: "$Atributos.Defensa.Estructura",

            NombreCruiser: "$arrayCruiser.Nombre",
            EscudoCruiser: "$arrayCruiser.Atributos.Defensa.Escudo",
            ArmaduraCruiser: "$arrayCruiser.Atributos.Defensa.Armadura",
            EstructuraCruiser: "$arrayCruiser.Atributos.Defensa.Estructura",

        }
    },
    {
        $project: {
            NombreFrigate: 1, TotalDefensaFrigate: { $sum: { $add: ["$EscudoFrigate", "$ArmaduraFrigate", "$EstructuraFrigate"] } },
            NombreCruiser: 1, TotalDefensaCruiser: { $sum: { $add: ["$EscudoCruiser", "$ArmaduraCruiser", "$EstructuraCruiser"] } },
            NombreBattleship: 1, TotalDefensaBattleship: { $sum: { $add: ["$Escudo", "$Armadura", "$Estructura"] } }
        },

    },
]).pretty()

/* Utiliza la siguiente estructura:
{
        "NombreFrigate" : "Crucifier",
        "NombreBattleship" : "Apocalypse",
        "NombreCruiser" : "Maller",
        "TotalDefensaFrigate" : 1000,
        "TotalDefensaCruiser" : 5000,
        "TotalDefensaBattleship" : 22000
}
*/

/* 
    Somos el piloto Miguel Angel y utilizamos la nave Panther que pertenece a las Battleships. 
    Queremos saber los puntos de defensa y ataque totales que tendremos si pilotamos la nave. 
*/

db.battleship.aggregate([
    {
        $match: {
            Nombre: "Panther"
        }
    },
    {
        $lookup: {
            from: "pilotos",
            localField: "Nombre",
            foreignField: "PilotoDe",
            as: "arrayPilotos"
        }
    }, 
    {
        $unwind: "$arrayPilotos",
    },
    
    {
        $project: {
            _id: 0,
            NombrePiloto: "$arrayPilotos.Nombre",
            EscudoPiloto: "$arrayPilotos.Atributos.Defensa.Escudo",
            ArmaduraPiloto: "$arrayPilotos.Atributos.Defensa.Armadura",
            EstructuraPiloto: "$arrayPilotos.Atributos.Defensa.Estructura",
            AtaquePiloto: "$arrayPilotos.Atributos.Ataque",
            
            NombreNave: "$Nombre",
            EscudoNave: "$Atributos.Defensa.Escudo",
            ArmaduraNave: "$Atributos.Defensa.Armadura",
            EstructuraNave: "$Atributos.Defensa.Estructura",
            AtaqueNave: "$Atributos.Ataque",
        }
    },
    
    {
        $project: {
            
            NombrePiloto: 1,
            NombreNave: 1,
            EscudoTotal: { $sum: { $add: ["$EscudoNave", "$EscudoPiloto"] } },
            ArmaduraTotal: { $sum: { $add: ["$ArmaduraNave", "$ArmaduraPiloto"] } },
            EstructuraTotal: { $sum: { $add: ["$EstructuraNave", "$EstructuraPiloto"] } },
            AtaqueTotal: {$sum: {$add: ["$AtaqueNave", "$AtaquePiloto"]}}
        }
    }

]).pretty()

/* El resultado es el siguiente:
{
        "NombrePiloto" : "Miguel Angel",
        "NombreNave" : "Panther",
        "EscudoTotal" : 7500,
        "ArmaduraTotal" : 5400,
        "EstructuraTotal" : 7000,
        "AtaqueTotal" : 2900
}
*/

/* 
    Queremos saber el valor de las Battleship del piloto Miguel Angel. Queremos saber el precio de la
    Battleship mas cara y mas barata.
*/
db.pilotos.aggregate([
    {
        $match: {
            Nombre: {$regex: /miguel/i},
        }
    },
    {
        $lookup: {
            from: "battleship",
            localField: "PilotoDe",
            foreignField: "Nombre",
            as: "arrayBattleship"
        }
    }, 
    {
        $unwind: "$arrayBattleship",
    } ,
    {
        $group: {
            _id: null, PrecioTotal: { $sum: "$arrayBattleship.Precio" }, NaveMasCara: {$max: "$arrayBattleship.Precio"},
            NaveMasBarata: {$min: "$arrayBattleship.Precio"}
        }
    },
]).pretty()

/* El resultado es el siguiente:
{
        "_id" : null,
        "PrecioTotal" : 4999000000,
        "NaveMasCara" : 1416000000,
        "NaveMasBarata" : 1120000000
}
*/

/*
    La faccion Amarr necesita saber saber cual es su poder de ataque ya que va a empezar una guerra.
    Contamos con una flota 4 veces mas grande en frigates, 6 veces mas grande en Cruiser y 20 veces mas grande 
    en Battleship
*/
db.frigate.aggregate([
    {
        $match: {
            Faccion: {$regex: /amar/i},
        }
    },
    {
        $lookup: {
            from: "battleship",
            localField: "Faccion",
            foreignField: "Faccion",
            as: "arrayBattleship",
        }
    }, 
    {
        $lookup: {
            from: "cruiser",
            localField: "Faccion",
            foreignField: "Faccion",
            as: "arrayCruiser",
        }
    }, 
    {
        $addFields: {
            arrayBattleship: {$arrayElemAt: ["$arrayBattleship",0]}
        }
    },
    {
        $addFields: {
            arrayCruiser: {$arrayElemAt: ["$arrayCruiser",0]}
        }
    },
    {
        $group: {
            _id: "DañoFrigateCruiserBattleship", 
            DañoTotal: {
                $sum: {
                    $add: [
                        {$multiply: ["$Atributos.Ataque", 4]}, 
                        {$multiply: ["$arrayCruiser.Atributos.Ataque",6]}, 
                        {$multiply: ["$arrayBattleship.Atributos.Ataque",20]}
                    ]
                }
            }
        }
    }
]).pretty()

/* El resultado es:
    { "_id" : "DañoFrigateCruiserBattleship", "DañoTotal" : 167040 }
*/


/*
    El ejercito Amarr tiene que enfrentarse al ejercito enemigo, el ejercito enemigo cuenta con
    500.000 puntos de defensa. Cada nave Amarr impacta 3 veces sobre la flota enemiga. 
    ¿Conseguira tener mas daño la flota Amarr o tendra mas defensa la flota enemiga? 
*/
db.frigate.aggregate([
    {
        $match: {

            Faccion: {$regex: /amar/i},
        }

    },
    {
        $lookup: {
            from: "battleship",
            localField: "Faccion",
            foreignField: "Faccion",
            as: "arrayBattleship",
        }
    }, 
    {
        $lookup: {
            from: "cruiser",
            localField: "Faccion",
            foreignField: "Faccion",
            as: "arrayCruiser",
        }
    }, 
    {
        $addFields: {
            arrayBattleship: {$arrayElemAt: ["$arrayBattleship",0]}
        }
    },
    {
        $addFields: {
            arrayCruiser: {$arrayElemAt: ["$arrayCruiser",0]}
        }
    },
    {
        $group: {
            _id: "DañoFrigateCruiserBattleship", 
            DañoTotal: {
                $sum: {
                    $add: [
                        {$multiply: ["$Atributos.Ataque", 4]}, 
                        {$multiply: ["$arrayCruiser.Atributos.Ataque",6]}, 
                        {$multiply: ["$arrayBattleship.Atributos.Ataque",20]}
                    ]
                }
            }
        }
    },
    {
        $project: {
            DañoX3Amarr:{ $sum: {$multiply: ["$DañoTotal",3]}}}
    },
    {
        $project: {
            _id: 0,
            AmarrMenosEnemigos: {$subtract: ["$DañoX3Amarr",500000]}
        }
    }
]).pretty()

/* Resultado:
    Gana Amarr al tener mas daño, si el resultado fuese negativo habria ganamo los enemigos.

    { "AmarrMenosEnemigos" : 1120 }
*/