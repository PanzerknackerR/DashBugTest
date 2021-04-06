import Dash from 'dash';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
//const Dash = require('dash');

const Home: React.FC = () => {

    const submitNoteDocument = async () => {
        const clientOpts = {
            network: 'testnet',
            wallet: {
                mnemonic: 'dish spice away comic hawk scheme main tribe stone announce gadget surround',
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
        console.log("client", client)

        //const { platform } = client;
        try {
            let platform = undefined;
            try {
                platform = undefined;
                platform = client.platform;
            } catch(e) {

            }
            if(platform != undefined) {
                const identity = await platform.identities.get('HhHTcmaMjc5LzwkjGWLYaGdhTvWQC2e4TkkeTxhApp8X');
                console.log("Identity : ", identity);
                const docProperties = {
                    message: `Tutorial Test @ ${new Date().toUTCString()}`,
                };
                console.log("docProps: ", docProperties);

                // Create the note document
                const noteDocument = await platform.documents.create(
                    'tutorialContract.note',
                    identity,
                    docProperties,
                );

                console.log("noteDocument:", noteDocument)
                const documentBatch = {
                    create: [noteDocument], // Document(s) to create
                    replace: [],            // Document(s) to update
                    delete: [],             // Document(s) to delete
                };
                // Sign and submit the document(s)
                console.log("Upload")
                platform.documents.broadcast(documentBatch, identity);
                console.log("uploaded")
            }
        } catch(e){

        }


    };

    const output = "Hello";
    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonButton onClick={() => submitNoteDocument()} >
            { output }
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
