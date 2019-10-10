import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
constructor(props){ //javascript 기능
  super(props);
  console.log('constructor');
}

  //class Componet를 쓰는 이유 state가 있어서
  //동적 데이터를 state에 넣는다.
  state={
    count:0
  };

  add=()=>{
    console.log("add");
    this.setState(current=>({count:current .count+ 1}));
    //setState는 class component에서 render를 다시 호출한다. 
    //setState 에서 인수 활용을 하면 state 를 바로 활용할 수 있다.
  };
  minus=()=>{
    console.log("minus");
    this.setState({count:this.state.count-1});
    // this.state 이렇게 사용하면 성능이슈및 좋은 방법이 아니다.
  };
  
//importent life cycle function
//Mounting 생성 할때 construcotr 먼저 호출 되고 render() 호출 다음에 
// componentDidMount()가 호출 된다.
///
componentDidMount(){
  console.log('componentDidMount'); 
}
componentDidUpdate(){
  console.log('componentDidUpdate '); 
}

componentWillUnmount(){
  console.log('componentWillunmount '); 
}

  render(){ 
    console.log('render');
    return (
    <div>
    <h1>Im a class componet {this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button>

    </div>
    )} 
}


export default App;  