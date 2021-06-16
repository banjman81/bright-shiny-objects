// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘
function createUser(a,b){
    const user ={
        firstName: a,
        lastName: b
    }
    return user
}

function setAge(user, n){
    createUser(user)
    user.age = n;
    return user
}

function incrementAge(user){
    user.age+=1
    return user
}

function fixCar(a){
    a.needsMaitenance = false;
    return a
}


function addGrades(a, arr){
    for (const ar of arr){
        a.grades.push(ar)
    }
    return a
}
function getDataType(a, b){
    const result = typeof a[b]
    return result
}

function addTodo(a, b){
    a.push(b)
    return a
}

function addSong(a, b){
    a.songs.push(b)
    a.duration += b.duration
    return a
}

function updateReportCard(a, b){
    let sum = 0;
    a.grades.push(b)
    for (const g of a.grades){
        sum += g
        if(g < a.lowestGrade){
            a.lowestGrade = g
        }
        else if(g> a.highestGrade){
            a.highestGrade = g
        }
    }
    a.averageGrade = sum/a.grades.length
    return a
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
