import React, { useState, useEffect } from 'react';
import * as marked from 'marked';  // Import the marked library

import './App.css';

const App = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    // Default markdown content
    const defaultMarkdown = `
# Welcome to My Markdown Previewer!

## Subheading

[Link](https://www.example.com)

\`inline code\`

\`\`\`
// code block
const example = "Hello, World!";
\`\`\`

- List item 1
- List item 2

> Blockquote

![Image](https://via.placeholder.com/150)

**Bolded Text**
    `;

    setMarkdown(defaultMarkdown);
  }, []);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="app">
      <div className="editor-container">
        <h2>Editor</h2>
        <textarea id="editor" value={markdown} onChange={handleChange} />
      </div>
      <div className="preview-container">
        <h2>Preview</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked.marked(markdown) }}  // Use marked.marked
        ></div>
      </div>
    </div>
  );
};

export default App;
