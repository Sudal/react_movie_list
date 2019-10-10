
  import React from 'react';
import PropTypes from 'prop-types';

function Food({fav,rating}) 
{
  console.log(fav);
 return(  
 <div>
 <h1>like {fav}</h1> 
 <h3>{rating}/5.0</h3>
 </div>
 )
}


Food.propTypes={
  name:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
}

const foodILike=[{id:1,name :'test'}
,{id:2,name :'remon',rating:3.9}
,{id:3,name :'candy',rating:5.5 }];


function renderFood(dish){
console.log(dish);
return <Food fav={dish.name}/>
}



function App() {
  return (
    <div className="App">
      {foodILike.map(dish=><Food key={dish.id} fav={dish.name} rating={dish.rating}/>)}
    </div>
  );
}

export default App;
  