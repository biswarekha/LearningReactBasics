import React from 'react';
import '../../src/Components/style.css';
import NavBar from '../../src/Components/Navbar';
import AddTodo from '../../src/Components/addtodo';
import ViewTodo from '../../src/Components/viewtodo';


function Todo() {
  return (
    <div>
       <NavBar />
      <div className='container'>
        <ViewTodo />
        <AddTodo />
      </div>
    </div>
  );
}

export default Todo;
