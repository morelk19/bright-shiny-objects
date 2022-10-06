// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

function createUser(firstN, lastN){
    let user = {
        firstName : firstN,
        lastName: lastN,
    }
    return user;
}

function setAge(user, age){
    user.age = age;
    return user;
}

function incrementAge(user){
    user.age +=1;
    return user;
}

function fixCar(car){
    car.needsMaintenance = false;
    return car;
}

function addGrades(student, newGrades){
    student.grades = student.grades.concat(newGrades);
    return student;
}

function getDataType(object, key){
    return typeof object[key];
}

function addTodo(todos, newTodo){
    todos.push(newTodo);
    return todos;
}

function addSong(playlist, song){
    playlist.duration = playlist.duration + song.duration;
    playlist.songs.push(song);
    return playlist;
}

function updateReportCard(reportCard, grade){
    reportCard.grades.push(grade);

    let lowest = reportCard.lowestGrade;
    let highest = reportCard.highestGrade;
    let average = reportCard.averageGrade;
    let sum = 0;
    for(let i = 0; i < reportCard.grades.length; i++){
        sum+=reportCard.grades[i];
    }
    average = sum / reportCard.grades.length
    if(grade < lowest){
        reportCard.lowestGrade = grade;
    }else if(grade > highest){
        reportCard.highestGrade = grade;
    }
    reportCard.averageGrade = average;

    return reportCard;

}









// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
