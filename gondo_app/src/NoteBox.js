
import './Panel1.css';

function Note_Box() {
  return (
    <panel className="Note_box">
      <h1 className="Note_box_Header">Anything to note?</h1>
      <textarea className="Note_box_Panel"  type = "Keep it short, sweet and simple !"  style = {{resize: 'none'}}/>  
    </panel>
  );
}

export default Note_Box;