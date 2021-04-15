*************************************NB:  USE PROPS HOOKS !!!*********************************
*
*
*************************************NB:  USE PROPS !!!*********************************

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}


*************************************NB: DOESNT USE PROPS !!!*********************************

import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

******************************NB: DOESNT USE PROPS !!!********************************


import React, { useState } from 'react';

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  
  
	/////////////////////////////////////////////////////////////////////
  //
  When we want to display the current count in a class, we read this.state.count:
  //
  ///////////////////////////////////////////  
  
  <p>You clicked {this.state.count} times</p>
  
  ///////////////////////////////////////////
  
  
  ///////////////////////////////////////////
  //
  In a function, we can use count directly:
 // 
  ///////////////////////////////////////////
  
  <p>You clicked {count} times</p>
  
  ///////////////////////////////////////////
  
  
  **************************************
  
  In a class, we need to call this.setState() to update the count state:
  
  **************************************
  
    <button onClick={() => this.setState({ count: this.state.count + 1 })}>
    Click me
  </button>
  
  
  
  In a function, we already have setCount and count as variables so we don’t need this(NB: keyword):
  *************************************
  
   <button onClick={() => setCount(count + 1)}>
    Click me
  </button>
  
  ***************************
  
  
  
  
  
  final product 
  
  
  1:  import React, { useState } from 'react';
 2:
 3:  function Example() {
 4:    const [count, setCount] = useState(0);
 5:
 6:    return (
 7:      <div>
 8:        <p>You clicked {count} times</p>
 9:        <button onClick={() => setCount(count + 1)}>
10:         Click me
11:        </button>
12:      </div>
13:    );
14:  }