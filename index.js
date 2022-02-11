if("serviceWorker" in navigator){
    navigator.serviceWorker.register("serviceWorker.js")

    .then(registration => {
        console.log("serviceWorker reisteret");
        console.log(registration);

    })
    .catch(error => {
        
        
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
// } else {
//     alert("pwa not supported")
}

// //Henter api
// fetch('https://dog.ceo/api/breeds/image/random')
// .then(response => response.json())

// //Tager vores wrapper, sætter en src på med vores data.message som er url fra api (hunde billedet)
// .then(data => {
//     document.querySelector('.dogWrapper').setAttribute("src", `${data.message}`)
// })

// //Hvis fejl - vis dette 
// .catch (err => {
        
//         //Peger på vores div i html for at kunne pakke vores nye elementer ind i wrapperen 
//         const dogWrapper = document.querySelector('.dogWrapper');
        
//         //OPretter h3 der skal give besked om offline når der ingen net forbindelse er
//         const h3 = document.createElement('h3');
//         h3.innerHTML = 'Du er ofline'
//         dogWrapper.append(h3)

//         //Opretter img og sætter src til vores billede i assets
//         const img = document.createElement('img');
//         img.src = 
//         'assets/images/dog.png';
//           dogWrapper.append(img)
// })

