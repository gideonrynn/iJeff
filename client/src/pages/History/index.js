import React, {useState, useEffect} from "react";
import HistoryList from "../../components/HistoryList"
import HistoryAPI from "../../utils/histAPI"

function History() {

    const [history, setHistory] = useState([]);

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
        <div>
            <HistoryList history={history}/>
        </div>
    );

}

export default History;