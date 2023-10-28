 
 const throttleFunction=(func, delay)=>{
     
      
      let prev = 0; 
      return (...args) => {
        let now = new Date().getTime();
        if(now - prev> delay){ 
          prev = now;
     
          
          return func(...args);  
        }
      }
    }
    document.querySelector("#rect").addEventListener("mousemove", throttleFunction((dets)=>{
      var dive=document.createElement("div");
      dive.classList.add('imagediv');
      dive.style.left=dets.clientX+'px';
      dive.style.top=dets.clientY+'px';

      var img= document.createElement("img");
      img.setAttribute("src","https://plus.unsplash.com/premium_photo-1697945800806-e5d8fe424928?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
       dive.appendChild(img);
      document.body.appendChild(dive);
       gsap.to(img, {
        y:"0",
        ease:Power2,
        // duration: .2,
       })
       gsap.to(img, {
        y:"100%",
        delay:.6,
        
        ease:Power2,
        
       })
      setTimeout(function(){
        dive.remove();
      },2000)
    }, 400));