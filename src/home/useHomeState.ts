import axios from "axios";
import { useEffect, useState } from "react";

import { useAppDispatch } from "../redux/store";
import { addMessage } from "../redux/reducer";

const testRequest = async () => {
  const response = await axios.get("http://localhost:3001");
  return response.data.message;
};

export const useHomeState = () => {
  const [firstMessage, setFirstMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const dispatch = useAppDispatch();

  const [question, setQuestion] = useState("");

  useEffect(() => {
    const makeTestRequest = async () => {
      const message = await testRequest();
      setFirstMessage(message);
    };
    makeTestRequest();
  }, []);

  const sendMessage = async () => {
    if (question.length < 5) {
      setIsError(true);
      return;
    }

    const response = await axios.post("http://localhost:3001", {
      message: question,
    });

    dispatch(addMessage({ question, answer: response.data }));
    setQuestion("");
    setIsError(false);
  };

  return {
    isError,
    firstMessage,
    question,
    setQuestion,
    sendMessage,
  };
};
