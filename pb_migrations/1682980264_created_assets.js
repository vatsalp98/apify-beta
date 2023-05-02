migrate((db) => {
  const collection = new Collection({
    "id": "nn1rxrg07fvs4h1",
    "created": "2023-05-01 22:31:04.992Z",
    "updated": "2023-05-01 22:31:04.992Z",
    "name": "assets",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "o5cejjmo",
        "name": "user_id",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "03rskrln",
        "name": "asset",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("nn1rxrg07fvs4h1");

  return dao.deleteCollection(collection);
})
