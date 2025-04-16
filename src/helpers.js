const buildElements = (definitions) => {
  const elements = {};

  Object.entries(definitions).forEach(([tag, items]) => {
    items.forEach(({ id, className, textContent, ...rest }) => {
      const el = document.createElement(tag);

      el.id = id;
      if (className) el.classList.add(className);
      if (textContent) el.textContent = textContent;

      Object.entries(rest).forEach(([attr, value]) => {
        el.setAttribute(attr, value);
      });

      elements[id] = el;
    });
  });

  return elements;
};

export { buildElements };