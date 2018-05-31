//
//  CourseController.cpp
//  TrytonsPlan
//
//  Created by Dian Yu on 5/11/18.
//  Copyright © 2018 Dian Yu. All rights reserved.
//

#include "Course.cpp"
#include "CourseView.cpp"
#include <iostream>
#include <string>
#include <list>
using namespace std;

class CourseController {
private:
    Course model;
    CourseView view;
    
public:
    CourseController(Course model, CourseView view) {
        this->model = model;
        this->view = view;
    }
    
    void setCourseID(string courseID) {
        model.setCourseID(courseID);
    }
    
    string getCourseID() const {
        return model.getCourseID();
    }
    
    void setTitle(string title) {
        model.setTitle(title);
    }
    
    string getTitle() const {
        return model.getTitle();
    }
    
    void setUnits(int units) {
        model.setUnits(units);
    }
    
    int getUnits() const {
        return model.getUnits();
    }
    
    void setDescription(string description) {
        model.setDescription(description);
    }
    
    string getDescription() const {
        return model.getDescription();
    }
    
    void setPrerequisites(list<string> prerequisites) {
        model.setPrerequisites(prerequisites);
    }
    
    list<string> getPrerequisites() const {
        return model.getPrerequisites();
    }
    
    void updateView() {
        view.printCourseDetails(model.getCourseID(), model.getTitle(), model.getUnits(), model.getDescription(), model.getPrerequisites());
    }
};
