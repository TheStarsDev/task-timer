import { Text, View, Image } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require("../../assets/rocket.png")}
        alt="Logotipo TodoList"
      />
      <Text style={styles.logo}>
        To
        <Text style={styles.logoEnphases}>do</Text>
      </Text>
    </View>
  )
}