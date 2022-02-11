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

//Henter api
fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
// .setAttribute("src", `${data.message}`)
//Tager vores wrapper, sætter en src på med vores data.message som er url fra api (hunde billedet)
.then(data => {
    const dogWrapper = document.querySelector('.dogWrapper')
    //Laver en ny div hvor vi indsætter vores image fra vores data (img)
    const img = document.createElement('div');
    img.innerHTML = `<img  src='${data.message} '/>`;
    dogWrapper.append(img)
})

//Hvis fejl - vis dette 
.catch (err => {
        
        //Peger på vores div i html for at kunne pakke vores nye elementer ind i wrapperen 
        const dogWrapper = document.querySelector('.dogWrapper');
        
        //OPretter h3 der skal give besked om offline når der ingen net forbindelse er
        const h3 = document.createElement('h3');
        h3.innerHTML = 'Du er ofline'
        dogWrapper.append(h3)

        //Opretter img og sætter src til vores billede i assets
        const img = document.createElement('img');
        img.src = 
        'assets/images/dog.png';
          dogWrapper.append(img)
})

