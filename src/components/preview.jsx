import PropTypes from "prop-types";
import { marked } from "marked";

marked.setOptions({
  breaks: true,
});

function Preview({ markdown }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-gray-500 text-white p-4">
      <div className="flex items-center justify-between px-4 py-2 bg-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <div
        id="preview"
        className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl p-4 text-green-200"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
}

Preview.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default Preview;
