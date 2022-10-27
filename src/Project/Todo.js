import React from 'react';
import Listitem from './listitems';

function Todo() {
  return (
    <div>
      <div className='container'>
        <div className='card'>
          <div className='card-header'>
            <b> To Do</b>
          </div>
          <ul>
            <Listitem title='Finish To Do List design' startDate='12/02/1990' endtDate='14/02/1990' />
            <Listitem title='Integrate React with To do List' startDate='14/02/1990' endtDate='15/02/1990' />
            <Listitem title='Learn API to React' startDate='15/02/1990' endtDate='17/02/1990' />
          </ul>
        </div>
        <div className='card'>
          <div className='card-header'><b> What To Do Next?</b></div>
          <form>
            <div>
              <label htmlFor='txtTodo'>To Do Title</label>
              <input type='text' id='txtTodo' placeholder='To Do Text' />
            </div>
            <div>
              <div>
                <label htmlFor='fromDate'>From</label>
                <input type='date' id='fromDate' />
              </div>
              <div>
                <label htmlFor='toDate'>To</label>
                <input type='date' id='toDate' />
              </div>
            </div>
            <div>
              <button type='submit'>Add</button>
            </div>
          </form>


        </div>
      </div>
    </div>
  );
}

export default Todo;
