// const initStoryshots = require('@storybook/addon-storyshots');
const { injectAxe, checkA11y } = require('axe-playwright');

// initStoryshots();

/*
* See https://storybook.js.org/docs/react/writing-tests/test-runner#test-hook-api-experimental
* to learn more about the test-runner hooks API.
*/
module.exports = {
   async preRender(page) {
      await injectAxe(page);
   },
   async postRender(page) {
      await checkA11y(page, '#root', {
         detailedReport: false,
         // detailedReportOptions: {
         //    html: true,
         // },
      });
   },
};
