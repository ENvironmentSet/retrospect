exports.onCreatePage = ({ page, actions }) => {
  if (/.+\/content/.test(page.path)) {
    actions.deletePage(page);
    page.path = page.path.replace(/\/content/, '');
    actions.createPage(page)
  }
}