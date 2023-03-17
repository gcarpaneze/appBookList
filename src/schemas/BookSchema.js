
const BookSchema = {
    name: "Book",
    properties: {
        _id: "int",
        name: "string",
        price: "string"
    },
    primaryKey: "_id"
}

export {BookSchema};