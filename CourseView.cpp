//
//  CourseView.cpp
//  TrytonsPlan
//
//  Created by Dian Yu on 5/11/18.
//  Copyright © 2018 Dian Yu. All rights reserved.
//

//#include "Course.cpp"
#include <iostream>
#include <string>
#include <list>
using namespace std;

class CourseView {
public:
    void printCourseDetails(string courseID, string title, int units, string description, list<string> prerequisites) {
        cout << courseID << " " << title << '\n';
        cout << "Units: " << units << '\n';
        cout << "Description: " << description << '\n';
        cout << "Prerequisites: " << '\n';
        for (auto course : prerequisites)
            cout << course << '\n';
        
        cout << "\n\n";
    }
};
