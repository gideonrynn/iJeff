import React, {useState, useEffect} from "react";
// import { Tabs, Tab } from "react-bootstrap"
import { Box, Button, Grommet, Text } from 'grommet';
import { grommet } from 'grommet/themes';
// import TaskAPI from "../../utils/taskAPI"


function Task(alltasks) {

    const [tasks, setTasks] = useState({});

    useEffect(() => {

        if (tasks > 0) {
            setTasks(alltasks)
        }
  
    }, []);

    return (
        <>
            <Box pad="small" gap="large">
                <Grommet theme={grommet}>
                    <Box align="center">
                        <Button hoverIndicator="light-1" onClick={() => {}}>
                            <Box 
                                pad="small" 
                                direction="row" 
                                align="center" 
                                gap="small">
                                <Text>Add</Text>
                            </Box>
                        </Button>
                    </Box>
                </Grommet>
            </Box>
            {/* {tasks.map(tasks => (

            ))} */}
        </>
    );

}

export default Task;