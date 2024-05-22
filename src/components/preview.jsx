import PropTypes from "prop-types";
import { marked } from "marked";

marked.setOptions({
  breaks: true,
});

function Preview({ markdown }) {
  return (
    <div
      id="preview"
      className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto p-4"
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    />
  );
}

Preview.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default Preview;
