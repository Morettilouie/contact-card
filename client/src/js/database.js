import { openDB } from 'idb';
import 'regenerator-runtime/runtime';

export const initdb = async () => {
    // we are creating a new database named 'contact_db' which will be using version 1 of the database
    openDB('contact_db', 1, {
        // add our database schema if it has not already been initialized
        upgrade(db) {
            if (db.objectStoreNames.contains('contacts')) {
                console.log('contacts store already exists');
                return;
            }
        }
    })
    // create a new object store for the data and give it a key name of 'id' which will increment automatically
    db.createObjectStore('contacts', { keyPath: 'id', autoIncrement: true });
    console.log('contacts store created');
};

export const getDb = async () => {
    console.log('GET from the database');

    // create a connection to the IndexedDB database and the version we want to use
    const contactDb = await openDB('contact_db', 1);

    // create a new trasaction and specify the store and data privileges
    const tx = contactDb.transaction('contacts', 'readonly');

    // open up the desired object store
    const store = tx.objectStore('contacts');

    // use the .get all() method to get all data in the database
    const request = store.getAll();

    // get confirmation of the request
    const result = await request;
    console.log('result.value', result);
    return;
};

export const postDb = async (name, email, phone, profile) => {
    console.log('POST to the database');

    // create a connection to the database and specify the version we want to use
    const contactDb = await openDB('constact_db', 1);

    // create a new rransaction and specify the store and data privileges
    const tx = contactDb.transaction('contacts', 'readwrite');

    // open up the desired object store
    const store = tx.objectStore('contacts');

    // use the .add() method on the store and pass the content
    const request = store.add({ name: name, email: email, phone: phone, profile: profile });

    // get confirmation of the request
    const result = await request;
    console.log('🚀 - data saved to the database', result);
}