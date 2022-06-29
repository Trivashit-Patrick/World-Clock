
        let a;
        let time;
        let date;
        let OtherTimeZone;
        // IndianTime
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const Indian_time= setInterval(()=>{
              
            a = new Date()
            
            if (a.getSeconds()<10){
              time = a.getHours() + ":"+a.getMinutes()+ ':'+ '0'+a.getSeconds();
            }
            else{
              time= a.getHours() +":"+ Math.abs(a.getMinutes()) + ':'+a.getSeconds();
            } 
            date = a.toLocaleDateString(undefined, options);
            document.getElementById('time').innerHTML  =time + "</br>"+ date
            document.getElementById('country-time').innerHTML= 'India'
              },1000)
              
            
      function European_countries(){
              
            OtherTimeZone = setInterval(()=>{
              a= new Date()
              if (a.getMinutes() < 30) {
                time= (a.getHours()-4) +":"+ Math.abs(a.getMinutes()+30) +':'+a.getSeconds();
              }
              else{
                time=(a.getHours()-3) +":"+ Math.abs(a.getMinutes()-30) +':'+a.getSeconds();
              }        
              date = a.toLocaleDateString(undefined, options);
              document.getElementById('time').innerHTML=time +  "</br>"+ date
            },1000)   
          }

        function EnglandTime(){
          OtherTimeZone = setInterval(()=>{
          a= new Date()

          if (a.getMinutes() < 30) { 
            time= (a.getHours()-5) +":"+ Math.abs(a.getMinutes()+30) +':'+a.getSeconds();
          }
          else{
            time=(a.getHours()-4) +":"+ Math.abs(a.getMinutes()-30) +':'+a.getSeconds();
          }
          date = a.toLocaleDateString(undefined, options);
          document.getElementById('time').innerHTML=time +  "</br>"+ date
          console.log(Britain)
        },1000) 
        }
