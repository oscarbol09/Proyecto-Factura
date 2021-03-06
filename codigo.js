var app = new Vue({
    el:"main",
    data:{
        myArrayProd:[
            {
                "codProd":"p100","nomProd":"Platano","cantExistencia":5000,"precioVta":250,"precioComp":100
            },{
                "codProd":"y100","nomProd":"Yuca","cantExistencia":100,"precioVta":500,"precioComp":1000
            },{
                "codProd":"c100","nomProd":"Camisas","cantExistencia":200,"precioVta":10000,"precioComp":25000
            },{
                "codProd":"r100","nomProd":"Relojes","cantExistencia":100,"precioVta":7000,"precioComp":1500
            },
        ],
        myArrayClient:[
            {
                "ced":6888,"nom":"Juan","ape":"Lopez"
            }
        ],
        myArrayDetalleFact:[
            {
                "numFact":222,"codProd":"p100","cantVend":50,"precioVta":250,"vrExtendido":12500
            }
        ],
        myArrayFact:[
            {
                "numFact":222,"fecha":30-11-2021,"subtot":12500,"tot":12500,"cedClient":6888
            }
        ],
        factura:{
            numFact:null,
            fecha:null,
            subtot:null,
            tot:null,
            cedClient:null,
        },
        detallesFact:{
            numFact:null,
            codProd:null,
            cantVend:null,
            precioVta:null,
            vrExtendido:null,
        },
        producto:{
            codProd:null,
            nomProd:null,
            cantExistencia:null,
            precioVta:null,
            precioComp:null,
        },
        cliente:{
            ced:null,
            nom:null,
            ape:null,
        },
        prodSelecc:null,

    }
})