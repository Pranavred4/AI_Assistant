// HomePage.jsx
import React, { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app'; // Updated import statement
import 'firebase/compat/database'; // Updated import statement

import firebaseConfig from '../firebaseConfig';

firebase.initializeApp(firebaseConfig);

const HomePage = () => {
    console.log('HomePage rendered');
    const [teachers, setTeachers] = useState([]);
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const [selectedGroup, setSelectedGroup] = useState(null);
    const [groups, setGroups] = useState([]);
    const [students, setStudents] = useState([]);


    useEffect(() => {
        const teachersRef = firebase.database().ref('teachers');
        teachersRef.on('value', (snapshot) => {
            const teachersData = snapshot.val();
            if (teachersData) {
                setTeachers(Object.values(teachersData));
                console.log("teachersData " + Object.values(teachersData)[0]);
                setSelectedTeacher(Object.values(teachersData)[0].name);
            }
        });

        const groupsRef = firebase.database().ref('groups');
        groupsRef.on('value', (snapshot) => {
            const groupsData = snapshot.val();
            if (groupsData) {
                setGroups(Object.values(groupsData));
            }
        });
        // Cleanup listeners on component unmount
        return () => {
            teachersRef.off('value');
            groupsRef.off('value');
        };
    }, []);

    useEffect(() => {
        if (selectedTeacher) {
            const selectedGroup = teachers.find((t) => t.name === selectedTeacher).assignedGroups[0];
            setSelectedGroup(selectedGroup);
        }
    }, [selectedTeacher]);

    useEffect(() => {
        if (selectedGroup) {
            const studentsRef = firebase.database().ref(`groups/${selectedGroup}/students`);
            studentsRef.on('value', (snapshot) => {
                const studentsData = snapshot.val();
                if (studentsData) {
                    setStudents(Object.values(studentsData));
                }
            });

            // Cleanup listener when a new group is selected
            return () => {
                studentsRef.off('value');
            };
        }
    }, [selectedGroup]);

    const handleTeacherClick = (teacherId) => {
        setSelectedTeacher(teacherId);
        setSelectedGroup(null); // Reset selected group when teacher changes
    };

    const handleGroupClick = (groupId) => {
        setSelectedGroup(groupId);
    };

    return (

        <>
            <div> <h1>AI Assitant</h1></div>

            <div className="container">

                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th>Teachers</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map((teacher) => (
                            <tr
                                key={teacher.name}
                                className={selectedTeacher === teacher.name ? 'selected' : ''}
                                onClick={() => handleTeacherClick(teacher.name)}
                            >
                                <td>{teacher.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
                {selectedTeacher && (

                    <table className="table">
                        <thead>
                            <tr>
                                <th>Groups for {selectedTeacher}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teachers
                                .find((t) => t.name === selectedTeacher)
                                .assignedGroups.map((groupId) => (
                                    <tr
                                        key={groupId}
                                        className={selectedGroup === groupId ? 'selected' : ''}
                                        onClick={() => handleGroupClick(groupId)}
                                    >
                                        <td>{groupId}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )}
                <br />
                {selectedGroup && (

                    <table className="table">
                        <thead>
                            <tr>
                                <th>{selectedGroup} , Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.name}>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default HomePage;