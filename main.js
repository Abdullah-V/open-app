const query = new URLSearchParams(window.location.search);
const app = query.get("app");
const link = app
  ? `${app}://`
  : 'https://github.com/Abdullah-V/open-app';
window.location.href = link;

setTimeout(() => {
  window.close();
}, 10000);
