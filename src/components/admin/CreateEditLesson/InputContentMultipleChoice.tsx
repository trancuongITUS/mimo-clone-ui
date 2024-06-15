import Input from "@/components/styledComponents/Input";
import { Checkbox } from "antd";
import React, { useEffect, useState } from "react";

export type TInputContentMultipleChoice = {
  content: string;
  correct: boolean;
  id: string;
};

type Props = {
  defaultVale: TInputContentMultipleChoice;
  onChange: (value: TInputContentMultipleChoice) => void;
};

const InputContentMultipleChoice = ({ defaultVale, onChange }: Props) => {
  const [choiceValue, setChoiceValue] = useState<string>(defaultVale.content);
  const [isCorrect, setIsCorrect] = useState<boolean>(defaultVale.correct);

  useEffect(() => {
    onChange({ id: defaultVale.id, content: choiceValue, correct: isCorrect });
  }, [choiceValue, isCorrect]);

  return (
    <div className="flex flex-col gap-1">
      <div>
        <p className="text-[0.9rem] leading-7">Content</p>
        <Input
          value={choiceValue}
          onChange={(e) => setChoiceValue(e.currentTarget.value)}
        />
      </div>
      <div>
        <Checkbox
          value={isCorrect}
          defaultChecked={defaultVale?.correct}
          onChange={(e) => setIsCorrect(e.target.checked)}
        >
          Correct ?
        </Checkbox>
      </div>
    </div>
  );
};
export default InputContentMultipleChoice;
