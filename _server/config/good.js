'use strict';

module.exports = {
    ops: {
        interval: 1000
    },
    reporters:{
        console: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{
                log: '*',
                response: '*',
                request: '*',
                error: '*'
            }]
        }, {
            module: 'good-console'
        }, 'stdout']
    } 
};
