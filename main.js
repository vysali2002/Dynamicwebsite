const calculate=()=>{
    if(HeightInput.value==""||WeightInput.value==""){
        alert("Please fill the form")
    }else{
   const h=document.getElementById("HeightInput").value
   const w=document.getElementById("WeightInput").value
   const BMI= (w / ((h * h) / 10000)).toFixed(2);
   result.value=BMI
   event.preventDefault();

   
         
        
    }
}