import { useState } from "react";
export function HandleYear(){
 const [car,setCar]=useState({year:2024 ,
                             make:" Ford ",
                             model:"mustang"
 });
 function handleChangeYear(e) {
    setCar(c=>({...c,year:e.target.value}));
}    
function handleChangeBrand (e){
    setCar(c=>({...c,make:e.target.value}));
}
function handleChangeModel (e){
    setCar(c=>({...c,model:e.target.value}));
}

return(<div>
    <p>fvrt car: {car.year }{car.make }{car.model }</p>
    <input type="number" value={car.year} onChange={handleChangeYear} name="" id="" />
            <input type="text" value={car.make} onChange={handleChangeBrand} placeholder="Enter make nsme.." name="" id="" />
            <input type="text" value={car.model} onChange={handleChangeModel} placeholder="Enter car model name.." name="" id="" />
</div>)

}