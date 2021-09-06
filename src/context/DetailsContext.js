import React from 'react'


const DetailsContext = React.createContext({
    name:'Gif',
    ctx='soutr'
    state:true
})

const api = ()=>{
    const res = fetch(``)
    const data = res.json()
    this.Profile__context = data
}
