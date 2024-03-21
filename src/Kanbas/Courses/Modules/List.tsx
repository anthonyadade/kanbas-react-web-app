import React, { useState } from "react";
import "./index.css";
import db from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./reducer";
import { KanbasState } from "../../store";
function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();
    /*const [moduleList, setModuleList] = useState<any[]>(db.modules);
    //const modulesList = db.modules.filter((module) => module.course === courseId);
    const [module, setModule] = useState({
        name: "New Module",
        description: "New Description",
        course: courseId,
        _id: "0",
    });*/
    /*const deleteModule = (moduleId: string) => {
        const newModuleList = moduleList.filter(
            (module) => module._id !== moduleId );
        setModuleList(newModuleList);
    };

    const addModule = (module: any) => {
        const newModule = { ...module,
            _id: new Date().getTime().toString() };
        const newModuleList = [newModule, ...moduleList];
        setModuleList(newModuleList);
    };
    const updateModule = () => {
        const newModuleList = moduleList.map((m) => {
            if (m._id === module._id) {
                return module;
            } else {
                return m;
            }
        });
        setModuleList(newModuleList);
    };*/


    return (
        <>
            <li className="list-group-item d-flex">
                <button className={"wd-modules-button"} onClick={() =>
                    dispatch(addModule({ ...module, course: courseId }))}>Add</button>
                <button className={"wd-modules-button"} onClick={() => dispatch(updateModule(module))}>
                    Update
                </button>

                <input className={"wd-modules-inputs"} value={module.name}
                       onChange={(e) =>
                           dispatch(setModule({ ...module, name: e.target.value }))}
                />
                <textarea className={"wd-modules-inputs"} value={module.description}
                          onChange={(e) => setModule({
                              ...module, description: e.target.value })}
                />
            </li>
            <ul className="list-group wd-modules">
                {moduleList.filter((module) => module.course === courseId).map((module, index) => (
                    <li key={index}
                        className="list-group-item"
                        onClick={() => setModule(module)}>
                        <button className = "wd-modules-button"
                                onClick={() => dispatch(setModule(module))}>
                            Edit
                        </button>
                        <button className = "wd-modules-button"
                                onClick={() => dispatch(deleteModule(module._id))}>
                            Delete
                        </button>
                        <div>
                            <FaEllipsisV className="me-2" />
                            {module.name}
                            <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
                        </div>
                        {module._id === module._id && (
                            <ul className="list-group">
                                {module.lessons?.map((lesson: any, index: number) => (
                                    <li className="list-group-item" key={index}>
                                        <FaEllipsisV className="me-2" />
                                        {lesson.name}
                                        <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ModuleList;