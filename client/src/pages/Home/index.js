import React, { useEffect, useState } from "react";
import { Grommet, Box, Button, Grid, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import Task from "../../components/Task"
// import API from "../../utils/API"

function Home() {

    const [sidebar, setSidebar] = useState(true);

    // useEffect(() => {}, []);

    return (

        <>
          
            <Grommet full theme={grommet}>

                <Grid
                    fill
                    rows={['auto', 'flex']}
                    columns={['auto', 'flex']}
                    areas={[
                    { name: 'header', start: [0, 0], end: [1, 0] },
                    { name: 'sidebar', start: [0, 1], end: [0, 1] },
                    { name: 'main', start: [1, 1], end: [1, 1] },
                    ]}
                >
                    <Box
                        gridArea="header"
                        direction="row"
                        align="center"
                        justify="between"
                        pad={{ horizontal: 'medium', vertical: 'small' }}
                        background="#4A2D73"
                    >
                        <Button onClick={() => setSidebar(!sidebar)}>
                            <Text size="large">Jeff</Text>
                        </Button>

                        <Text>To thine own self be true</Text>
                    </Box>

                    {sidebar && (
                        <Box
                            gridArea="sidebar"
                            background="#6A4E90"
                            width="small"
                            animation={[
                            { type: 'fadeIn', duration: 300 },
                            { type: 'slideRight', size: 'xlarge', duration: 150 },
                            ]}
                        >
                            {['Status', 'Schedule', 'History'].map(name => (
                                <Button key={name} href="https://www.youtube.com/watch?v=t8LD0iUYv80" hoverIndicator>
                                    <Box pad={{ horizontal: 'medium', vertical: 'medium' }}>
                                        <Text>{name}</Text>
                                    </Box>
                                </Button>
                            ))}
                        </Box>
                    )}

                    <Box 
                        gridArea="main" 
                        justify="center" 
                        align="center"
                        background="#FFFFFF">
                        <Task/>
                    </Box>

                </Grid>

            </Grommet>
       
       </>
    );

}

export default Home;