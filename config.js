'use strict';

module.exports = {
  url: 'https://blog.mantlecurve.com',
  title: 'Mantle \'s Escapades',
  subtitle: 'Personal blog of Mithun Madhusoodanan.',
  copyright: '',
  disqusShortname: '',
  postsPerPage: 5,
  googleAnalyticsId: '',
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    // {
    //   label: 'About me',
    //   path: '/pages/about'
    // },
    // {
    //   label: 'Contact me',
    //   path: '/pages/contacts'
    // }
  ],
  author: {
    name: 'Mantle \'s Escapades',
    photo: '/photo.jpg',
    bio: 'Someone who is in 0 1 business',
    contacts: {
      email: 'escapade@mantlecurve.com',
      telegram: 'mantlecurve',
      twitter: 'mantlecurve',
      github: 'mantlecurve',
      rss: 'rss.xml',
      // vkontakte: '#'
    }
  },
  siteMetadata: {
    siteUrl: 'https://blog.mantlecurve.com',
  },
  plugins: ['gatsby-plugin-feed'],
};
