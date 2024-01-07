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
})