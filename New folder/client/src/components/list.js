import PropTypes from 'prop-types';
export function List(props){
//     const fruits=[{id:1,name:"apple",calories:95},
//         {id:2,name:"ad",calories:85},
//         {id:3,name:"cd",calories:155},
//         {id:4,name:"bd",calories:115}

//     ];
//     fruits.sort((a,b) => a.name.localeCompare(b.name) );//ALPHABETICAL
//        fruits.sort((a,b) => b.name.localeCompare(a.name) );//ALPHABETICAL
//        fruits.sort((a,b) => a.calories-b.calories);
//     const localF=fruits.filter(fruit=>fruit.calories<100);
//      const listItems=localF.map(localF => <li key={localF.id}>
//         {localF.name} :&nbsp;
//          <b>{localF.calories}</b>
//  </li>);
//     const listItems=fruits.map(fruit => <li key={fruit.id}>
//                                         {fruit.name} :&nbsp;
//                                         <b>{fruit.calories}</b>
//     </li>);



    //same jinis props diye korte chaile
 const category=props.category;
 const inteml=props.items;
 const listItems=inteml.map(item => <li key={item.id}>
                                           {item.name} :&nbsp;
                                            <b>{item.calories}</b>
        </li>);
    return(
    <>
    <h3>{category}</h3>
    <ol>{listItems}</ol>
    </>
    )
    
}
List.prototype={
    items: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        name: PropTypes.string,
        calories:PropTypes.number
    })),
}
List.defaultProps={
    category:"Category",
    items:[],
}