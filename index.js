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
// } else {
//     alert("pwa not supported")
}

fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
    document.querySelector(".dogWrapper").setAttribute("src", `${data.message}`)
})
.catch (err => {
        
        const dogWrapper = document.querySelector('.dogWrapper');
        const h3 = document.createElement('h3');
        h3.innerHTML = 'Du er ofline'
        dogWrapper.append(h3)
        const img = document.createElement('img');
        img.src = 
        'assets/images/dog.png';
          dogWrapper.append(img)
})

