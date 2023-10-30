import screeny from "./screeny.jpg"

const Flowmap = () => {
    return (
        <div className="flowmap">
            <h2>Chatbot Flowmap</h2>
            <div className="legend">
                <p>Bot Response &#128073; Answer Content in Ada</p>
                <p>User Input &#128073; Answer Training in Ada</p>
            </div>
            <div className="flowmap_container">
                <img className="screeny" src={screeny} alt="flowmap" />
            </div>
        </div>
    );
}
 
export default Flowmap;