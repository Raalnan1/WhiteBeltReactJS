import React, {
    useState,
    useEffect
} from 'react';

function SubChapter1() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/Albums')
            .then(response => response.json())
            .then(data => setData(data))
            .finally(() => setLoading(false));

    }, []);

if (loading) {
    return <div data-js="SubChapter1">Loading...</div>;
    }
    if (!data) {
        return <div data-js="SubChapter1">No data</div>;
    }
    if (data) {
        return ( <div data-js="SubChapter1">
            <code>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </code>
            </div>    );
    }



}

export default SubChapter1;