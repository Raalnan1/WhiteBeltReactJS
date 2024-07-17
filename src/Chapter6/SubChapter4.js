import React, {
    useState,
    useEffect
} from 'react';

function lift(name, elevationGain, status){
    return(
        <div>
            <h3>{name}</h3>
            <p>Elevation Gain: {elevationGain}</p>
            <p>Status: {status}</p>
        </div>
    );
}

const query=`
query{
  allLifts{
    name, elevationGain, status
  }
}`;

const opts={
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({query})
};

function SubChapter1() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('https://snowtooth.moonhighway.com', opts)
            .then(response => response.json())
            .then(data => setData(data.data))
            .finally(() => setLoading(false));
    }, []);

if (loading) {
    return <div data-js="SubChapter4">Loading...</div>;
    }
    if (!data) {
        return <div data-js="SubChapter4">No data</div>;
    }
    if (data) {
        return ( <div data-js="SubChapter4">
{data.allLifts.map((lift)=>{
return(
    <div>
        <h3>{lift.name}</h3>
        <p>Elevation Gain: {lift.elevationGain}</p>
        <p>Status: {lift.status}</p>
    </div>)})}
    </div>);
}};

export default SubChapter1;