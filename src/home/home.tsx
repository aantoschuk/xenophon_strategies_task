import { Input, Message } from "./components";
import { useHomeState } from "./useHomeState";

import "./home.css";
import "./components/components.css";

function Home() {
  const { firstMessage, question, sendMessage, setQuestion, isError } =
    useHomeState();

  return (
    <div className="wrapper">
      <h1>{firstMessage}</h1>
      <Message />
      <Input
        value={question}
        setValue={setQuestion}
        onSend={sendMessage}
        isError={isError}
      />
    </div>
  );
}

export default Home;
