const query = new URLSearchParams(window.location.search)
const app = query.get('app')
const timeout = query.get('timeout') || 10000
const redirectAfterTimeout = query.get('redirectAfterTimeout')
const link = app ? `${app}://` : 'https://github.com/Abdullah-V/open-app'
window.location.href = link

setTimeout(() => {
  redirectAfterTimeout
    ? (window.location.href = redirectAfterTimeout)
    : window.close()
}, timeout)
