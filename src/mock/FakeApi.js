const productos = [
    {id:"01", name:"Marley", description:"Marley musica", price:"$ 5000", stock: "10", img:"https://i.postimg.cc/HLS09J6B/Bob-Marley.jpg"},
    {id:"02", name:"Rolling Stone", description:"Rolling Stone musica", price:"$ 5000", stock:"15", img: "https://i.postimg.cc/50Yz5sY2/Rolling-Stone.jpg"}
]

export const data = new Promise ((resolve, reject)=> {
    //acciones
    let condition = true
    setTimeout(() => {
        if(condition ){
            resolve(productos)
        }else {
            reject ("se rechazo")
        }
    }, 3000);
})
console.log(data)