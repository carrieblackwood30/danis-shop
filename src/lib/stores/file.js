import { Client, ID, Storage } from "appwrite";

const bucketId = '673c620c003c9b131394'

const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('6736fb70001f05d561ab');

const storage = new Storage(client);

export function getImg(fileId){
    return storage.getFilePreview(bucketId, fileId).href
}

export let createdId

export async function addFile(uploadingFile){
    createdId = ID.unique()
    await storage.createFile(
        bucketId,
        createdId,
        uploadingFile
    )
}