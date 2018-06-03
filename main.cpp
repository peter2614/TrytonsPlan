//
//  main.cpp
//  TrytonsPlan
//
//  Created by Dian Yu on 5/11/18.
//  Copyright © 2018 Dian Yu. All rights reserved.
//

#include "CourseController.cpp"
//#include "CourseView.cpp"
//#include "Course.cpp"
#include <iostream>
#include <string>
#include <list>
using namespace std;

Course retriveCourseFromDatabase();

int main(int argc, const char * argv[]) {
    
    // MVC Pattern Demo for course
    
    Course model = retriveCourseFromDatabase();
    CourseView view;
    CourseController controller(model, view);
    
    controller.updateView();
    
    controller.setDescription("Gary runs this place!");
    
    controller.updateView();
    
    return 0;
}

Course retriveCourseFromDatabase() {
    Course course;
    course.setCourseID("CSE110");
    course.setTitle("Software Engineering");
    course.setUnits(4);
    course.setDescription("This is the best class of UCSD!");
    list<string> prereq;
    prereq.push_back("CSE 100");
    course.setPrerequisites(prereq);
    
    return course;
}
