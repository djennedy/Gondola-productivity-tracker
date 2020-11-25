import SaveMyNoteBttn from './SaveMyNoteBttn';
import Active_Header from './Active_header';
import Note_Box from './NoteBox';
import Settings from './Settings_btn';
import SeeMyNotbookBttn from './SeeMyNotebookBttn';
import './Panel1.css';

function Box() {
  return (
    <div className="Panel1 ">
       <h1 className = "Header">What are we up to?</h1> 
      
       <Active_Header/>
       <Settings/>
       <Note_Box/>
       <SaveMyNoteBttn/>
       <SeeMyNotbookBttn/>

    </div>
  );
}

export default Box;