import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    

    const [categories, setCategories] = useState(['One Punch']);
    
    // const handleAdd = () =>{
    //     // setCategories( ['Naruto', ...categories]);
    //     // setCategories(cats => [...cats, 'Naruto']);
    // }

    return (
        <>
           <h2>GifEsxpertAp</h2>
           <AddCategory setCategories={setCategories} />
           <hr></hr> 
          
           <ol>
               {
                   categories.map( category => (
                        <GifGrid
                            key={category} 
                            category={ category } 
                        />                       
                   )
                )
               }
           </ol>
        </>
    )
}
