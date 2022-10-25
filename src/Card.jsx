import React from 'react'

const Card = ({data}) => {
    console.log(data);
  return (
    <div className='card'>
        {data.map((item)=> {
            const { id, title, image, desc } = item;
            return (
                <div key={id}>
        <img src={image} alt="Avatar" style={{width:"100%"}}/>
        <div className="container">
        <h4><b>{title}</b></h4>
        <br />
        <p>{desc}</p>
        <br />
        
    </div>
        </div>
            )

        })}

    </div>
  )
}

export default Card