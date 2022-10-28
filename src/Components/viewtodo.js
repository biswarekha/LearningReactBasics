import React from 'react';
import Listitem from './listitems';

function viewtodo() {
    return (
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
    );
  }


    export default viewtodo;