import React from 'react'


export const DetailsContext = React.createContext({
    name:"",
    state:true
})

export const api = ()=>{
    const res = fetch(``)
    const data = res.json()
    this.Profile__context = data
}
