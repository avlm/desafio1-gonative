import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Post = ({ post }) => (
  <View style={styles.postContainer}>
    <Text style={styles.title}>{post.title}</Text>
    <Text style={styles.author}>{post.author}</Text>
    <Text style={styles.description}>{post.description}</Text>
  </View>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#fff',
    elevation: 3,
    borderRadius: 6,
    shadowColor: '#DA6C6C',
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 100,
  },

  title: {
    fontSize: 20,
    color: '#333333',
    fontWeight: 'bold',
  },

  author: {
    color: '#999999',
  },

  description: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
    borderTopColor: '#EEEEEE',
    borderTopWidth: 1,
  },
});

export default Post;
