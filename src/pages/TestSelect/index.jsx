import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";

import { Load } from "../../components/Load";
import { Header } from "../../components/Header";
import { TestCardPrimary } from "../../components/TestCardPrimary";

import { api } from "../../services/api";
import { navigationRoute } from "../../utils/navigation";

import { Container, HeaderContent, Title, SubTitle, Tests, LottieViewAnimation } from "./styles";
import { colors } from "../../theme";

function TestSelect() {
  const navigation = navigationRoute();

  const [TestsList, setTestsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let Test = [{
      key: '1',
      title: 'Teste de Sintomas',
      subtitle: 'Informar sintomas que o profissional percebeu ou relatados pelo familiar, na aba de tutoriais tem informações que podem ser úteis para o preenchimento correto deste formulário'
    },
    {
      key: '2',
      title: 'Pfeffer',
      subtitle: 'Questionário de atividades funcionais de Pfeffer'
    },
    {
      key: '3',
      title: 'CDR',
      subtitle: 'Escala de avaliação clínica da demência'
    },
    {
      key: '4',
      title: 'GDS',
      subtitle: 'Escala de depressão geriátrica'
    },
    {
      key: '5',
      title: 'MEEM',
      subtitle: 'Mini Exame do Estado Mental'
    },
    {
      key: '6',
      title: 'MoCA',
      subtitle: 'Montreal Cognitive Assessment'
    }];
    setTestsList(Test);

    setLoading(false);
  }, [])

  return (
    <Container>
      <HeaderContent>
        <Header />

        <Title>A maior riqueza é a saúde. :D</Title>
        <SubTitle>Selecione qual teste deseja aplicar</SubTitle>
      </HeaderContent>

      {loading ?
        <Load />
        :
        <ScrollView style={{ marginTop: 10 }}>
          <Tests>
            {TestsList.map((item) => <TestCardPrimary key={item.key} data={item} />)}
            {/* <FlatList
            data={TestsList}
            renderItem={({ item }) => (<TestCardPrimary data={item} />)}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            onEndReachedThreshold={0.1}
          /> */}
          </Tests>
        </ScrollView>
      }
    </Container>
  );
}

export { TestSelect };
