import React from 'react'
import { useState } from 'react';
const Card = ({data}) => {
    const [search, setSearch] = useState('');
    console.log(data);
    console.log(search)
  return (
    <>
    <div  className="input1">
        <input type="text"  onChange={(e) => setSearch(e.target.value)}/>
    </div>
    <div  className="card-container">
        {data.filter((item)=> {
            if(search=="") {
                console.log(item);
                return item
            } else if (item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                console.log(item)
                return item
            }
        }).map((item)=> {
            console.log(item);
            const {id, title, image, desc} = item;
            return (
                <div key={id} className="cards">
             <div className="title">
                 <h1>{title}</h1>
             </div>
             <img src={image} alt="" />

             <div className="card-over">
                 <p>
                     {desc}
                 </p>
             </div>
         </div>
            )
        })

    }
    </div>
  </>
  )
}

export default Card
//  return (
//                 <div key={id} className="cards">
//             <div className="title">
//                 <h1>{title}</h1>
//             </div>
//             <img src={image} alt="" />

//             <div className="card-over">
//                 <p>
//                     {desc}
//                 </p>
//             </div>
//         </div>