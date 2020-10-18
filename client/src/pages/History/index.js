import React, {useState, useEffect} from "react";
import HistoryList from "../../components/HistoryList"
import HistoryAPI from "../../utils/histAPI"
import MainGrid from '../../components/MainGrid'

function History() {

    const [history, setHistory] = useState([]);

    const comp = <HistoryList history={history}/>;

    useEffect(() => {
        loadHistory()
    }, []);

    function loadHistory() {

        let history = "";

        HistoryAPI.getAllHistory()
            .then(res => {

                history = res.data;
                setHistory(history);
                console.log(history)
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <MainGrid page={comp}/>
            
        </>
    );

}

export default History;