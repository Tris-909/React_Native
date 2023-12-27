import Realm from 'realm';
export interface BlogType {
  id: Realm.BSON.ObjectId;
  title: string;
  content: string;
}
