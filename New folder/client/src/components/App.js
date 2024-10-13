
import {Democom} from './democom';
import { Footer } from './footer';
import { Card } from './card';
import { Student } from './student';
import { Greeting } from './greeting';
import { List } from './list';
import { Button } from './button';
import { MyComponent } from './mycomponent';
import { OnChangeExample } from './onchange';
import Counter from './counter';
import { ColorPicker } from './colorpicker';
import { HandleYear } from './handleyear';
function App() {

  const fruits=[{id:1,name:"apple",calories:95},
            {id:2,name:"ad",calories:85},
            {id:3,name:"cd",calories:155},
            {id:4,name:"bd",calories:115}
    
        ];
        const veg=[{id:1,name:"potato",calories:95},
          {id:2,name:"tometo",calories:185},
          {id:3,name:"corn",calories:15},
          {id:4,name:"carrot",calories:11}
  
      ];
  return (
   <div className="container">
    <Democom/>
    <Footer/>
    <Card/>
    <Student name="shifa" age={30} isStudent={true}/>
    <Student/>
    <Greeting isLoggedIn={true} username="shifa"/>
    {/* <List items={fruits} category="Fruits"/>
    <List items={veg} category="Veg"/> */}
    {fruits.length>0 && <List items={fruits} category="Fruits"/>}
    <List items={veg} category="Veg"/>
    <Button/>
    <MyComponent/>
    <OnChangeExample/>
    <Counter/>
    <ColorPicker/>
    <HandleYear/>
   </div>
   
  );
}

export default App;
