import React from "react";
// import React, { useEffect, useState } from "react";
import fish from '../../images/fish1.jpg'
// import fisho from '../../images/fish2.jpg'
import {Grommet, Box } from "grommet"
// import TaskAPI from "../../utils/taskAPI"


function FishState() {

    // const [tasks, setTasks] = useState({});

    // useEffect(() => {
  
    // }, []);

    return (
        <>
            <Box
                height="medium">
                    <img src={fish} alt="One Fish" height={300} width={300}/>
                    {/* <img src={fisho} alt="Two Fish" height={300} width={300}/> */}
            </Box>
        </>
    );

}

export default FishState;