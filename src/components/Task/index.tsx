import { Text, TouchableOpacity, View } from "react-native";
import * as Icon from "@expo/vector-icons";

import { styles } from "./styles";

interface ITask {
  id: string;
  title: string;
  finished: boolean;
}

interface TaskProps {
  task: ITask
  onSetTaskFinish(taskId: string): void
  onRemoveTask(taskId: string): void
}

export function Task({ task, onRemoveTask, onSetTaskFinish }: TaskProps) {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskContent}>
        <TouchableOpacity onPress={() => onSetTaskFinish(task.id)}>
          <Icon.FontAwesome
            name={`${task.finished ? "check-circle" : "circle-thin"}`}
            color="#4EA8DE"
            size={18}
          />
        </TouchableOpacity>
        <Text
          style={
            task.finished
              ? styles.taskFinished : styles.taskContentParagraph
          }
        >
          {task.title}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.taskButtonRemove}
        onPress={() => onRemoveTask(task.id)}
      >
        <Icon.EvilIcons name="trash" color="#808080" size={24} />
      </TouchableOpacity>
    </View>
  )
}