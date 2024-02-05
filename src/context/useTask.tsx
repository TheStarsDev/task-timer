import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface TaskContextProps {
  tasks: ITask[];
  addNewTask: (taskTitle: string) => void;
  finishTask: (taskId: string) => void;
  removeTask: (taskId: string) => void;
}

const taskContext = createContext({} as TaskContextProps);

interface ITask {
  id: string;
  title: string;
  finished: boolean;
}

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<ITask[]>([]);

  async function addNewTask(taskTitle: string) {
    const newTask: ITask = {
      id: String(new Date().getMilliseconds()),
      title: taskTitle,
      finished: false,
    };

    setTasks((tasks) => [...tasks, newTask]);
    await AsyncStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  }

  function finishTask(taskId: string) {
    const taskFinished = tasks.map((task) => {
      return task.id === taskId
        ? {
            ...task,
            finished: !task.finished,
          }
        : task;
    });

    setTasks(taskFinished);
  }

  function removeTask(taskId: string) {
    const filterTask = tasks.filter((task) => task.id !== taskId);
    setTasks(filterTask);
  }

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const value = JSON.parse((await AsyncStorage.getItem("tasks")) || "[]");

        if (!value) {
          console.log("Nenhuma task encontrada");
        }

        setTasks(value);
      } catch (e) {}
    };

    loadTasks();
  }, []);

  return (
    <taskContext.Provider
      value={{
        addNewTask,
        finishTask,
        removeTask,
        tasks,
      }}
    >
      {children}
    </taskContext.Provider>
  );
}

export const useTask = () => useContext(taskContext);
