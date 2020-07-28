const buscarAuto= function buscarAuto (pat)
{
   for (i=0 ; i<concesionaria.autos.length ; i++)
   {
   if (concesionaria.autos[i].patente== pat ){return concesionaria.autos[i]}}
   return null

}
console.log(buscarAuto("JJK116"))

