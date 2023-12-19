function studentGrade(){
    
    let marks = document.getElementById('marks').value
    if (marks < 40){
      document.getElementById('grade').innerHTML = 'Your grade is E'
  
      }
      else if(marks > 40 && marks == 49){
        document.getElementById('grade').innerHTML = 'Your grade is D'
    }
  
    else if (marks > 49 && marks < 60){
        document.getElementById('grade').innerHTML = 'Your grade is C'
    }
    else if (marks > 59 && marks < 70){
        document.getElementById('grade').innerHTML = 'Your grade is B'
   }
   else {
    document.getElementById('grade').innerHTML = 'Your grade is A'
      
   }
  
  }
[18/12, 12:06] Paul Putland: <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Grade Generator</title>
</head>

<body>
    <h4>Grade Students</h4>
    <form action="">
        <input type="text" id="marks">
        <input type="button" value="Submit" onclick="studentGrade()">
    </form>
    <p id="grade"></p>
    <h4>Speed Detector</h4>
    <form action="">
        <input type="text" id="speed">
        <input type="button" value="Submit" onclick="speedDetector()">
    </form>
    <p id="grade"></p>
    <p id="ticket"></p>
    <script src="./studentgrade.js"></script>
    <script src="./speed.js"></script>
    

    
</body>
</html>



