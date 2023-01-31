import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Directory from "./components/Directory/Directory";
import MainPage from "./components/MainPage/MainPage";
import TasksPage from "./components/TasksPage/TasksPage";
import Header from "./components/Header/Header"
import NewTasks from "./components/Tasks/NewTasks/NewTasks";
import DoneTasks from "./components/Tasks/DoneTasks/DoneTasks";
import ArchiveTasks from "./components/Tasks/ArchiveTasks/ArchiveTasks";

export default function TestTask() {
  return (
    <div>
          <Header/>
          <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/taskspage/*" element={<TasksPage/>}/>
                <Route path="/directory" element={<Directory/>}/>
                <Route path="/newtasks" element={<NewTasks/>}/>
                <Route path="/donetasks" element={<DoneTasks/>}/>
                <Route path="/archive" element={<ArchiveTasks/>}/>
          </Routes>
      </div>
  );
}
