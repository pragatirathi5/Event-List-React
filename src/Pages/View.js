import React from 'react';
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash';

export const View = ({events,deleteEvent}) => {
    
    return events.map(event=>(
        
        <tr key={event.isbn}>
            <td>{event.isbn}</td>
            <td>{event.title}</td>
            <td>{event.organizer}</td>
            <td className='delete-btn' onClick={()=>deleteEvent(event.isbn)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}