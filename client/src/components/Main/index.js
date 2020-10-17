import React from "react";
import { Grommet, Box, Grid } from 'grommet';
import { grommet } from 'grommet/themes';
import StatusTabs from "../StatusTabs"
import FishState from "../../components/FishState"
// import TaskAPI from "../../utils/taskAPI"


function Main() {

    return (

      <Grommet theme={grommet}>
        
        <Grid columns="large" gap="large">

          <Box
            direction="row-responsive"
            justify="center"
            align="center"
            background="#FFFFFF"
          >
            <FishState/>

            <StatusTabs/>

          </Box>

        </Grid>

      </Grommet>

    );

}

export default Main;