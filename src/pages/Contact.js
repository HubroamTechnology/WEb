import React from 'react'

export default function Contact() {
  let a=[
    {id:1,name:'abc'},
  {id:2,name:'xyz'}]

  return (
    <div>
    {
      a.map((e,i)=>{
        return(<h1>{e.name}</h1>)
      })
    }
    </div>
  )
}
