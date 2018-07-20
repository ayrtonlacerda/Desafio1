import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Post extends Component {
  render() {
    return (
      <View style={styles.post}>
        <Text style={styles.titulo}>
          {this.props.titulo}
        </Text>
        <Text style={styles.autor}>
          {this.props.autor}
        </Text>

        <View style={styles.line}>
          <Text style={styles.lineText}>
            ___________________________________
          </Text>
        </View>

        <Text style={styles.conteudo}>
          {this.props.conteudo}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  post: {
    padding: 20,
    margin: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    height: 200,
    flexDirection: 'column'
  },

  titulo: {
    color: '#333333',
    fontSize: 18,
    fontWeight: 'bold',
  },

  autor: {
    color: '#999999',
    fontSize: 11,
  },

  line: {
    alignItems: 'center'
  },

  lineText: {
    color: '#c6c7c9'
  },

  conteudo: {
    color: '#666666',
    fontSize: 14,
  }
});
