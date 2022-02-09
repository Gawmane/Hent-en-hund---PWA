//Impoter fetch fra helpers fill
import { myfetch } from './helper.js'


//List funktion
const getGoalList = async() => {
    //Kalder data
    const data = await myfetch('https://dog.ceo/api/breeds/image/random');


   

            //Variabel til vores html div
            const dogWrapper = document.querySelector('.dogWrapper');

            //Laver en ny div hvor vi indsætter vores image fra vores data (img)
            const img = document.createElement('div');
            img.innerHTML = `<img  src='${data.message} '/>`;
            
           

            // //Sætter vores img i vores main fra HTML
            document.querySelector('main').append(img);
            dogWrapper.append(img);
      
        // GoalDetails();
}
getGoalList()