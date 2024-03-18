import React, { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../../../config";
import { useCounterStore } from "../../store/counter-store";
import { useNavigation } from "@react-navigation/native";

export const SettingsScreen = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `contador ${count}`,
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => {
          increment();
        }}
      >
        <Text>+1</Text>
      </Pressable>
      <Pressable
        style={styles.primaryButton}
        onPress={() => {
          decrement();
        }}
      >
        <Text>{-1}</Text>
      </Pressable>
    </View>
  );
};
