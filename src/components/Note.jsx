import React, {useState, useEffect,useRef} from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  const [newValue, setNewValue] = useState({
    title:props.title,
    content:  props.content
  });


  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEdit(event) {
    const { name, value } = event.target;
    setNewValue(prevValue => ({ ...prevValue, [name]: value }));

    if (name === "content") {
      autoResize(event);
    }
  }

  function handleBlur() {
    props.onEdit(props.id, newValue);
  }

  function autoResize(event) {
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  }  

  const contentRef = useRef(null); 

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.height = "auto";
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    }
  }, []); 


  return (
    <div className="note">
   <textarea type="text" name="title" value={newValue.title} onChange={handleEdit} onBlur={handleBlur} className="title"/>
   <textarea
        name="content"
        value={newValue.content}
        onChange={handleEdit}
        onBlur={handleBlur}
        ref={contentRef}
        className="content"
      />
      <p className="date">{props.date}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
