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
            term_cell.innerHTML = data.offered;
            coordinator_cell.innerHTML = data.instructor;

            i = i + 1;
        });
        })
    }
    
}

function allSSW() {
    clearTable("sswTable")

    var db = firebase.firestore();

    var sswTable = document.getElementById("sswTable");

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
    var sswTables = document.getElementById(table);
    var tableRows = sswTables.getElementsByTagName('tr');
    var rowCount = tableRows.length;

    for (var x=rowCount-1; x>0; x--) {
       sswTables.deleteRow(1);
    }
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
            var data = doc.data();

            if (data.prereqs == "" || prereqsArray.length == 0){
                if (data.prereqs == ""){
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
                    term_cell.innerHTML = data.offered;
                    coordinator_cell.innerHTML = data.instructor;
                    x = x + 1;
                }
            }

            else {
                //alert("hi");
                var valid = [];
                //alert(data.pre.length);
                for (var i = 0; i < data.pre.length; i++) {
                    //alert("first for loop");
                    var indivValid = [];
                    for (var j = 0; j < prereqsArray.length; j++) {
                        //alert(data.pre[i]);
                        //alert("second for loop");
                        if (data.pre[i].includes(prereqsArray[j]) == true) {
                            //alert("true");
                            valid.push("true");
                            indivValid.push("true");
                        }
                        else {
                            //alert("false");
                            if ((j == prereqsArray.length - 1) && (indivValid.includes("true") == false)) {
                                valid.push("false");
                            }
                        }
                    }
                }
               // alert(valid);
                
                if (valid.includes("false") == false) {
                    //alert(valid);
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
                    term_cell.innerHTML = data.offered;
                    coordinator_cell.innerHTML = data.instructor;
                    x = x + 1;
                }
                

            }
        })
    });
}
   