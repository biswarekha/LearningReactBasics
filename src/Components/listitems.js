import React from 'react';

const listitem = (props) => {
    return (
        <li className='listitem'>
            <div className='listbody'>
                <input type='checkbox' />
                <p className='card-text'> {props.title} </p>
                <p> <small className='text-muted'>{props.startDate} - {props.endtDate}</small></p>
                <a href='#' className='text-muted'></a>
            </div>
        </li>
    )
}

export default listitem;
