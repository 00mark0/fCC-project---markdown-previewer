import PropTypes from "prop-types";

function Editor({ markdown, setMarkdown }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-gray-800 text-white">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <textarea
        id="editor"
        className="w-64 md:w-96 h-64 p-4 bg-gray-800 text-green-200"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
    </div>
  );
}

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  setMarkdown: PropTypes.func.isRequired,
};

export default Editor;
