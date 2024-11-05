import { ChangeEvent, Dispatch, SetStateAction } from "react";

type TProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  onSend: () => void;
  isError: boolean;
};

export const Input = (props: TProps) => {
  const { value, setValue, onSend, isError } = props;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    onSend();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    // Check if the Enter key (keyCode 13 or 'Enter' key) is pressed
    if (e.key === "Enter" || e.keyCode === 13) {
      onSend();
    }
  };

  return (
    <div className={`input-container ${isError ? "error" : ""}`}>
      <input
        name="message"
        placeholder="Ask something"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyPress}
      />
      <div className="send" onClick={onClick}>
        E
      </div>
    </div>
  );
};
