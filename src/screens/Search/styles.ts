import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },
  header: {
    marginTop: 32,
    backgroundColor: "#0D0D0D",
    display: "flex",
    paddingVertical: 16,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  logo: {
    color: "#4EA8DE",
    fontWeight: "bold",
    fontSize: 34,
  },
  logoEnphases: {
    fontWeight: "bold",
    color: "#5E60CE",
  },
  content: {
    marginLeft: 24,
    marginRight: 24,
  },
  formNewTask: {
    flexDirection: "row",
    gap: 4,
    marginTop: 16,
  },
  inputNewTask: {
    backgroundColor: "#262626",
    color: "#808080",
    borderRadius: 6,
    height: 52,
    paddingHorizontal: 16,
    flex: 1,
  },
  tasks: {
    marginTop: 32
  },
  taskStatus: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20
  },
  status: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  statusTitleCreated: {
    color: "#4EA8DE",
    fontWeight: "bold",
  },
  statusTitleFinished: {
    color: "#8284FA",
    fontWeight: "bold",
  },
  statusInfo: {
    backgroundColor: "#333333",
    color: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontWeight: "bold",
    fontSize: 12,
  },
});
