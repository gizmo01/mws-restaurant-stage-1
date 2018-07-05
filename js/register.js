//Set up service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(reg => {
      console.log("Service worker successfully registered:" + reg.scope);
    })
    .catch(error => {
      console.log("Registration failed:" + error);
    });
}