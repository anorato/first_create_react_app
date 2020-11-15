import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default () => {

    const [data, setData] = useState({ hits: [] });
    const [query, setQuery] = useState('redux');
    const [confirm, setConfirm] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://hn.algolia.com/api/v1/search?query='+query,
            );

            console.log(result.data);
            setData(result.data);
        };

        fetchData();
    }, [confirm]);

    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                setQuery(e.target.searchText.value);
                setConfirm(!confirm);
            }}>
                <input
                    type="text"
                    name="searchText"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />
                <button>Search!</button>
            </form>
            <ul>
                {data.hits.map(item => (
                    <li key={item.objectID}>
                        <a href={item.url} target="_blank">{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
