import { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import * as Icon from "@expo/vector-icons";

import { styles } from "./styles";
import { Task } from "../../components/Task";
import { Header } from "../../components/Header";
import { useTask } from "../../context/useTask";

export default function Home() {
  const { tasks, addNewTask, finishTask, removeTask } = useTask();
  const [task, setTask] = useState<string>("");

  async function handleAddNewTask() {
    if (!task) return;
    addNewTask(task)
    setTask("");
  }

  return (
    <View style={styles.container}>
      <Header />


      <View style={styles.content}>
        <View style={styles.formNewTask}>
          <TextInput
            placeholder="Adicione uma nova tarefa"
            style={styles.inputNewTask}
            placeholderTextColor="#808080"
            onChangeText={(e) => setTask(e)}
            value={task}
          />
          <TouchableOpacity
            style={styles.buttonNewTask}
            onPress={handleAddNewTask}
          >
            <Icon.AntDesign name="pluscircleo" color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.tasks}>
          <FlatList
            data={tasks}
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
