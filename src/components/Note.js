import {MdDeleteForever} from 'react-icons/md';

const Note = () =>{
    return(
        <div className="note">
            <span>Text Area</span>
            <div className="note-footer">
                <small>15/01/2025</small>
                <MdDeleteForever className='delete-icon' size='1.3em'/>
            </div>
        </div>
    );
}

export default Note;