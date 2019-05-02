




// function sswReq() {
//     alert("ssw req")
//     var db = firebase.firestore();
//     var numSSSW = 0
//     var ALLSSW = db.collection("ALLSSW");
//     db.collection("ALLSSW").get().then(function (docs) {
//         docs.forEach(function(doc){
//             numSSW++;
//         })
//     })

//     var allClasses = {
//         1: ['CH 115', 'CH 117', 'E 101', 'E 120', 'E 121', 'E 115', 'CAL 103', 'MA 121', 'MA 122'],
//         2: ['PEP 111', 'E 122', 'CAL 105', 'MA 123', 'MA 124', 'MGT 103'],
//         3: ['MA 221', 'PEP 112', 'E 126', 'E 231', 'E 245'],
//         4: ['E 232', 'E 234', 'MA 134', 'SSW 215'],
//         5: ['ISE 350', 'E 321', 'E 344', 'E 243', 'SSW315'],
//         6: ['E 355', 'SSW 345', 'SSW 322', 'SSW 564', 'IDE 400'],
//         7: ['SSW 555', 'SSW 533', 'SSW 423', 'IDE 401'], 
//         8: ['SSW 567', 'SYS 581', 'IDE 402']
//     }

//     var sswTable = document.getElementById("sswTable");
//     sswTable.rows = 0;

//     db.collection("ALLSSW").get().then(function(docs){

//         var i = 1
//         docs.forEach(function(doc){
//             var data = doc.data();

//             var row = sswTable.insertRow(i);
//             var name_cell = row.insertCell(0);
//             var prereq_cell = row.insertCell(1);
//             var coreq_cell = row.insertCell(2);
//             var term_cell = row.insertCell(3);
//             var coordinator_cell = row.insertCell(4);

//             var prereqData = data.prereqs.replace(/Prerequisite: /g,"");
//             var coreqData = data.coreqs.replace(/Corequisite: /g,"");

//             name_cell.innerHTML = data.courseName;
//             prereq_cell.innerHTML = prereqData;
//             coreq_cell.innerHTML = coreqData;
//             term_cell.innerHTML = data.term;
//             coordinator_cell.innerHTML = data.instructor;

//             i = i + 1
//         });
//     })
// }

function allReq() {
    clearTable("sswTable")
    var db = firebase.firestore();
    var sswTable = document.getElementById("sswTable");
    var database = '';

    for (var x=8; x>0; x--) {
        if (x%2 == 1) {
            database = "FALL2";
        }
        else {
            database = "SPRING2";
        }
        
        db.collection(database).where("term", '==', x).get().then(function(docs){
        var i = 1
        docs.forEach(function(doc){
            var data = doc.data();

            var row = sswTable.insertRow(i);
            var name_cell = row.insertCell(0);
            var prereq_cell = row.insertCell(1);
            var coreq_cell = row.insertCell(2);
            var term_cell = row.insertCell(3);
            var coordinator_cell = row.insertCell(4);

            var prereqData = data.prereqs.replace(/Prerequisite: /g,"");
            var coreqData = data.coreqs.replace(/Corequisite: /g,"");
            var courseTitle = data.shortName + " - " + data.courseName

            name_cell.innerHTML = courseTitle;
            prereq_cell.innerHTML = prereqData;
            coreq_cell.innerHTML = coreqData;
            term_cell.innerHTML = data.term;
            coordinator_cell.innerHTML = data.instructor;

            i = i + 1;
        });
        })
    }
    
}

function allSSW() {
    clearTable("sswTable")

    var db = firebase.firestore();
    // var numSSSW = 0
    // var ALLSSW = db.collection("ALLSSW");
    // db.collection("ALLSSW").get().then(function (docs) {
    //     docs.forEach(function(doc){
    //         numSSW++;
    //     })
    // })

    var sswTable = document.getElementById("sswTable");
    //sswTable.rows = 0;

    db.collection("ALLSSW").get().then(function(docs){

        var i = 1
        docs.forEach(function(doc){
            var data = doc.data();

            var row = sswTable.insertRow(i);
            var name_cell = row.insertCell(0);
            var prereq_cell = row.insertCell(1);
            var coreq_cell = row.insertCell(2);
            var term_cell = row.insertCell(3);
            var coordinator_cell = row.insertCell(4);

            var prereqData = data.prereqs.replace(/Prerequisite: /g,"");
            var coreqData = data.coreqs.replace(/Corequisite: /g,"");

            name_cell.innerHTML = data.courseName;
            prereq_cell.innerHTML = prereqData;
            coreq_cell.innerHTML = coreqData;
            term_cell.innerHTML = data.term;
            coordinator_cell.innerHTML = data.instructor;

            i = i + 1;
        });
    })
}

function clearTable(table) {
    // var Table = document.getElementById("sswTable");
    // Table.innerHTML = "";

    var sswTables = document.getElementById(table);
    var tableRows = sswTables.getElementsByTagName('tr');
    var rowCount = tableRows.length;

    //sswTables.deleteRow(rowCount-1)

    for (var x=rowCount-1; x>0; x--) {
       sswTables.deleteRow(1);
    }

    // var sswTables = document.getElementById("sswTable");
    // var tableRows = sswTables.getElementsByTagName('tr');
    // var rowCount = tableRows.length;

    // for (var x=rowCount-1; x<0; x--) {
    //    sswTables.removeChild(tableRows[x]);
    // }

    // var x = document.getElementsByTagName("h3");
    // var l = x.length;
    // for (var i=0;i<l;i++) {
    //     x[i].style.color = "black";
    // }
}


//check add to array, uncheck remove from array, compare array to prereqs after hit submit
var prereqsArray = []

function prereqTaken(course) {
    if (prereqsArray.includes(course) == false) {
        prereqsArray.push(course)
        //alert(prereqsArray)
    }
    else {
        var index = prereqsArray.indexOf(course)
        if (index > -1) {
            prereqsArray.splice(index, 1)
        }
        //alert(prereqsArray)
    }
}

var database = "FALL2"
function selectTerm(term) {
    //alert(term)
    if (term == "FALL2") {
        database = "FALL2"
    }
    else {
        database = "SPRING2"
    }
}

function processPrereqs() {
    clearTable("prereqsAvailTable")

    var db = firebase.firestore();
    //alert(database);
    var prereqsAvailTable = document.getElementById("prereqsAvailTable");
    db.collection(database).get().then(function(docs){
        //alert(prereqsArray.length);
        var x = 1
        docs.forEach(function(doc){
            //alert("hello again again");
            var data = doc.data();
            if (prereqsArray.length == 0) {
                prereqsArray.length = 1
            }
            for (var i = 0; i < prereqsArray.length; i++) { 
                //alert("for loop");
                
                //alert("test?")
                //if (data.prereqs.contains(prereqsArray[i])){
                if (data.prereqs == ""){
                    //alert("should work");
                    var row = prereqsAvailTable.insertRow(x);
                    var name_cell = row.insertCell(0);
                    var prereq_cell = row.insertCell(1);
                    var coreq_cell = row.insertCell(2);
                    var term_cell = row.insertCell(3);
                    var coordinator_cell = row.insertCell(4);
            
                    var prereqData = data.prereqs.replace(/Prerequisite: /g,"");
                    var coreqData = data.coreqs.replace(/Corequisite: /g,"");
                    var courseTitle = data.shortName + " - " + data.courseName

                    name_cell.innerHTML = courseTitle;
                    prereq_cell.innerHTML = prereqData;
                    coreq_cell.innerHTML = coreqData;
                    term_cell.innerHTML = data.term;
                    coordinator_cell.innerHTML = data.instructor;
                    x = x + 1;
               // }
                // else {
                    // alert("error");
                }
            //}
        })
    });
}
    //clearTable()

    // clearTable()
    // var db = firebase.firestore();
    // var sswTable = document.getElementById("sswTable");
    // var database = '';

    // for (var x=8; x>0; x--) {
    //     if (x%2 == 1) {
    //         database = "FALL2";
    //     }
    //     else {
    //         database = "SPRING2";
    //     }
        
    //     db.collection(database).where("term", '==', x).get().then(function(docs){
    //     var i = 1
    //     docs.forEach(function(doc){
    //         var data = doc.data();

    //         var row = sswTable.insertRow(i);
    //         var name_cell = row.insertCell(0);
    //         var prereq_cell = row.insertCell(1);
    //         var coreq_cell = row.insertCell(2);
    //         var term_cell = row.insertCell(3);
    //         var coordinator_cell = row.insertCell(4);

    //         var prereqData = data.prereqs.replace(/Prerequisite: /g,"");
    //         var coreqData = data.coreqs.replace(/Corequisite: /g,"");
    //         var courseTitle = data.shortName + " - " + data.courseName

    //         name_cell.innerHTML = courseTitle;
    //         prereq_cell.innerHTML = prereqData;
    //         coreq_cell.innerHTML = coreqData;
    //         term_cell.innerHTML = data.term;
    //         coordinator_cell.innerHTML = data.instructor;

    //         i = i + 1;
    //     });
    //     })
   