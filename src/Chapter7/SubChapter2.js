import {
    Link
} from 'react-router-dom';


function SubChapter2() {
    return (
        <ol>
          <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ol>
    );
}

export default SubChapter2;