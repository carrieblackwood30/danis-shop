import { Client, Databases, Account} from 'appwrite';

export const client = new Client();
export const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6736fb70001f05d561ab'); 

export const account = new Account(client);
export { ID } from 'appwrite';