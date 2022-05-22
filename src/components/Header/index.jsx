import React, { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import userImg from "../../assets/avatar.png";
import { Container, Greeting, UserName, ImageProfile } from "./styles";

function Header() {
  const [useName, setUserName] = useState("");

  useEffect(() => {
    async function loadStorageUserName() {
      const user = JSON.parse(await AsyncStorage.getItem("@siddmanager:user"));

      setUserName(user.user.firstName || "");
    }

    loadStorageUserName();
  }, []);

  return (
    <Container>
      <View>
        <Greeting>Olá,</Greeting>
        <UserName>{useName}</UserName>
      </View>

      <ImageProfile source={userImg} />
    </Container>
  );
}

export { Header };
