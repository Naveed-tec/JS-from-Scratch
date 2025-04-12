const day = 'sunday';
switch(day){
    case 'monday':
        console.log("Make a schedule for learning")
        break;
    case 'tuesday':
        console.log("Start implementing the schedule")
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Practice the learning")
        break;
    case 'friday':
        console.log("Revise your learning")
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy your weekend")
        break;
    default:
        console.log("Enter a valid day")
}