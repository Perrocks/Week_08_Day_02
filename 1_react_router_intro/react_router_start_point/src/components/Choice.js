import { useParams, useNavigate } from "react-router-dom"
// const navigate = useNavigate

const Choice = () => {

    // import from react-router-dom
    // kind of like useState()
    // returns an object we can pull url value from
    const {choice} = useParams()

    return (
    <div>
        <h1> {choice}... now that's a choice </h1>
        {/* <button onClick={() => navigate("/pricing")}></button> */}
    </div>
    )
}


export default Choice