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

  let [professionalExperience, setProfessionalExperience] = useState([
    {
      "id": 1,
      "start": "???",
      "end": "2024",
      "header": "Many Task Force Teams",
      "subheader": "Commandant & Captain",
      "description": [
        "Led teams of construct soldiers to their death; unwillingly, of course.",
      ],
    },
    {
      "id": 2,
      "start": "2024",
      "end": "Present",
      "header": "Strike Hawks",
      "subheader": "Commandant & Captain",
      "description": [
        "Led a team of elite constructs.\n",
        "Aided the Gray Ravens on multiple occassions.\n",
        "Widely celebrated as the best team in terms of solo mission completion rate.",
      ],
    },
  ]);

  let [education, setEducation] = useState([
    {
      "id": 1,
      "start": "2018",
      "end": "2022",
      "header": "F.O.S. College",
      "subheader": "Graduated as Chief Commandant"
    },
    {
      "id": 2,
      "start": "???",
      "end": "2018",
      "header": "Tutored under John Smith",
      "subheader": "Successor to the Smith Name"
    },
  ]);

  return (
    <>
      <Header />
      <div className="editor-preview-wrapper">
        <Editor
          personalDetailsState={[personalDetails, setPersonalDetails]}
          professionalExperienceState={[professionalExperience, setProfessionalExperience]}
          educationState={[education, setEducation]}
        />
        <Preview
          personalDetails={personalDetails}
          professionalExperience={professionalExperience}
          education={education}
        />
      </div>
    </>
  );
}
