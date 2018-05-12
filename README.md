# vuex-form-binding

This is a (somewhat contrived) reference implementation built  to demonstrate how we can leverage Vue's two-way data binding while respecting Vuex's state mutation rules.

Or at least, it will be...

Scaffolded via [vue-cli 3](https://github.com/vuejs/vue-cli)

---

Run with e2e tests:

    npm run e2e:open

The above command runs a production build to test against, which means no debug logging or dev tools.  To run in development mode, fire up two terminals

    npm run serve

then, 

    ./node_modules/.bin/vue-cli-service e2e:open --url http://localhost:8080 (sub in your npm serve url)