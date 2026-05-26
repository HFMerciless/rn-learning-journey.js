import { Client, Account, Avatars } from 'react-native-appwrite';

export const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('6a0c56f70009e43c0c51')
    .setPlatform('com.hf.merciless.bookshelf');

export const account = new Account(client);
export const avatars = new Avatars(client);