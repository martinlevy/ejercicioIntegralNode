const autos = require("./autos")
let concesionaria = {
   autos: autos ,
 
   buscarAuto: (pat)=>
   {
      for (i=0 ; i<concesionaria.autos.length ; i++)
      {
      if (concesionaria.autos[i].patente== pat ){return concesionaria.autos[i]}}
      return null
   
   },

   venderAuto: function (pat) {
     let auto = this.buscarAuto(pat)
     if (auto !=null){auto.vendido= true
     
   }   
},
   autosParaLaVenta: function() {
   let autosAVenta= this.autos.filter(function(auto){ return  auto.vendido!=true})
return autosAVenta

},
autos0KM: function (){
   let autos0km=  this.autosParaLaVenta().filter(function (auto){return auto.kms<100})
   return autos0km
},
listaDeVentas: function() {
   let autosvendidos= this.autos.filter(function(auto){ 
      return  auto.vendido==true})
      let listaDePrecios=
   autosvendidos.map(function(auto){ return auto.precio })
   return listaDePrecios
},
/*totalDeVentas: function (){
   let totalVentas= this.listaDeVentas().reduce(function(acum,auto){return acum + auto.precio})
   return totalVentasgig
}
*/
totalDeVentas: function (){
   let totalVentas= this.listaDeVentas()
   if (totalVentas==[]){return 0}
   else {totalVentas== this.listaDeVentas().reduce(function(acum,auto){return acum + auto.precio})
   return totalVentas}
}

}

//console.log(concesionaria.venderAuto("JJK116"))
//console.log(concesionaria.autos[1])
//console.log(concesionaria.listaDeVentas("JJK116"))
//console.log(concesionaria.autosParaLaVenta())
//console.log(concesionaria.autos0KM())
//console.log(concesionaria.listaDeVentas())
console.log(concesionaria.totalDeVentas())




