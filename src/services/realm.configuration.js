import Realm from "realm";

import { BookSchema } from "../schemas/BookSchema";

const getRealm = async () => {
  return await Realm.open({
    schema: [BookSchema],
  });

}
export default getRealm;