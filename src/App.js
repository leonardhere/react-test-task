import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Directory from "./components/Directory/Directory";
import MainPage from "./components/MainPage/MainPage";
import TasksPage from "./components/TasksPage/TasksPage";
import Header from "./components/Header/Header"

export default function TestTask() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/taskspage" element={<TasksPage/>}/>
          <Route path="/directory" element={<Directory/>}/>
        </Routes>
      </div>
    </Router>
  );
}
