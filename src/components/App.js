import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
    const [lists,setLists] = React.useState([]);

    function addItems(entry) {
        if (entry.title!=="" && entry.content!=="")
        {
        setLists(prevLists => {
            return [...prevLists,entry];
        })
    }
        
    } 

    function deleteItems(id){
        setLists(prevLists =>{
            return prevLists.filter((items,index) => {
                return index!==id;
            });
        });
    }
    return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addItems}
      />
      {lists.map((items,index) =>(
        <Note 
        
        id={index}
        title={items.title} 
        content={items.content}
        onClicked={deleteItems} />
      ))}
      <Footer />
        
     
    </div>
  );
}

export default App;
