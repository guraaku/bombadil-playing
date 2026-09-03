import { extract, always } from "@antithesishq/bombadil";

export * from "@antithesishq/bombadil/browser/defaults";

const pageTitle = extract(state => state.document.title || "");

export const pageTitleNeverContainsAnd = always(() =>
  !pageTitle.current.toLowerCase().includes("and")
);
