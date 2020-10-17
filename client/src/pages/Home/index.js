import React, { useState } from "react";
import { Grommet, Box, Button, Grid, Text } from 'grommet';
import { grommet } from 'grommet/themes';
// import { deepMerge } from 'grommet/utils';
import Main from "../../components/Main"
// import API from "../../utils/API"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faTasks, faHistory, faFish } from '@fortawesome/free-solid-svg-icons'

function Home() {

    const [sidebar, setSidebar] = useState(true);

    // const customFocus = deepMerge(grommet, {
    //     global: {
    //       colors: {
    //         focus: 'neutral-3',
    //       },
    //     },
    //   });

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
                            {/* {['Status', 'Schedule', 'History', 'Links'].map(name => ( */}
                                <Button href="#" hoverIndicator>
                                    <Box pad={{ horizontal: 'medium', vertical: 'medium' }}>
                                        <Text><FontAwesomeIcon icon={faFish} size="2x" /></Text>
                                    </Box>
                                </Button>
                            {/* ))} */}

                            <Button href="#" hoverIndicator>
                                <Box pad={{ horizontal: 'medium', vertical: 'medium' }}>
                                    <Text><FontAwesomeIcon icon={faCalendarAlt} size="2x" /></Text>
                                </Box>
                            </Button>
                            <Button href="#" hoverIndicator>
                                <Box pad={{ horizontal: 'medium', vertical: 'medium' }}>
                                    <Text><FontAwesomeIcon icon={faTasks} size="2x" /></Text>
                                </Box>
                            </Button>
                            <Button href="#" hoverIndicator>
                                <Box pad={{ horizontal: 'medium', vertical: 'medium' }}>
                                    <Text><FontAwesomeIcon icon={faHistory} size="2x" /></Text>
                                </Box>
                            </Button>

                        </Box>
                    )}

                    <Box 
                        gridArea="main"
                        pad="medium" 
                        justify="center" 
                        align="center"
                        background="#FFFFFF">

                            <Main/>
                        
                    </Box>

                </Grid>

            </Grommet>
       
       </>
    );

}


export default Home;