import React, {
    useState,
    useEffect
} from 'react';

function SubChapter1() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return ( <div data-js="SubChapter1">
    <code>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </code>
    </div>    );
}

export default SubChapter1;