import React from 'react'
import Item from '../components/Item';

const ItemList = ({items}) => {
  return (
    <div className='itemsList' style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
        {
            items.map((item) =>{
                 return <Item item={item} key={item.id} />
            })
        }
    </div>
  )
}

export default ItemList