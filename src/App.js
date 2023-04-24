import 'bulma/css/bulma.css'
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from './imageApi'


function App() {
    
    const [images,setImages] = useState([])
    const handleSubmit = async (term) => {
        const result = await searchImages(term)
        setImages(result);
    }
    console.log(images)
  return (
    <div className="section">
      <SearchBar onSubmit={handleSubmit}  />
      <ImageList images={images} />
    </div>
  );
}

export default App;
