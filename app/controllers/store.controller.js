const DbQueries = require("../db/query");
const DbConnection = require("../db/connection");
const generateCode = require("../helpers/utility");

exports.getAllStoresList = async (req, res) => {
  try {
    const getAllStoresListQuery = DbQueries.Queries.GET_ALL_STORES_LIST_QUERY;
    const result = await DbConnection.connection(getAllStoresListQuery);
    return res.status(200).json(result.rows);
  } catch (err) {
    console.log("Error : Store<getAllStoresList()>", err);
    return res.status(500).json({ error: err });
  }
};

exports.getStore = async (req, res) => {
  try {
    const store_id = req.params.store_id;

    if (!store_id) return res.status(400).json({ error: "Invalid store_id" });

    const getStoreQuery = DbQueries.Queries.GET_STORE_QUERY_BY_ID;
    const result = await DbConnection.connection(getStoreQuery, [store_id]);
    return res.status(200).json(result.rows);
  } catch (err) {
    console.log("Error : Store<getStore()>", err);
    return res.status(500).json({ error: err });
  }
};

exports.saveStore = async (req, res) => {
  try {
    const saveStoreQuery = DbQueries.Queries.SAVE_STORE_QUERY;

    const store_name = req.body.store_name;
    const store_code = generateCode.generateStoreCode();
    const store_address = req.body.store_address;
    const created_by = "mohamed elbermawy";
    const created_on = new Date();

    if (!store_name)
      return res.status(400).json({ error: "Invalid store_name" });

    if (!store_address)
      return res.status(400).json({ error: "Invalid store_address" });

    const queryParams = [
      store_name,
      store_code,
      store_address,
      created_by,
      created_on,
    ];

    const result = await DbConnection.connection(saveStoreQuery, queryParams);

    if (!result) return res.status(500).json({ error: "Error saving store" });

    return res.status(200).json({ message: "Store saved successfully" });
  } catch (err) {
    console.log("Error : Store<saveStore()>", err);
    return res.status(500).json({ error: err });
  }
};

exports.updateStore = async (req, res) => {
  try {
    const updateStoreQuery = DbQueries.Queries.UPDATE_STORE_QUERY;
    const getStoreById = DbQueries.Queries.GET_STORE_QUERY_BY_ID;

    const store_id = req.body.store_id;
    const store_name = req.body.store_name;
    const store_address = req.body.store_address;
    const created_by = "mohamed elbermawy";
    const created_on = new Date();

    if (!store_id) return res.status(400).json({ error: "Invalid store_id" });

    if (!store_name)
      return res.status(400).json({ error: "Invalid store_name" });

    if (!store_address)
      return res.status(400).json({ error: "Invalid store_address" });

    const getStoreResult = await DbConnection.connection(getStoreById, [
      store_id,
    ]);

    if (getStoreResult.rowCount == 0)
      return res.status(500).json({ error: "store not found" });

    const queryParams = [
      store_name,
      store_address,
      created_by,
      created_on,
      store_id,
    ];

    const result = await DbConnection.connection(updateStoreQuery, queryParams);

    if (result.rowCount == 0)
      return res.status(500).json({ error: "Error updating store" });

    return res.status(200).json({ message: "Store updated successfully" });
  } catch (err) {
    console.log("Error : Book<updateStore()>", err);
    return res.status(500).json({ error: err });
  }
};

exports.deleteStore = async (req, res) => {
  try {
    const store_id = req.params.store_id;

    if (!store_id) return res.status(400).json({ error: "Invalid store_id" });

    const deleteStoreQuery = DbQueries.Queries.DELETE_STORE_QUERY;

    const result = await DbConnection.connection(deleteStoreQuery, [store_id]);

    if (result.rowCount == 0)
      return res.status(500).json({ message: "store not found to be deleted" });

    return res.status(200).json({ message: "Store deleted successfully" });
  } catch (err) {
    console.log("Error : Book<deleteStore()>", err);
    return res.status(500).json({ error: err });
  }
};
