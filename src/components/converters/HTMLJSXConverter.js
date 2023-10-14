import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx"; // <-- This line is important!

function HTMLJSXConverter() {
  const [inputHTML, setInputHTML] = useState("");
  const [outputJSX, setOutputJSX] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const handleInputChange = (event) => {
    setInputHTML(event.target.value);
  };

  const convertHTMLToJSX = () => {
    let jsx = inputHTML;

    // Convert comments
    jsx = jsx.replace(/<!--(.*?)-->/g, "{/*$1*/}");

    // Convert class to className
    jsx = jsx.replace(/\bclass\b/g, "className");

    // Convert for to htmlFor
    jsx = jsx.replace(/\bfor\b/g, "htmlFor");

    // Convert inline styles to JSX style format
    jsx = jsx.replace(
      /style="([^"]+)"/g,
      (_, style) =>
        `style={{${style
          .split(";")
          .filter(Boolean)
          .map((s) => {
            const [key, value] = s.trim().split(":");
            const camelCaseKey = key
              .split("-")
              .map((word, index) =>
                index === 0 ? word : word[0].toUpperCase() + word.slice(1)
              )
              .join("");
            return `${camelCaseKey}: '${value.trim()}'`;
          })
          .join(", ")}}}`
    );

    // Convert inline event handlers to camelCase
    jsx = jsx.replace(/on(\w+)="([^"]+)"/g, (match, event, handler) => {
      // Special case for 'mouseover'
      if (event === "mouseover") {
        return `onMouseOver={${handler.replace(/\(\)/, "")}}`; // remove any parentheses from the handler
      }
      // Fallback for other event names
      const camelCaseEvent =
        "on" + event.charAt(0).toUpperCase() + event.slice(1);
      return `${camelCaseEvent}={${handler.replace(/\(\)/, "")}}`; // remove any parentheses from the handler
    });

    // Convert boolean attributes like checked, disabled, selected
    jsx = jsx.replace(/\b(checked|disabled|selected)="[^"]*"/g, "$1={true}");
    jsx = jsx.replace(/\b(checked|disabled|selected)(?!\={)/g, "$1={true}");

    // Ensure tags are self-closed
    jsx = jsx.replace(
      /<(img|input|br)([^>]*?)(\/?)>/g,
      (match, tag, attrs, slash) => {
        return slash ? match : `<${tag}${attrs}/>`;
      }
    );

    // Wrap the result in a <div>
    jsx = `<div>${jsx}</div>`;

    setOutputJSX(jsx);
  };

  const highlightedCode = Prism.highlight(
    outputJSX,
    Prism.languages.jsx,
    "jsx"
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(outputJSX).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div className="formatter-page">
      <h1 className="text-center">HTML to JSX Converter</h1>
      <div className="input-section text-center">
        <textarea
          value={inputHTML}
          onChange={handleInputChange}
          placeholder={`Copy-paste your HTML here...`}
        />
      </div>
      <button onClick={convertHTMLToJSX}>Convert</button>

      {/* Output with Prism Highlighting */}
      <div className="output-section">
        <h2>JSX Output</h2>
        <div className="pre-container">
          <pre className="language-jsx">
            <code
              className="language-jsx"
              dangerouslySetInnerHTML={{ __html: highlightedCode }}
            />
          </pre>
          <button onClick={handleCopy}>
            {isCopied ? "Copied!" : "Copy JSX"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HTMLJSXConverter;