<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
const Dash = require('dash');

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted() {
    this.init().then((d) => console.log(d))
        .catch((e) => console.error('Something went wrong:\n', e))
    ;
  },
  methods:{
    async init(){
      console.log("lets go");
      const clientOpts = {
        network: 'testnet',
        wallet: {
          mnemonic: 'decorate immune case diamond swift alien myth cup lens client guide liberty',
          unsafeOptions: {
            skipSynchronizationBeforeHeight: 415000, // only sync from start of 2021
          },
        },
        apps: {
          tutorialContract: {
            contractId: 'C96rCVpck4RdBQXG3zzP5KH4RKzfKVTsmTauu8FQenJi',
          },
        },
      };
      const client = new Dash.Client(clientOpts);

      const {platform} = client;

      const identity = await platform.identities.get('DdZrmsaPqbHWbriyhN9xTkwMnRT9y9xTMqay68sehjsJ');

      const docProperties = {
        message: `Tutorial Test @ ${new Date().toUTCString()}`,
      };

      // Create the note document
      const noteDocument = await platform.documents.create(
          'tutorialContract.note',
          identity,
          docProperties,
      );

      const documentBatch = {
        create: [noteDocument], // Document(s) to create
        replace: [],            // Document(s) to update
        delete: [],             // Document(s) to delete
      };
      // Sign and submit the document(s)
      return platform.documents.broadcast(documentBatch, identity);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
