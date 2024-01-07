import { useMemo, useState } from "react";
import { TextInput, View, FlatList } from "react-native";

import { Task } from "../../components/Task";
import { Header } from "../../components/Header";
import { useTask } from "../../context/useTask";

import { styles } from "./styles";

export default function Search() {
  const { tasks, finishTask, removeTask } = useTask();
  const [task, setTask] = useState<string>("");

  const tasksFiltered = useMemo(() => {
    return tasks.filter(m => m.title.toLowerCase().includes(task.toLowerCase()))
  }, [task, tasks]);

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <View style={styles.formNewTask}>
          <TextInput
            placeholder="Buscar tarefa"
            style={styles.inputNewTask}
            placeholderTextColor="#808080"
            onChangeText={(e) => setTask(e)}
            value={task}
          />
        </View>

        <View style={styles.tasks}>
          <FlatList
            data={tasksFiltered}
            keyExtractor={(item) => String(item.id)}
            scrollEnabled
            renderItem={({ item: task }) => (
              <Task task={task} onRemoveTask={removeTask} onSetTaskFinish={finishTask} />
            )}
          />
        </View>
      </View>
    </View>
  );
}
