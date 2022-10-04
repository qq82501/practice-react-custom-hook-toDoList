import React, { useEffect, useState, useCallback } from "react";
import useFetch from "./hooks/use-fetch";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
  const [tasks, setTasks] = useState([]);

  const dataTransform = useCallback(function (rawData) {
    let fetchTasks = [];
    for (const key in rawData) {
      fetchTasks.push({ id: key, text: rawData[key].text });
    }
    setTasks(fetchTasks);
  }, []);

  const { isLoading, error, httpRequest: getTaskData } = useFetch();

  useEffect(() => {
    getTaskData(
      "https://react-starwar-post-default-rtdb.firebaseio.com//tasks.json",
      null,
      dataTransform
    );
  }, [getTaskData, dataTransform]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={getTaskData.bind(
          null,
          "https://react-starwar-post-default-rtdb.firebaseio.com//tasks.json",
          null,
          dataTransform
        )}
      />
    </React.Fragment>
  );
}

export default App;
