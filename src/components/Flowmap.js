import screeny from "./screeny.jpg"

const Flowmap = () => {
    return (
        <div className="flowmap">
            <h2>Chatbot Flowmap</h2>
            <div className="flowmap_container">
                <img className="screeny" src={screeny} alt="flowmap" />
            </div>
        </div>
    );
}
 
export default Flowmap;