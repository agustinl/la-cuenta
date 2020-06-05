const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/la-cuenta',
    {
        branch: 'master',
        repo: 'https://github.com/agustinl/la-cuenta.git',
        user: {
            name: 'agustinl',
            email: 'aencaje@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)