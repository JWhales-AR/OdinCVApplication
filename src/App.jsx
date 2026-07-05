import { useState } from "react";

import Header from "./components/Header";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Editor.css";
import "./styles/Preview.css";

export default function App() {
  let [personalDetails, setPersonalDetails] = useState({
    fullName: "Langston Smith (Chrome)",
    phoneNumber: "xxx-xxx-xxxx",
    eMail: "chrome.strikehawks@babylonia.org",
    location: "Babylonia, Space",
  });
  return (
    <>
      <Header />
      <div className="editor-preview-wrapper">
        <Editor
          personalDetailsState={[personalDetails, setPersonalDetails]}
        />
        <Preview personalDetails={personalDetails} />
      </div>
    </>
  );
}
