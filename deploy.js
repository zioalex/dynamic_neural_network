const ghpages = require('gh-pages');

ghpages.publish('build', {
  branch: 'gh-pages',
  repo: 'https://github.com/zioalex/react-gh-pages.git',
  user: {
    name: 'Alessandro S.',
    email: '3593840+zioalex@users.noreply.github.com'
  }
}, (err) => {
  if (err) {
    console.error('Error during deployment:', err);
  } else {
    console.log('Deployment successful!');
  }
});
