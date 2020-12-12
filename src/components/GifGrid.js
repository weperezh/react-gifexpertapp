import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifts'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';


export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);   
    const { data:images, loading } = useFetchGifts( category );
    console.log( loading );
    // console.log( data );

    // // este codigo es para que solo se ejcute la primera vez
    // useEffect( ()=> {
    //     getGifs( category )
    //         .then(setImages); // este es la istruccion que sera presentadocuando el componente es renderizado por primera vez
    // }, [ category ] )


    return (
        <>
            <h3 className="animate__animated animate__bounce" > { category } </h3>

            { loading && <p className="animate__animated animate__flash" >Loading</p> }
            
            <div className="card-grid">

                    {
                        images.map( img => (

                            <GifGridItem 
                                key = { img.id }
                                { ...img }  
                            />
                        ))
                    }
                
            </div>
        </>
    )
}