import React, { useState, useEffect } from "react";
import TextInput from "./components/TextInput";

function App() {
  // TODO: 로컬 스토리지에서 초기 상태로 사용할 값을 가져오세요. 새로고침 해도 기존 상태를 유지하는 것이 목적입니다.
  // 로컬스토리지에 값이 없을 경우 빈배열[] 로 설정하세요.
  
  // 로컬 스토리지에서 초기 상태로 사용할 값을 가져옴. 값이 없으면 빈 배열로 할당함.
  const initialTexts = JSON.parse(localStorage.getItem('texts')) || [];
  console.log(initialTexts);

  // 두번째 ToDo를  처리하기 위해 초기 로컬스토리지 값을 상태로 정의함
  const [texts, setTexts] = useState(initialTexts);

  useEffect(() => {
    // TODO: 상태가 변경될 때마다 로컬 스토리지에 저장. key 값은 texts 로 합시다.

    // texts 상태가 바뀔 때마다 로컬스토리지에 texts의 값을 그대로 할당함.
    localStorage.setItem('texts', JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextInput onAddText={onAddText} />
      <ul>
        {texts.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
