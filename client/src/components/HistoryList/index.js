import React, {useState, useEffect} from "react";
// import { Link } from 'react-router-dom'
import {
    Box,
    Grommet,
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
    Text,
  } from 'grommet';
  import { grommet } from 'grommet/themes';
//   import { data, columns } from './data';
// import API from "../../utils/API"

function HistoryList(ht) {

    const [histories, setHistories] = useState([]);

    useEffect(() => {

        getHistory()

    }, [ht]);

    function getHistory() {
        let hist = ""
        hist = ht.history
        setHistories(hist)
    }

    return (
        <>
        <Grommet theme={grommet}>
            <Box align="center" pad="large">
                <Table caption="All History">
                    <TableHeader>
                        <TableRow>
                        {['Task','Last Updated'].map(name => (
                            <TableCell key={name} scope="col">
                                <Text>{name}</Text>
                            </TableCell>
                            ))}
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {histories.map(histories => (
                            <TableRow key={histories.id}>
                                <TableCell key={histories.id} scope="col">
                                    <Text>{histories.Task.description}</Text>
                                </TableCell>
                                <TableCell scope="col">
                                    <Text>{histories.createdAt}</Text>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Grommet>
        </>
    );

}

export default HistoryList;