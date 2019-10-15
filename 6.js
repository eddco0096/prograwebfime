var c = document.getElementById("lineas2");
 var cxt = c.getContext("2d");

 // Dijujamos un fuerte
 cxt.beginPath();
 cxt.moveTo(30,30);
 cxt.lineTo(40,30);
 cxt.lineTo(40,40);
 cxt.lineTo(50,40);
 cxt.lineTo(50,30);
 cxt.lineTo(60,30);
 cxt.lineTo(60,40);
 cxt.lineTo(70,40);
 cxt.lineTo(70,30);
 cxt.lineTo(80,30);
 cxt.lineTo(80,40);
 cxt.lineTo(90,40);
 cxt.lineTo(90,30);
 cxt.lineTo(100,30);
 cxt.lineTo(100,40);
 cxt.lineTo(110,40);
 cxt.lineTo(110,30);
 cxt.lineTo(120,30);
 cxt.lineTo(120,40);
 cxt.lineTo(130,40);
 cxt.lineTo(130,30);
 cxt.lineTo(140,30);
 cxt.lineTo(140,40);
 cxt.lineTo(150,40);
 cxt.lineTo(150,30);
 cxt.lineTo(160,30);
 cxt.lineTo(160,40);
 cxt.lineTo(170,40);
 cxt.lineTo(170,30);
 cxt.lineTo(180,30);

 cxt.lineTo(180,40);
 cxt.lineTo(190,40);
 cxt.lineTo(190,30);
 cxt.lineTo(200,30);




 cxt.lineTo(200,90);
 cxt.lineTo(30,90);
 cxt.closePath(); // Cierra la figura
 cxt.stroke();

 // Dibujamos el palo de la bandera
 cxt.strokeStyle = "brown";
 cxt.beginPath();
 cxt.moveTo(55,30);
 cxt.lineTo(55,10);
 cxt.stroke();

 // Dibujamos una bandera
 cxt.fillStyle = "green";
 cxt.beginPath();
 cxt.moveTo(55,10);
 cxt.lineTo(65,15);
 cxt.lineTo(55,20);
 cxt.fill();  // Cierra la figura y rellena


 // Dibujamos la puerta
 cxt.fillStyle = "black";
 cxt.beginPath();
 cxt.moveTo(110,90);
 cxt.lineTo(120,75);
 cxt.lineTo(130,70);
 cxt.lineTo(140,75);
 cxt.lineTo(150,90);
 cxt.closePath(); // Cierra la figura
 cxt.fill(); // Y la rellena

