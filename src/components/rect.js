import React, { useEffect, useState, useRef } from "react";
import Typed from "typed.js";

function Content({ title, paragraphs, speed, onClose }) {
  const [contents, setContents] = useState([]);
  const [finish, setFinish] = useState(false);
  const titleRef = useRef();

  useEffect(() => {
    let paragraphChain = Promise.resolve();

    const append = (ele, content) => {
      return new Promise((resolve) => {
        const typed = new Typed(ele, {
          strings: ["", content],
          typeSpeed: speed,
          backSpeed: speed,
          showCursor: false,
          onComplete: () => {
            typed.stop();
            setTimeout(resolve, 500);
          },
        });
      });
    };

    paragraphChain = paragraphChain.then(() => append(titleRef.current, title));

    paragraphs.forEach((paragraph, i) => {
      paragraphChain = paragraphChain.then(() => {
        const isImg = /<img[^>]+>/.test(paragraph);
        if (isImg) {
          setContents((prev) => [
            ...prev,
            { type: "img", content: paragraph, loading: true },
          ]);
          return new Promise((resolve) => setTimeout(() => resolve(), 1200));
        } else {
          return append(document.getElementById(`paragraph-${i}`), paragraph);
        }
      });
    });

    paragraphChain.then(() => setFinish(true));
  }, [title, paragraphs, speed]);

  return (
    <div className="letter-content">
      <div ref={titleRef}></div>
      {contents.map((content, i) => (
        <div key={i}>
          {content.type === "text" ? (
            <p id={`paragraph-${i}`}></p>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: content.content }} />
          )}
        </div>
      ))}
      {finish && (
        <div onClick={onClose}>
          <span>&lt; Back to chat</span>
        </div>
      )}
    </div>
  );
}

export default Content;
