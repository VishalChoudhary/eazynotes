const AddNote = () =>{
    return (
        <div className="note new">
            <textarea 
                rows="8" 
                column="10"
                placeholder="Type a add a note....."
            >
            </textarea>
            <div className="note-footer">
                <small>200 Remaining</small>
                <button className="save">Save</button>
            </div>
        </div>
    );
}

export default AddNote;