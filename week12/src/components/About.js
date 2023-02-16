import {useState, useEffect} from 'react'
import React from 'react';

function About() {
    const [data, setData] = useState([])

    useEffect(() => {
        let mounted = true;
        async function doStuff() {
            const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
            const json = await promise.json();

            if (mounted) {
                setData(json);
                console.log(json);
            }
        }
        doStuff();

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <div>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default About