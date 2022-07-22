import ItemCount from "./ItemCount";

const ItemListContainer = ({greetings}) => {
    return (
        <><div>
            <h1> {greetings}</h1>
        </div><ItemCount /></>
    );
}

export default ItemListContainer;
