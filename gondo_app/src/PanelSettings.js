import SaveMyNoteBttn from './SaveMyNoteBttn';
import Active_Header from './Active_header';
import Note_Box from './NoteBox';
import SettingsBtn from './Settings_btn';
import SeeMyNotbookBttn from './SeeMyNotebookBttn';
import './Panel1.css';
import {Link } from 'react-router-dom';
function SettingsTab() {
  return (
    <div className="Panel1 ">
       <h1 className = "Header">Settings</h1> 
      
       <Link to="/">
        <SettingsBtn/>
       </Link>

    </div>
  );
}

export default SettingsTab;