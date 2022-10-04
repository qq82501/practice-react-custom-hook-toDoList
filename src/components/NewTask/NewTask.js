import { useState } from "react";

import useFetch from "../../hooks/use-fetch";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const { isLoading, error, httpRequest: sendTaskRequest } = useFetch();
  const enterTaskHandler = async (taskText) => {
    const transformData = function (data) {
      const addedTask = {
        id: data.name,
        text: taskText,
      };
      props.onAddTask(addedTask);
    };

    const httpRequestConfig = {
      url: "https://react-starwar-post-default-rtdb.firebaseio.com//tasks.json",
      option: {
        method: "POST",
        body: JSON.stringify({ text: taskText }),
        headers: {
          "Content-Type": "application/json",
        },
      },
    };

    sendTaskRequest(
      httpRequestConfig.url,
      httpRequestConfig.option,
      transformData
    );

    // try {
    //   const response = await fetch(
    //     "https://react-starwar-post-default-rtdb.firebaseio.com//tasks.json",
    //     {
    //       method: "POST",
    //       body: JSON.stringify({ text: taskText }),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error("Request failed!");
    //   }

    //   const data = await response.json();

    //   const generatedId = data.name; // firebase-specific => "name" contains generated id
    //   const createdTask = { id: generatedId, text: taskText };

    //   props.onAddTask(createdTask);
    // } catch (err) {
    //   setError(err.message || "Something went wrong!");
    // }
    // setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
