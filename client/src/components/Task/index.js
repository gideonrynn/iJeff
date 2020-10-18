import React, {useState, useEffect} from "react";
// import { Tabs, Tab } from "react-bootstrap"
import { Box, Button, Grommet, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import TaskAPI from "../../utils/taskAPI"


function Task(tk) {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {

        getTasks()

    }, [tk]);

    function getTasks() {
        let task = ""
        task = tk.these
        setTasks(task)

        // let defaultDate = new Date()
        // let currentDate = defaultDate.toISOString().split('T')[0]
        // console.log(currentDate)
    }

    function updateStatus(id) {

        TaskAPI.updateTask(id,
            {
                status: "done"
            })
            .then(window.location.reload(true))
            .catch(err => console.log(err))
    }

    return (
        <>
            <Box pad="small" gap="large">
            
                <Grommet theme={grommet}>
                    <Box align="center">
                            {tasks.map(tasks => (
                                <Button 
                                    key={tasks.id}
                                    onClick={() => updateStatus(tasks.id)}
                                    hoverIndicator="#6A4E90">
                                    <Box 
                                        pad={{ horizontal: 'medium', vertical: 'small' }}
                                        direction="row"
                                        align="center"
                                        gap="small">
                                        <Text>{tasks.description}</Text>
                                    </Box>
                                </Button>
                            ))}
                    </Box>
                </Grommet>
            </Box>
    
        </>
    );

}

export default Task;