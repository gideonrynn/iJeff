import React, {useEffect, useState} from "react";
import { Grommet, Box, Button, Grid, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCalendarAlt, faTasks, faHistory, faFish } from '@fortawesome/free-solid-svg-icons'


function MainGrid(comp) {

    const [sidebar, setSidebar] = useState(true);
    const [renderComp, setRenderComp] = useState();

    useEffect(() => {
 
        let renderComponent = "";
        renderComponent = comp.page
        setRenderComp(renderComponent)

    }, [comp]);

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
                            <Text size="large">iJeff</Text>
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

                            <Button hoverIndicator>
                                <Box pad={{ horizontal: 'medium', vertical: 'medium' }}>
                                    <Link className="nav-link" style={{ color: '#FFF' }} to="/" >
                                        <Text><FontAwesomeIcon icon={faHome} size="2x" /></Text>
                                    </Link>
                                </Box>
                            </Button> 

                            <Button hoverIndicator>
                                <Box pad={{ horizontal: 'medium', vertical: 'medium' }}>
                                    <Link className="nav-link" style={{ color: '#FFF' }} to="/" >
                                        <Text><FontAwesomeIcon icon={faTasks} size="2x" /></Text>
                                    </Link>
                                </Box>
                            </Button>                           
                            
                                <Button hoverIndicator>
                                    <Box pad={{ horizontal: 'medium', vertical: 'medium' }}>
                                        <Link className="nav-link" style={{ color: '#FFF' }} to="/" >
                                            <Text><FontAwesomeIcon icon={faFish} size="2x" /></Text>
                                        </Link>
                                    </Box>
                                </Button>
                            
                            
                                <Button hoverIndicator>
                                    <Box pad={{ horizontal: 'medium', vertical: 'medium' }}>
                                        <Link className="nav-link" style={{ color: '#FFF' }} to="/" >
                                            <Text><FontAwesomeIcon icon={faCalendarAlt} size="2x" /></Text>
                                        </Link>
                                    </Box>
                                </Button>
                        

                            <Button hoverIndicator>
                                <Box pad={{ horizontal: 'medium', vertical: 'medium' }}>
                                    <Link className="nav-link" style={{ color: '#FFF' }} to="/history" >
                                        <Text><FontAwesomeIcon icon={faHistory} size="2x" /></Text>
                                    </Link>
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

                        {renderComp}    
                        
                    </Box>

                </Grid>

            </Grommet>
    
        </>
    );

}

export default MainGrid;