import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: "#262626",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    paddingVertical: 16,
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 8,
  },
  taskContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1
  },
  taskContentParagraph: {
    fontSize: 14,
    color: "#F2F2F2",
  },
  taskButtonRemove: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  taskFinished: {
    textDecorationLine: "line-through",
    color: "#808080",
    fontSize: 14,
  }
})