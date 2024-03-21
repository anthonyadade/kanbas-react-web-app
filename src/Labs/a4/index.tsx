import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExamples from "./ReduxExamples";
const Assignment4 = () => {
    function sayHello() {
        alert("Hello");
    }

    return(
        <>
            <div className="container">
            <h1>Assignment 4</h1>
                <ReduxExamples/>
                <PassingFunctions theFunction={sayHello} />
                <ClickEvent/>
                <PassingDataOnEvent/>
                <EventObject/>
                <Counter/>
                <BooleanStateVariables/>
                <StringStateVariables/>
                <DateStateVariable/>
                <ObjectStateVariable/>
                <ArrayStateVariable/>
                <ParentStateComponent/>
            </div>
        </>
    );
};
export default Assignment4;