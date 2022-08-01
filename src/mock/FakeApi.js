const productos = [
    {id: 1, name:"Marley", subtitle:"Cuadro poster de Bob Marley cantando", size: "30cm x 40 cm", description:"Robert Nesta Marley, más conocido como Bob Marley, fue un cantante y compositor jamaicano. Durante su carrera musical fue el líder, compositor y guitarrista de las bandas The Wailers y Bob Marley & The Wailers", price:"$ 4000", stock: "10", img:"https://i.postimg.cc/HLS09J6B/Bob-Marley.jpg", categoria: "Music"},
    {id: 2, name:"Rolling Stone",  subtitle:"Cuadro poster de la lengua mas conocida en todo el mundo", size: "30cm x 40 cm",description:"The Rolling Stones, más conocido en el mundo hispano como los Rolling Stones, ​ es un grupo británico de rock originario de Londres", price:"$ 4000", stock:"15", img: "https://i.postimg.cc/50Yz5sY2/Rolling-Stone.jpg", categoria: "Music"},
    {id: 3, name:"Batman",  subtitle:"Cuadro poster del calsico de ciudad gotica", size: "50cm x 40 cm", description:"En su segundo año luchando contra el crimen, Batman explora la corrupción existente en la ciudad de Gotham y el vínculo de esta con su propia familia.", price:"$ 8000", stock:"12", img: "https://i.postimg.cc/Zqm8k8XV/batman.webp", categoria: "Movies"},
    {id: 4, name:"El señor de los Anillos",  subtitle:"Cuadro poster del señor de los anillos", size: "50cm x 40 cm", description:"En la Tierra Media, el Señor Oscuro Sauron forjó los Grandes Anillos del Poder y creó uno con el poder de esclavizar a toda la Tierra Media.", price:"$ 8000", stock:"15", img: "https://i.postimg.cc/DZXnqGw3/el-se-or-de-los-anillos.webp", categoria: "Movies"}
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