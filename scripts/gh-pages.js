const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'https://github.com/agustinl/cuentas-claras.git',
        user: {
            name: 'agustinl',
            email: 'aencaje@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)