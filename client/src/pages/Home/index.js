import React from "react";
import Main from "../../components/Main"
import MainGrid from '../../components/MainGrid'

function Home() {

    const comp = <Main/>;

    return (

        <>
            <MainGrid page={comp}/>
       
       </>
    );

}


export default Home;