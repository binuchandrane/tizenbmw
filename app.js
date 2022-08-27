let monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let day =   date.getDate();
    let month =   date.getMonth();

    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
     
     
  
    document.getElementById("txtSecond").innerHTML = ss; 
    document.getElementById("txtHour").innerHTML = hh; 
    document.getElementById("txtMinute").innerHTML = mm; 
    document.getElementById("txtDay").innerHTML = day; 
    document.getElementById("txtMonth").innerHTML = monthNames[month]; 
    
    
    

    
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();