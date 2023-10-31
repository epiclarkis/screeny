const Main = () => {
    return (
        <div className="main">
            <div className="part_one">
                <h2>Part One - Instructions</h2>
                <ol>
                    <li>Read through this support article: <a href="https://articulate.com/support/article/Storyline-Recording-Your-Screen-with-Multiple-Monitors" target="_blank" rel="noreferrer">Storyline: Recording Your Screen with Multiple Monitors</a></li>
                    <li>Describe the questions you anticipate customers would ask that this article could answer. Then,
create flows and response paths for the chatbot.</li>
                </ol>
                <h2>Part One - Answer</h2>
                <p>The user may ask a question that falls under one of these three categories:</p>
                <strong><p>&#128073; Learning-related that doesn&apos;t require troubleshooting, such as:</p></strong>
                <ul>
                    <li>Why can&apos;t I record on multiple screens?</li>
                    <li>Why can I only record a screencast on one screen?</li>
                    <li>Why is screen recording on multiple monitors not working?</li>
                    <li>What are the best practices in recording on multiple monitors using Storyline?</li>
                    <li>How many screens can I record using Storyline?</li>
                    <li>How to record on multiple monitors using Storyline?</li>
                    <li>How can I record a screencast on multiple monitors?</li>
                    <li>How does screen recording work on multiple monitors?</li>
                    <li>I can&apos;t record multiple screens using Storyline.</li>
                    <li>I can&apos;t get Storyline to record on multiple screens.</li>
                    <li>I need help recording on multiple screens using Storyline.</li>
                    <li>I need assistance with screen recording on multiple monitors.</li>
                    <li>I have multiple monitors, can I record a screencast using Storyline?</li>
                    <li>Can't record using multiple monitors in Storyline.</li>
                    <li>Can I record a screencast on multiple monitors using Storyline?</li>
                    <li>Any recommended settings for recording on multiple monitors in Storyline?</li>
                </ul>
                <strong><p>&#128073; Problem-related that requires troubleshooting, such as:</p></strong>
                <ul>
                    <li>Why does Storyline crash when recording on multiple screens?</li>
                    <li>Why do I get an error when recording a screencast on multiple monitors using Storyline?</li>
                    <li>Why is there an error when recording a screencast using Storyline on multiple monitors.</li>
                    <li>What is wrong with Storyline when I record a screencast on multiple monitors?</li>
                    <li>I have difficulty recording multiple screens in Storyline.</li>
                    <li>Issues recording multiple screens in Storyline.</li>
                    <li>I have trouble recording multiple screens using Storyline.</li>
                    <li>I have a problem recording multiple screens using Storyline.</li>
                    <li>I get unexpected results when recording a screencast on multiple monitors using Storyline.</li>
                    <li>I&apos;m recording a screencast on multiple monitors using Storyline, but the result is unexpected.</li>
                    <li>Error recording multiple screens using Storyline.</li>
                    <li>Trouble recording in Storyline with multiple monitors.</li>
                    <li>Trouble recording on multiple monitors using Storyline.</li>
                    <li>Problem recording on multiple monitors using Storyline.</li>
                    <li>Screen recording error on multiple screens using Storyline.</li>
                    <li>Screen recording on multiple monitors is not working.</li>
                    <li>Storyline freezes/crashes when recording a screencast on multiple monitors.</li>
                </ul>
                <strong><p>&#128073; Unknown, or any unexpected use case, such as:</p></strong>
                <ul>
                    <li>Need help.</li>
                    <li>Live agent.</li>
                    <li>Talk to support.</li>
                    <li>Speak with human.</li>
                    <li>I want to upgrade my subscription.</li>
                </ul>
                <h3>Flowmap &#128071;</h3>
            </div>
            <div className="part_two">
                <h2>Part Two - Instructions</h2>
                <ol>
                    <li>Describe how you would handle a chatbot failure—when there&apos;s a flaw in the technology, a use case you may not have considered, or someone intentionally trying to break your bot. You can use the support article from Part One as a jumping-off point, or you can choose your own example.</li>
                    <li>Provide creative solutions for explaining the failure and getting the conversation back on track.</li>
                </ol>
                <h2>Part Two - Answer</h2>
                <p>Let&apos;s say there&apos;s a use case we have not considered beforehand. The best way we can handle this is by using a fallback flow. And to maintain a good user experience, we&apos;ll pattern the fallback message around the following:</p>
                <div className="strategy">
                    <h3>Acknowledge</h3>
                    <ul>
                        <li>We&apos;ll acknowledge the failure, and inform the user about the error.</li>
                        <li>For example, telling the user we didn&apos;t understand their question.</li>
                    </ul>
                    <h3>Educate</h3>
                    <ul>
                        <li>Instead of just saying, “I don&apos;t understand, can you try again?” We&apos;ll explain that the issue goes beyond our chatbot&apos;s capability, and that&apos;s why the problem occurred.</li>
                        <li>For example, telling the user that our chatbot only helps with concerns related to screen recording on multiple monitors using Storyline.</li>
                    </ul>
                    <h3>Guide</h3>
                    <ul>
                        <li>We&apos;ll provide constructive advice and CTA to guide our user toward a resolution.</li>
                        <li>Prevent the user from getting stuck in a loop by adding a limit to how many times they hit the fallback flow.</li>
                        <li>For example, we&apos;ll hand them off to the support team when they hit the fallback flow three times in a row.</li>
                    </ul>
                </div>
                <h3>Creative Solution</h3>
                <p>Whenever the user asks a question unrelated to screen recording on multiple monitors using Storyline, we&apos;ll redirect them to a Fallback flow. Our chatbot gives a Fallback Response to determine the next outcome.</p>
                <p>For example, when the user says, “I want to upgrade my subscription,” it triggers a chatbot response to determine if the concern relates to screen recording on multiple monitors or if they need help with something else.</p>
                <h3>Example:</h3>
                <div className="chat">
                    <p><span className="user">user</span> I want to upgrade my subscription.</p>
                    <p><span className="bot">bot</span> &#128565; Oops! Sorry, I didn't get that.</p>
                    <p><span className="bot">bot</span> I can only help with screen recording-related concerns on multiple monitors.</p>
                    <p><span className="bot">bot</span> If you encountered issues recording your screen or just want to learn, click a button below. &#128071;</p>
                    <div className="options">
                        <button className="btn_options">Recording issues</button>
                        <button className="btn_options">Multiple monitors</button>
                    </div>
                </div>
                <p>This way, we acknowledge and tell the user we didn&apos;t understand the question. Then, we educate them with our chatbot&apos;s limitations. But we don&apos;t leave them hanging; we gracefully guide them back on track through constructive advice and CTA. And if the user hits the fallback flow for the third time in a row, we'll break the loop by redirecting them to support.</p>
                <h3>Demo chatbot &#128073;</h3>
            </div>
        </div>
    );
}
 
export default Main;