import {useState} from 'react'

function Index() {
    const [bookData, setBookData] = useState({})

    const submit = (e) => {
        e.preventDefault()

        fetch("/api/book", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bookData),
            mode: "cors"
        })
            .then(response => response.json())
    }

    const handleChange = (e) => {
        setBookData({...bookData, [e.target.id]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={submit} onChange={handleChange}>
                <input id="name" type="string"></input>
                <input id="author" type="string"></input>
                <input id="pages" type="number"></input>
                <input id="submit" type="submit"></input>
            </form>
        </div>
    )
}

export default Index