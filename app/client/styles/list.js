'use strict';

const StyleSheet = require('react-styles');

module.exports = StyleSheet.create({

  list: {
    listStyleType: 'none',
    padding: '0',
    margin: '0'
  },

  listItem: {
    marginLeft: '20px',
    marginRight: '20px',
    padding: '0'
  },

  listItemHeader: {
    fontSize: '1.1em',
    fontWeight: '700',
    padding: '5px 20px'
  },

  listItemFirst: {
    marginTop: '20px'
  },

  listItemLast: {
    marginBottom: '20px'
  },

  listItemLastLinkLast: {
    paddingBottom: '0'
  },

  listItemLastLink: {
    color: '#7a7a7a',
    textDecoration: 'none',
    display: 'block',
    padding: '10px 50px 10px 20px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  }

});