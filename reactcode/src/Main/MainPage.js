import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, withRouter} from "react-router-dom";
import Login from './Components/Login'
import CourseSearchBar from './Components/CourseSearchBar'



class MainPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            redirectToReferrer: true,
            items:[]
        };

        this.firebaseRef = this.props.db.database().ref('course');

        this.firebaseRef.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['.Key'] = childSnapshot.key;
                items.push(item);
            });
            this.setState({items});
        });
    }

    logout = () => {
        this.setState({ redirectToReferrer: false });
    };


    render(){

        const { redirectToReferrer } = this.state;
        const records = this.state.items.map(items =>
            <tr key = {items.courseid}>
                <td style={{width: '200px', textAlign: 'center'}}>{items.courseID}</td>
                <td style={{width: '200px', textAlign: 'center'}}>{items.title}</td>
            </tr>
        )

        if (!redirectToReferrer) {
            return <Login db={this.props.db} />;
        }

        return (
            <div>
                <button onClick={this.logout}>Log out</button>

                <h1>Trytonsplan</h1>
                <CourseSearchBar />
                <table style={{border: '1px solid black'}}>
                    <thead>
                    <tr>
                        <th>Course ID</th>
                        <th>Course Title</th>
                    </tr>
                    </thead>
                    <tbody>
                    {records}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MainPage;