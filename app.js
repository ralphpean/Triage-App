const patientList = [
  'Paul',
  'Jan',
  'Tri',     
  'Maryam'
]

alert(patientList);

var command = prompt('Choose one: update, delete, add, reorder, end');

function myAdd (){
  let addList = prompt('Enter patient name?');
  patientList.push(addList);
  alert(patientList);
  console.log(patientList)
};


function myDelete (){
      let deleteName = prompt( 'Enter name of patient to be removed'); 
      let removeName = patientList.indexOf(deleteName);
      patientList.splice(removeName,1); 
      alert(patientList); 
}; 
  
 function myUpdate () {
      let oldName = prompt ('Enter name of patient'); 
      let newName = prompt ('Enter patient new name'); 
      let findIndex = patientList.indexOf(oldName);
       patientList[findIndex] = newName; 
      alert(patientList);
      console.log(patientList); 
}; 

function myReorder (){

  let patient1 = prompt ('Enter name of first patient name to be switched');
  let patient2 = prompt ('Enter name of second patient name to be switched');
  let findIndex1 = patientList.indexOf (patient1);
  let findIndex2 = patientList.indexOf (patient2);
  patientList.splice (findIndex1,1, patient2);
  patientList.splice (findIndex2,1, patient1);
  alert(patientList); 
  console.log(patientList);
};


while(command != "end"){
  if(command == "add"){
  myAdd(); 
  var command = prompt('Choose one: update, delete, add, reorder, end');
  }else if(command == "delete"){
    myDelete(); 
    var command = prompt('Choose one: update, delete, add, reorder, end');
  }else if(command == "update"){
    myUpdate();
    var command = prompt('Choose one: update, delete, add, reorder, end');
   }else if (command == "reorder"){
    myReorder(); 
    var command = prompt('Choose one: update, delete, add, reorder, end');
  }else if(command === "end"){
    break; 
    
  }
  }; 




