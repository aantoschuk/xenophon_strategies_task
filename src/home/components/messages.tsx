import { SelectMessages } from "../../redux/reducer";
import { useAppSelector } from "../../redux/store";

export const Message = () => {
  const messages = useAppSelector(SelectMessages);
  return (
    <div className="messages">
      {messages.map((message) => {
        return (
          <div key={message.question}>
            <p>
              <b className="question">question: </b>
              {message.question}
            </p>
            <p>
              <b className="answer">answer: </b>
              {message.answer}
            </p>
          </div>
        );
      })}
    </div>
  );
};
