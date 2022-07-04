let pointsArray = [];
let gainedArray = [];
function addf(){
    let subject = document.getElementById('subjectname')
    let h = document.getElementById('hours')
    let g = document.getElementById('grade')

        let gained = (h.value)*(g.value)
        let points = (h.value)*5
        
        

    
    
    
    if(subject.value !=='')
    {
        let subject = document.getElementById('subjectname')
        let h = document.getElementById('hours')
        let g = document.getElementById('grade')

        let gained = (h.value)*(g.value)
        let points = (h.value)*5


       
        
        
        
        
        
        
        let row = document.createElement('tr')
        document.getElementById('table').appendChild(row)
        
        let tdsubject = document.createElement("td")
        tdsubject.innerHTML = subject.value
        document.getElementById('table').appendChild(tdsubject)
        
        let tdgained = document.createElement('te')
        tdgained.innerHTML = gained
        document.getElementById('table').appendChild(tdgained)

        

        
       




        
       

        
        

        

        gainedArray.unshift(gained)
        pointsArray.unshift(points)

        




    }
    
    
    
    else{alert('Please put a vaild subject name !')}







}



















/*----------------------------------------------------------------------------------------------------------*/
function GPA(){
   
let sumgained = 0
    gainedArray.forEach(sumgainedf);

function sumgainedf(item) {
  sumgained += item;
}

let sumpoints = 0
   pointsArray.forEach(sumpointsf);

function sumpointsf(item) {
  sumpoints += item;
}

let GPAA = sumgained/sumpoints * 5



    const roundToHundredth = (value) => {
    return Number(value.toFixed(2));
  };

let GPA = roundToHundredth(GPAA)
if(GPA >= 0){
document.getElementById('GPAspace').innerHTML=GPA }


    

   
    
   











}