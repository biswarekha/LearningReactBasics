import React from 'react';

const addtodo=()=>{
    return(
        React.createElement(
            'div',
            {className:'card'},
            React.createElement('div',{className:'card-header'},<b> What To Do Next?</b>))
            
/* <div className='card'>
    <div className='card-header'><b> What To Do Next?</b></div>
    <div>
        <form>
            <div>
                <label for='txtTodo'>To Do Title</label>
                <input type='text' className='' id='txtTodo' placeholder='To Do Text' />
            </div>
            <div>
                <div>
                    <label for='fromDate'>From</label>
                    <input type='date' className='' id='fromDate' />
                </div>
                <div>
                    <label for='toDate'>To</label>
                    <input type='date' className='' id='toDate' />
                </div>

            </div>
            <hr style='border:1px;' />
                <div>
                    <button type='submit' className='btn btn-primary' >Add</button>
                </div>
        </form>
    </div>
</div> */

    )
}


export default addtodo;