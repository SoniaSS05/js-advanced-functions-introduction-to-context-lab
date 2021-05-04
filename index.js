// Your code here

function createEmployeeRecord(datEmployee){
   const dataEmployee ={
                    firstName: datEmployee[0],
                    familyName: datEmployee[1],
                    title: datEmployee[2],
                    payPerHour: datEmployee[3],
                    timeInEvents: new Array(),
                    timeOutEvents: new Array()
   }
   return dataEmployee;
}


function createEmployeeRecords(datEmployeeRecord){
    const arrdatEmployeeRecord= datEmployeeRecord.map(reaDatEmp);
    return arrdatEmployeeRecord;
}

function reaDatEmp(recReaDatEmp){
    const eachReadaTemp = {
        firstName: recReaDatEmp[0],
        familyName:recReaDatEmp[1],
        title:recReaDatEmp[2],
        payPerHour:recReaDatEmp[3],
        timeInEvents: new Array(),
        timeOutEvents: new Array()
     }
    return eachReadaTemp;
}

function createTimeInEvent(recEmployee, recDate){
    let cutRecDate = recDate.substr(0,10);
    let cutRecTime = parseInt(recDate.substr(11,4));
    recEmployee.timeInEvents.push( {type: 'TimeIn',
                                hour: cutRecTime,
                                date: cutRecDate
    });
    return recEmployee;
}


function createTimeOutEvent(recEmployee, recDate){  
    let cutRecDate = recDate.substr(0,10);
    let cutRecTime = parseInt(recDate.substr(11,4));
    recEmployee.timeOutEvents.push({type: 'TimeOut',
                                    hour: cutRecTime,
                                    date: cutRecDate
    })
    return recEmployee;
}

function hoursWorkedOnDate(recEmployee,recDate){
    let lookOut = recEmployee.timeOutEvents;
    let lookIn = recEmployee.timeInEvents;
    const ubicRecIn = lookIn.find(lookDate => lookDate.date === recDate);
    const ubicRecOut = lookOut.find(lookDate => lookDate.date === recDate);
    const hoursWorked = (ubicRecOut.hour - ubicRecIn.hour)/100;
    return hoursWorked;
}


function wagesEarnedOnDate(recEmployee,recDate){
    let hoursWork = hoursWorkedOnDate(recEmployee,recDate);
    let owedOneDay = hoursWork * recEmployee.payPerHour;
    return owedOneDay;
}

function allWagesFor(recEmployee){
    const lookIn = recEmployee.timeInEvents;
    const dateAll = lookIn.map((lookIn)=>wagesEarnedOnDate(recEmployee,lookIn.date));
    const calcDateAll = dateAll.reduce(totalPay);
    return calcDateAll;
}

function totalPay(total,elem){
    return total + elem;
}

function calculatePayroll(recEmployee){
    console.log(' entre a calcular');
    const eachEmployees =recEmployee.map((recEmployee)=>allWagesFor(recEmployee));
    const allEmployees = eachEmployees.reduce(totalPay);
    return allEmployees;
}

function findEmployeeByFirstName(recEmployee, fName){
    console.log('first ' +fName);
    const nameEmp = recEmployee.find((recEmployee)=>recEmployee.firstName === fName);
    return nameEmp;
}

