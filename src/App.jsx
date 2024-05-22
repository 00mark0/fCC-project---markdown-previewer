import "./App.css";
import { useState } from "react";
import Editor from "./components/editor";
import Preview from "./components/preview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [markdown, setMarkdown] =
    useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`);
  const [view, setView] = useState("both");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-48 gap-20 transition-colors duration-500 ${
        darkMode ? "bg-indigo-900" : "bg-gray-100"
      }`}
    >
      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          onClick={() => setView("editor")}
        >
          Editor
        </button>
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          onClick={() => setView("preview")}
        >
          Preview
        </button>
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          onClick={() => setView("both")}
        >
          Both
        </button>
        <button
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          onClick={() => setDarkMode(!darkMode)}
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
      </div>
      {view === "both" || view === "editor" ? (
        <Editor markdown={markdown} setMarkdown={setMarkdown} />
      ) : null}
      {view === "both" || view === "preview" ? (
        <Preview markdown={markdown} />
      ) : null}
    </div>
  );
}

export default App;
