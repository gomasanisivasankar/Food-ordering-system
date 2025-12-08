import React from 'react'

const User = (props) => {
  return (
    <div className='user-card'>
        <h2>Name:{props.name}</h2>
        <h3>Location:Ongole</h3>
        <h4>Contact:ssankar6281@gmaiil.com</h4>
    </div>
  )
}

export default User