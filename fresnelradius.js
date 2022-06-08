function calculate() {
 var input1 = document.getElementById("lat1").value.split(",");
 console.log(input1[0], input1[1]);

  var lat1 = parseFloat(input1[0]);
    var lon1 = parseFloat(input1[1]);

  var input2 = document.getElementById("lat2").value.split(",");
  console.log(input2[0],input2[1]);
  var lat2 = parseFloat(input2[0]);
  var lon2 = parseFloat(input2[1]);

    
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km


    var frequency = parseFloat(document.getElementById("channel frequency").value);
    var fres =
      Math.round(17.32 * Math.sqrt(d / ((4 * frequency) / 1000)) * 100) /
      100;
  console.log(fres, frequency, d)
    document.getElementById("fresnelRadius").value = fres;
   
    
    document.getElementById("linkDistance").value = d;
    return fres, d;
  } 

  
  function deg2rad(deg) {
    return deg * (Math.PI/180)
    
  }
 /*
  function fresnelzone() {
    // Calculating fresnel zone radius
    var frequency = parseFloat(document.getElementById("channel frequency").value);
    var distance = parseFloat(document.getElementById("linkDistance").value);
    var fres =
      Math.round(17.32 * Math.sqrt(distance / ((4 * frequency) / 1000)) * 100) /
      100;
  console.log(fres, frequency, distance)
    document.getElementById("fresnelRadius").value = fres;
    return fres;
    
  }
   */ 
  
  