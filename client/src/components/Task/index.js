import React, { useEffect, useState } from "react";
// import { Tabs, Tab } from "react-bootstrap"
import {Grommet, Button } from "grommet"
import TaskAPI from "../../utils/taskAPI"


function Task() {

    const [tasks, setTasks] = useState({});

    useEffect(() => {
        loadTasks();
    }, []);

    function loadTasks() {
        TaskAPI.getAllTasks()
            .then(res => {
                const tasks = res.data
                setTasks(tasks)
                console.log(tasks)
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <p>Task Component</p>
               <Grommet className="App">
                    <Button primary label="label" />
                </Grommet>
        </div>
    );

}

export default Task;