import React, {useState, useEffect} from 'react';
import axios from "axios";

export const SecondRoot = () => {
    const [posts, setPosts] = useState([]);



    useEffect(()=>{
        (async () => {
            let response = await axios(
                'https://jsonplaceholder.typicode.com/posts',
            );
            let data = await response.data;

            setPosts(data);


        })();
    }, []);

    return (
        <div>
            <ul>
                {posts.map((post)=><li key={post.id}>{post.title}</li>)}
            </ul>
        </div>
    );

};
