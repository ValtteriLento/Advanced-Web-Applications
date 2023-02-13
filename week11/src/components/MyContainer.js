import MyList from "./MyList"
import {useState} from "react"

function MyContainer() {
    const [items, setItems] = useState([
        { id: "1", text: "This is an item"},
        { id: "2", text: "Also this" },
    ]);

    const onSubmit = (e) => {
        e.preventDefault()

        addItem({item: items.text})

    }

    const addItem = (item) => {
        const id = "3"
        const newItem = {id, ...item}
        setItems([...items, newItem])
    }

    return (
        <div>
            <MyList
                header="Really epic list component"
                items={items}
            />
            <form onSubmit={onSubmit}>
                <textarea placeholder="Write here" onChange={(e) => setItems.text(e.target.value)} value={items.text}/>
                <button type="submit">Add item</button>
            </form>
        </div>
    );
}

export default MyContainer