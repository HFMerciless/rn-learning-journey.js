import {Link} from "react-router-dom";

const NotFound=()=>{
    return(
        <div className="not-found">
            <h2>SORRY</h2>
            <h4>Page Not Found</h4>
            <Link to="/">Back to Home...</Link>
        </div>
    )
}

export default NotFound;