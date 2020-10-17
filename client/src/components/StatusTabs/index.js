import React, { useEffect, useState } from "react";
import { Box, Grommet, Tab, Tabs, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import Task from '../../components/Task'
import TaskAPI from "../../utils/taskAPI"


function StatusTabs() {

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

    const RichTabTitle = ({ icon, label }) => (
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
                        <Tab
                            title={<RichTabTitle label="Goldfish" />}
                        >
                            <Task task={tasks}/>
                        </Tab>

                        <Tab
                            title={<RichTabTitle label="Platys" />}
                        >   
                            <Text>
                                Change water<br></br>
                                Clean glass<br></br>
                                Clean glass<br></br>
                                Vaccuum substrate<br></br>
                                Clean decorations<br></br>
                                Boil airstones<br></br>
                                Clean and replace filters<br></br>
                                Clean hood<br></br>
                                Test water and record results<br></br>
                            </Text>
                        </Tab>
                        
                    </Tabs>
                    
                </Grommet>
            </Box>
        </>
    );

}



export default StatusTabs;