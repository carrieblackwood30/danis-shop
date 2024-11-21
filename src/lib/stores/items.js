import { ID, Query } from "appwrite";
import { databases } from "@/lib/appwrite.js";
import { reactive } from "vue";

export const GOODS_DATABASE_ID = "673c5ef400020d220ea3";
export const GOODS_COLLECTION_ID = "673ec46800167811124d";

export const goods = reactive({
  current: [],
  async init() {
    const response = await databases.listDocuments(
    GOODS_DATABASE_ID,
    GOODS_COLLECTION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(10)]
    );
    this.current = response.documents;
  },
  async add(good) {
    const response = await databases.createDocument(
    GOODS_DATABASE_ID,
    GOODS_COLLECTION_ID,
      ID.unique(),
      good
    );
    this.current = [response, ...this.current].slice(0, 10);
  },
  async remove(id) {
    await databases.deleteDocument(GOODS_DATABASE_ID, GOODS_COLLECTION_ID, id);
    this.current = this.current.filter((good) => good.$id !== id);
    await this.init();
  },
  async update(id){
    await databases.updateDocument(GOODS_DATABASE_ID,GOODS_COLLECTION_ID,id)
    await this.init()
  }
});