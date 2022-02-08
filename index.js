if("serviceWorker" in navigator){
    navigator.serviceWorker.register("serviceWorker.js")

    .then(registration => {
        console.log("serviceWorker reisteret");
        console.log(registration);

    })
    .catch(error => {
        console.log("serviceWorker reg fail ");
        console.log(error);

    })
} else {
    alert("pwa not supported")
}