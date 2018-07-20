import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import './config/ReactotronConfig';
import Post from './components/Post';


export default class App extends Component<{}> {
  state = {
    info: [
      {
        id: 1,
        titulo: 'Aprendendo React Native',
        autor: 'Diego Schell Fernandes',
        conteudo: 'A Rocketseat é a menor distância entre você e os seus objetivos como programador. Nossa metodologia foi desenhada para te guiar com foco e clareza pelas ferramentas mais modernas de desenvolvimento web e mobile',
      },

      {
        id: 2,
        titulo: 'Aprendendo React Native',
        autor: 'Diego Schell Fernandes',
        conteudo: 'A Rocketseat é a menor distância entre você e os seus objetivos como programador. Nossa metodologia foi desenhada para te guiar com foco e clareza pelas ferramentas mais modernas de desenvolvimento web e mobile',
      },

      {
        id: 3,
        titulo: 'Aprendendo React Native',
        autor: 'Diego Schell Fernandes',
        conteudo: 'A Rocketseat é a menor distância entre você e os seus objetivos como programador. Nossa metodologia foi desenhada para te guiar com foco e clareza pelas ferramentas mais modernas de desenvolvimento web e mobile',
      },

      {
        id: 4,
        titulo: 'Aprendendo React Native',
        autor: 'Diego Schell Fernandes',
        conteudo: 'A Rocketseat é a menor distância entre você e os seus objetivos como programador. Nossa metodologia foi desenhada para te guiar com foco e clareza pelas ferramentas mais modernas de desenvolvimento web e mobile',
      },

      {
        id: 5,
        titulo: 'Aprendendo React Native',
        autor: 'Diego Schell Fernandes',
        conteudo: 'A Rocketseat é a menor distância entre você e os seus objetivos como programador. Nossa metodologia foi desenhada para te guiar com foco e clareza pelas ferramentas mais modernas de desenvolvimento web e mobile',
      },

      {
        id: 6,
        titulo: 'Aprendendo React Native',
        autor: 'Diego Schell Fernandes',
        conteudo: 'A Rocketseat é a menor distância entre você e os seus objetivos como programador. Nossa metodologia foi desenhada para te guiar com foco e clareza pelas ferramentas mais modernas de desenvolvimento web e mobile',
      },
    ],
  };


  render() {
    return (
    <View style={styles.conteiner}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
            GoNative APP
         </Text>
      </View>
      <ScrollView>

        {
          this.state.info.map(info => <Post
                                        key={info.id}
                                        titulo={info.titulo}
                                        autor={info.autor}
                                        conteudo={info.conteudo}
          />)

        }

      </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
//Header
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 20,
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },

  //conteiner
  conteiner: {
    flex: 1,
    backgroundColor: '#EE7777'
  }
});
