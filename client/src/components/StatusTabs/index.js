import React, { useEffect, useState } from "react";
// import { Tabs, Tab } from "react-bootstrap"
import { Box, Grommet, FormField, Tab, Tabs, Text, TextInput } from 'grommet';
import { grommet } from 'grommet/themes';
import PropTypes from 'prop-types';
import TaskAPI from "../../utils/taskAPI"


function StatusTabs() {

    const [tasks, setTasks] = useState({});

    const RichTabTitle = ({ icon, label }) => (
        <Box direction="row" align="center" gap="xsmall" margin="xsmall">
        {icon}
        <Text size="small">
            <strong>{label}</strong>
        </Text>
        </Box>
    );

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
        <>
            <Grommet theme={grommet}>
                <Tabs>
                    <Tab
                        title={<RichTabTitle label="Goldfish" />}
                    >
                    </Tab>

                    <Tab
                        title={<RichTabTitle label="Platys" />}
                    >   
                    </Tab>
                    
                </Tabs>

            </Grommet>
        </>
    );

}



export default StatusTabs;