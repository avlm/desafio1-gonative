/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  Text,
} from 'react-native';
import React, { Component } from 'react';
import './config/ReactotronConfig';
import Post from './components/Post';


class ambiente extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: 'Aprendendo React Native',
        author: 'Antonio Victor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae diam et arcu auctor interdum ac aliquam elit. Aliquam risus magna, lobortis sit amet quam nec, consequat fermentum neque. Proin ac nisl nibh. In sagittis est ut euismod convallis. Donec porta leo nec maximus pellentesque.',
      },
      {
        id: 1,
        title: 'Aprendendo React Native',
        author: 'Antonio Victor Luckwu Marques',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae diam et arcu auctor interdum ac aliquam elit. Aliquam risus magna, lobortis sit amet quam nec, consequat fermentum neque. Proin ac nisl nibh. In sagittis est ut euismod convallis. Donec porta leo nec maximus pellentesque.',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        author: 'Antonio Victor Luckwu Marques',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae diam et arcu auctor interdum ac aliquam elit. Aliquam risus magna, lobortis sit amet quam nec, consequat fermentum neque. Proin ac nisl nibh. In sagittis est ut euismod convallis. Donec porta leo nec maximus pellentesque.',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        author: 'Antonio Victor Luckwu Marques',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae diam et arcu auctor interdum ac aliquam elit. Aliquam risus magna, lobortis sit amet quam nec, consequat fermentum neque. Proin ac nisl nibh. In sagittis est ut euismod convallis. Donec porta leo nec maximus pellentesque.',
      },
      {
        id: 4,
        title: 'Aprendendo React Native',
        author: 'Antonio Victor Luckwu Marques',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae diam et arcu auctor interdum ac aliquam elit. Aliquam risus magna, lobortis sit amet quam nec, consequat fermentum neque. Proin ac nisl nibh. In sagittis est ut euismod convallis. Donec porta leo nec maximus pellentesque.',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.barTopText}>Primeiro App</Text>
        </View>
        <ScrollView style={styles.postsContainer}>
          { this.state.posts.map(post => <Post key={post.id} post={post} />) }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE7777',
  },

  postsContainer: {
    padding: 20,
  },

  header: {
    backgroundColor: '#fff',
    paddingTop: 17,
    paddingBottom: 17,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 100,
  },

  barTopText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  }
});

AppRegistry.registerComponent('ambiente', () => ambiente);
export default ambiente;
