if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/ravanup/sw.js', { scope: '/ravanup/' })})}