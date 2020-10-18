import React, { useEffect, useState } from "react";
import { Box, Grommet, Tab, Tabs, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import Task from '../../components/Task'
import TaskAPI from "../../utils/taskAPI"


function StatusTabs() {

    const [tasks, setTasks] = useState([]);
    const [tasksT1, setTasksT1] = useState([]);
    const [tasksT2, setTasksT2] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    function loadTasks() {

        let tasks = "";
        TaskAPI.getStatusNull()
            .then(res => {
                tasks = res.data

                let todoT1 = tasks.filter(tasks => { 
                    return tasks.tank === "1"
                });

                let todoT2 = tasks.filter(tasks => { 
                    return tasks.tank === "2"
                });
                
                setTasks(tasks);
                setTasksT1(todoT1);
                setTasksT2(todoT2);
                return tasks

            }).then(res => {
                if (res <= 0) {
                    console.log("You did it!")
                }
            })
            .catch(err => console.log(err));
    }

    function showImage1() {
        console.log("show Goldfish one")
    }

    function showImage2() {
        console.log("show Platys two")
    }

    const TabTitle = ({ icon, label }) => (
        <Box direction="row" align="center" gap="xsmall" margin="xsmall">
        {icon}
        <Text size="small">
            <strong>{label}</strong>
        </Text>
        </Box>
    );


    return (
        <>
            <Box
                height="medium"
            >
                <Grommet theme={grommet}>
                    <Tabs>
                        <Box onClick={showImage1}>
                            <Tab title={<TabTitle label="Goldfish"/>}>
                                <Task tasks={tasksT1}/>
                            </Tab>
                        </Box>
                        <Box onClick={showImage2}>
                            <Tab title={<TabTitle label="Platys"/>}>   
                                <Task tasks={tasksT2}/>
                            </Tab>
                        </Box>  
                    </Tabs>
                </Grommet>
            </Box>
        </>
    );

}



export default StatusTabs;