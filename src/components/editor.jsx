import PropTypes from "prop-types";

function Editor({ markdown, setMarkdown }) {
  return (
    <textarea
      id="editor"
      className="w-full h-64 p-4"
      value={markdown}
      onChange={(e) => setMarkdown(e.target.value)}
    />
  );
}

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  setMarkdown: PropTypes.func.isRequired,
};

export default Editor;
