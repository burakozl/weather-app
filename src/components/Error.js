import React from 'react'

function Error({message}) {
  return (
    <div style={{color: 'red', fontSize: '50px', textAlign: 'center'}}>
      Error: {message}
    </div>
  )
}

export default Error
