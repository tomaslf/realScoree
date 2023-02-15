import Item from "../Item/Item"
import './ItemLists.css'


export const ItemList = ({lista}) => {

 

 
  return (
    <>
    
    <div className="resultados"> {lista.map((item)=>(
            <Item key={item.title} name={item.title} img={item.thumbnail} competition={item.competition} match={item.videos.map((itemss) => <div key={item.title} dangerouslySetInnerHTML={{__html:itemss.embed}} />)} />
    ))}
    </div>
    
  
       
   
    
    
    
    
    
    </>
    
  )
}

export default ItemList