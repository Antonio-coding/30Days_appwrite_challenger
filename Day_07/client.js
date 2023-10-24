import { Client, Account, ID } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('6520677a906c63f9b54d');               // Your project ID

const account = new Account(client);

const promise = account.create('me@example.com', 'password', 'Jane Doe');

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
