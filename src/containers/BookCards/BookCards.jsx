import React from 'react'
import Books from '../Books/Books'

const BookCards = ({thingstoDisplay, index}) => {
  return (
    <div>
        <Books {...index} {...thingstoDisplay}/>
        <Books/>
        <Books/>
        <Books/>
        <Books/>
        <Books/>
        <Books/>
        <Books/>
        <Books/>
        <Books/>
    </div>
  )
}

export default BookCards