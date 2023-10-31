import chatbot from "./chatbot.png"

const Nav = () => {
    return (
        <div className="nav">
            <h1><span><img src={chatbot} alt="chatbot icon" className="bot_logo" /></span> Chatbot Experience Coordinator - Take-Home Test <span className="creator">Created by Johnrey Landoay</span></h1>
        </div>
    );
}
 
export default Nav;