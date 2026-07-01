import Header from "./components/Header";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import "./styles/App.css";
import "./styles/Header.css";
import "./styles/Editor.css";
import "./styles/Preview.css";

export default function App() {
  return (
    <>
      <Header />
      <div className="editor-preview-wrapper">
        <Editor />
        <Preview />
      </div>
    </>
  );
}
