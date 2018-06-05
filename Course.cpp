//
//  Course.cpp
//  TrytonsPlan
//
//  Created by Dian Yu on 5/11/18.
//  Copyright © 2018 Dian Yu. All rights reserved.
//

#include <iostream>
#include <string>
#include <list>
using namespace std;

class Course {
    
private:
    string courseID;
    string title;
    int units;
    string description;
    list<string> prerequisites;
    
public:
    void setCourseID(string courseID) {
        this->courseID = courseID;
    }
    
    string getCourseID() const {
        return this->courseID;
    }
    
    void setTitle(string title) {
        this->title = title;
    }
    
    string getTitle() const {
        return this->title;
    }
    
    void setUnits(int units) {
        this->units = units;
    }
    
    int getUnits() const {
        return this->units;
    }
    
    void setDescription(string description) {
        this->description = description;
    }
    
    string getDescription() const {
        return this->description;
    }
    
    void setPrerequisites(list<string> prerequisites) {
        this->prerequisites = prerequisites;
    }
    
    list<string> getPrerequisites() const {
        return this->prerequisites;
    }
};
