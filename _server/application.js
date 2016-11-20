'use strict';

// import libraries
const Hapi = require('hapi');
const Good = require('good');
const Status = require('./data/status');
let Todos = require('./data/todos');

const internals = {}; // Declare internals >> see: http://hapijs.com/styleguide

/**
 * Function to register Good plugin
 *
 * @param server - HapiJS server instance
 * @param callback - callback method
 * @private
 */
internals._registerGoodPlugin = (server, callback) => {

    server.register(
        {
            register: Good,
            options: require('./config/good')
        },
        (err) => {

            callback(err);
        }
    );
};

/**
 * Application Class definition
 */
class Application {

    // constructor
    constructor(){

        // Create hapi server instance
        this._server = new Hapi.Server();
    }

    /**
     * Method to return HapiJS server instance
     *
     * @returns {*} instance of HapiJS server
     */
    get server() {

        return this._server;
    }

    /**
     * Method to set HapiJS server instance
     *
     * @params {*} instance of HapiJS server
     */
    set server(value) {

        this._server = value;

    }

    /**
     * Function to launch application
     */
    launch(callback) {

        // adding a new connection that can be listened on
        this.server.connection(require('./config/api'));

        // register log before all plugins
        internals._registerGoodPlugin(this.server, err => {
            // check if error occurred during plugins registration
            if (err) {
                throw err;
            }

            // get all status
            this.server.route({
                method: 'GET',
                path: '/api/status',
                handler: (request, reply) => reply(Status)
            });

            // get all todos
            this.server.route({
                method: 'GET',
                path: '/api/todos',
                handler: (request, reply) => reply(Todos)
            });

            // get one todo by id
            this.server.route({
                method: 'GET',
                path: '/api/todos/{id}',
                handler: (request, reply) => reply(Todos.find(t => t.id === request.params.id))
            });

            // create new todo
            this.server.route({
                method: 'POST',
                path: '/api/todos',
                handler: (request, reply) => {
                    const payload = request.payload;
                    const todo = Object.assign({}, {id: '' + new Date().getTime(), label: payload.label, status: JSON.parse(payload.status)});
                    Todos = Todos.concat(todo);
                    reply(todo);
                },
                config: {
                    payload: {
                        output: 'data',
                        allow: 'application/json',
                        parse: true
                    }
                }
            });

            // update one todo by id
            this.server.route({
                method: 'PUT',
                path: '/api/todos/{id}',
                handler: (request, reply) => {
                    const todo = Todos.find(t => t.id === request.params.id);
                    const payload = request.payload;
                    todo.label = payload.label;
                    todo.status = JSON.parse(payload.status);
                    Todos = Todos.map(t => {
                        if (t.id === todo.id) {
                            return todo;
                        }

                        return t;
                    });

                    reply(todo);
                },
                config: {
                    payload: {
                        output: 'data',
                        allow: 'application/json',
                        parse: true
                    }
                }
            });

            // delete one todo by id
            this.server.route({
                method: 'DELETE',
                path: '/api/todos/{id}',
                handler: (request, reply) => {
                    const todo = Todos.find(t => t.id === request.params.id);

                    Todos = Todos.filter(t => t.id !== todo.id);

                    reply(todo);
                }
            });

            // start server
            this.server.start((err) => {

                // check if error occurred during server starting
                if (err) {
                    throw err;
                }

                this.server.log(['info'], '< Application.launch > Server started at: ' + this.server.info.uri);

                // callback for unit test
                if (callback) {
                    callback();
                }
            });
        });
    }

    /**
     * Returns singleton instance
     *
     * @returns {null|Application|*}
     */
    static getInstance() {

        // singleton
        if (!(internals._instance instanceof Application)) {
            internals._instance = new Application();
        }

        return internals._instance;
    }
}

/**
 * Export Application class
 *
 * @type {Application}
 */
module.exports = Application;