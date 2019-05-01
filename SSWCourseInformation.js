#SSW Course Information

class SSWCourseInformation{
        classes = []
        
        
        constructor(ID, name){
                this.courseName = name
                this.professor = ''
                this.prereqFor = []
                this.prereq = []
                this.coreq = []
                this.offered = []
                this.classes.push()

        }
                
       	set Prereq(course){
            this.prereq += [course];

        }
        
 		set Coreq(course){
            this.coreq += [course];

        }
        
        set PrereqFor(course){
            this.prereqFor += [course];
        }
        
        get Prereqs(){
            """gets all prereq information for the specified course"""
            for courses in this.prereq{
                print(courses.courseName);
            }
        }
        
        get PrereqsFor(){
            """gets all prereq for information for the specified course"""
            for courses in this.prereqFor{
                print(courses.courseName);
            }
        }
        
        get Coreqs(){
            """gets all coreq information for the specified course"""
            for courses in this.coreq{
                print(courses.courseName);
            }

        }
        
        get TimeOffered(){
            """gets the semesters offered for the specified course"""
        }

}

var CH115 = SSWCourseInformation('CH 115')