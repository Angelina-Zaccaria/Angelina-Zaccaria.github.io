'''
Created on Apr 10, 2019

@author: oliviapowers
'''

class SSWCourseInformation:
        """contains all information for the Software Engineering Major"""
        #all the class info will be stored in a list
        classes = []
        
        
        def __init__(self, name):
                self.courseName = name
                self.professor = ''
                self.prereqFor = []
                self.prereq = []
                self.coreq = []
                self.offered = []
                self.classes.append(self)
                
        def setPrereq(self, course):
            self.prereq += [course]
        
        def setCoreq(self, course):
            self.coreq += [course]
        
        def setPrereqFor(self, course):
            self.prereqFor += [course]
        
        def getPrereqs(self):
            """gets all prereq information for the specified course"""
            for courses in self.prereq:
                print(courses.courseName)
        
        def getPrereqsFor(self):
            """gets all prereq for information for the specified course"""
            for courses in self.prereqFor:
                print(courses.courseName)
        
        def getCoreqs(self):
            """gets all coreq information for the specified course"""
            for courses in self.coreq:
                print(courses.courseName)
        
        def getTimeOffered(self):
            """gets the semesters offered for the specified course"""

        
        
"""inputting all classes in the SSW course ciriculum"""

#semester one classes
CH115 = SSWCourseInformation('CH 115')
CH117 = SSWCourseInformation('CH 117')
CH117.setCoreq(CH115)
E101 = SSWCourseInformation('E 101')
E120 = SSWCourseInformation('E 120')
E121 = SSWCourseInformation('E 121')
E115 = SSWCourseInformation('E 115')
CAL103 = SSWCourseInformation('CAL 103')
MA121122 = SSWCourseInformation('MA 121, MA 122')
#semester two classes
SE = SSWCourseInformation('Science Elective')
PEP111 = SSWCourseInformation('PEP 111')
E122 = SSWCourseInformation('E 122')
E122.setPrereq(E121)
E121.setPrereqFor(E122)
CAL105 = SSWCourseInformation('CAL 105')
MA123124 = SSWCourseInformation('MA 123, MA 124')
MA123124.setPrereq(MA121122)
MA121122.setPrereqFor(MA123124)
MGT103 = SSWCourseInformation('MGT 103')
#semester three classes
MA221 = SSWCourseInformation('MA 221')
MA221.setPrereq(MA123124)
MA123124.setPrereqFor(MA221)
PEP112 = SSWCourseInformation('PEP 112')
PEP112.setPrereq(PEP111)
PEP112.setPrereq(MA121122)
PEP111.setPrereqFor(PEP112)
MA121122.setPrereqFor(PEP112)
E126 = SSWCourseInformation('E 126')
E126.setPrereq(PEP111)
PEP111.setPrereqFor(E126)
E231 = SSWCourseInformation('E 231')
E231.setPrereq(E122)
E122.setPrereqFor(E231)
E231.setCoreq(E126)
E245 = SSWCourseInformation('E 245')
E245.setCoreq(PEP112)
E245.setCoreq(MA221)
HUM = SSWCourseInformation('Humanity')
#semester four classes
E232 = SSWCourseInformation('E 232')
E232.setPrereq(E231)
E232.setPrereq(E245)
E231.setPrereqFor(E232)
E245.setPrereqFor(E232)
E234 = SSWCourseInformation('E 234')
E234.setPrereq(CH115)
E234.setPrereq(MA121122)
E234.setPrereq(PEP111)
CH115.setPrereqFor(E234)
MA121122.setPrereqFor(E234)
PEP111.setPrereqFor(E234)
MA134 = SSWCourseInformation('MA 134')
SSW215 = SSWCourseInformation('SSW 215')
SE2 = SSWCourseInformation('Science elective')
HUM2 = SSWCourseInformation('humanities')
#semester five classes
E344 = SSWCourseInformation('E 344')
E344.setPrereq(CH115)
CH115.setPrereqFor(E344)
E243 = SSWCourseInformation('E 243')
E243.setPrereq(MA123124)
MA123124.setPrereqFor(E243)
ISE350 = SSWCourseInformation('ISE 350')
ISE350.setCoreq(E243)
E321 = SSWCourseInformation('E 321')
E321.setCoreq(E344)
SSW315 = SSWCourseInformation('SSW 315')
SSW315.setPrereq(SSW215)
SSW215.setPrereqFor(SSW315)
HUM3 = SSWCourseInformation('Humanity')
#semester six classes
E355 = SSWCourseInformation('E 355')
E355.setPrereq(E232)
E232.setPrereqFor(E355)
SSW345 = SSWCourseInformation('SSW 345')
SSW345.setPrereq(MA134)
SSW345.setPrereq(SSW315)
SSW315.setPrereqFor(SSW345)
MA134.setPrereqFor(SSW345)
SSW322 = SSWCourseInformation('SSW 322')
SSW322.setPrereq(SSW315)
SSW315.setPrereqFor(SSW322)
SSW564 = SSWCourseInformation('SSW 564')
GE = SSWCourseInformation('General Elective')
DE = SSWCourseInformation('Domain Elective')
IDE400 = SSWCourseInformation('IDE 400')
#semester seven classes
SSW555 = SSWCourseInformation('SSW 555')
SSW533 = SSWCourseInformation('SSW 533')
SSW423 = SSWCourseInformation('SSW 423')
SSW423.setPrereq(SSW322)
SSW423.setPrereq(SSW345)
SSW423.setPrereq(SSW315)
SSW423.setPrereq(SSW215)
SSW215.setPrereqFor(SSW423)
SSW315.setPrereqFor(SSW423)
SSW345.setPrereqFor(SSW423)
SSW322.setPrereqFor(SSW423)
GE2 = SSWCourseInformation('General Elective')
DE2 = SSWCourseInformation('Domain Elective')
IDE401 = SSWCourseInformation('IDE 401')
#semester eight classes
SSW567 = SSWCourseInformation('SSW 567')
SYS581 = SSWCourseInformation('SYS 581')
SSW424 = SSWCourseInformation('SSW 424')
SSW424.setPrereq(SSW423)
SSW423.setPrereqFor(SSW424)
HUM4 = SSWCourseInformation('Humanity')


#running some tests....
MA221.getPrereqs()
MA123124.getPrereqsFor()
E231.getCoreqs()


