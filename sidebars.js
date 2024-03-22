/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

const apiSidebar = require("./docs/api/rest/sidebar.js");

function getApiSidebar() {
  const sidebar = [...apiSidebar];
  sidebar.shift();
  sidebar.forEach((elem) => {
    if (!elem.items) return;
    elem.items = elem.items.sort((a, b) => {
      const methodOrder = { get: 1, post: 2, put: 3, delete: 4 };
      const aMethod = a.className.split(" ")[1];
      const bMethod = b.className.split(" ")[1];
      const priorityA = methodOrder[aMethod] || 5;
      const priorityB = methodOrder[bMethod] || 5;
      if (priorityA !== priorityB) return priorityA - priorityB;
      return a.label.localeCompare(b.label);
    });
  });
  return sidebar;
}

const sidebars = {
  intro: [
    {
      type: "html",
      value: `<p style="color: var(--ifm-color-secondary-darkest)"/>`,
      defaultStyle: true,
    },
  ],
  api: [
    { type: "doc", id: "api/introduction" },
    { type: "doc", id: "api/authentication" },
    // { type: "doc", id: "api/pagination" },
    {
      type: "html",
      value: `<p style="color: var(--ifm-color-secondary-darkest)"/>`, // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    {
      type: "category",
      label: "REST API",
      collapsed: true,
      collapsible: false,
      link: {
        type: "generated-index",
        title: "API",
        slug: "/category/rest/api",
      },
      items: getApiSidebar(),
    },
  ],
};

module.exports = sidebars;
