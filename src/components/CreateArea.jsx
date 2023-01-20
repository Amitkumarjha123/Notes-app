import React from "react";

function CreateArea(props) 
{
    const [entry,setEntry] = React.useState({
        title:"",
        content:""
    });
    

    function handleChange(event){
        const{value,name} = event.target;
        setEntry(prevEntry=>{
            return(
                {
                    ...prevEntry,
                    [name] : value
                }
            );
        })
    }

    function submitEntry(event){
        props.onAdd(entry);
        setEntry({
         title :"",
         content:""   
        })
        event.preventDefault();
    }
    
  return (
    <div>
      <form className="create-note">
        <input name="title" onChange={handleChange} value={entry.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={entry.content} placeholder="Take a note..." rows="3" />
        <button onClick={submitEntry}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
