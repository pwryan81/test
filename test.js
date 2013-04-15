var status = '';
var myArray = [1,2,3] ;
function toggleStar() {
    if (!status || status === 'flag') {
        status  = 'star';
    }
    else if (status === 'star') {
        status = '';
    }
    return status;
}

function toggleFlag() {
    if (!status || status === 'star') {
        status  = 'flag';
    }
    else if (status === 'flag') {
        status = '';
    }
    return status;
}
function cycleState() {
   switch (status) {
      case '' :
           status = 'flag';
           break;
       case 'flag':
           status = 'star';
           break;
       case 'star':
           status = '';
           break;
   }
    return status;
}

console.log('expect null: ' + status);
toggleFlag();
console.log('expect flag: ' + status);
toggleFlag();
console.log('expect null: ' + status);
toggleStar();
console.log('expect star: ' + status);
toggleStar();
console.log('expect null: ' + status);

cycleState();
console.log('expect flag: ' + status);
cycleState();
console.log('expect star: ' + status);
cycleState();
console.log('expect null: ' + status);



