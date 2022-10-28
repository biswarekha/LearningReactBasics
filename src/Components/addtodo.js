import React from 'react';

const addtodo = () => {
    return (
        <div className='card'>
            < div className='card-header' > <b> What To Do Next?</b></div >
            <div>
                <form>
                    <div>
                        <label htmlFor='txtTodo'>To Do Title</label>
                        <input type='text' className='' id='txtTodo' placeholder='To Do Text' />
                    </div>
                    <div>
                        <div>
                            <label htmlFor='fromDate'>From</label>
                            <input type='date' className='' id='fromDate' />
                        </div>
                        <div>
                            <label htmlFor='toDate'>To</label>
                            <input type='date' className='' id='toDate' />
                        </div>

                    </div>
                    <div>
                        <button type='submit' className='btn btn-primary' >Add</button>
                    </div>
                </form>
            </div>
        </div >

    );
}


export default addtodo;