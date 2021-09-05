exports.Queries = {
  GET_ALL_STORES_LIST_QUERY: `SELECT STORE_ID, STORE_NAME, STORE_CODE, STORE_ADDRESS FROM "BMS".STORE`,

  SAVE_STORE_QUERY: `INSERT INTO "BMS".STORE (STORE_NAME, STORE_CODE, STORE_ADDRESS, CREATED_BY
                    , CREATED_ON) VALUES($1, $2, $3, $4, $5)`,

  GET_STORE_BY_CODE: `SELECT STORE_ID FROM "BMS".STORE WHERE "BMS".STORE.STORE_CODE = $1`,

  GET_STORE_QUERY_BY_ID: `SELECT * FROM "BMS".STORE WHERE "BMS".STORE.STORE_ID = $1`,

  UPDATE_STORE_QUERY: `UPDATE "BMS".STORE
                      SET STORE_NAME = $1, STORE_ADDRESS = $2, CREATED_BY = $3
                      , CREATED_ON = $4
                      WHERE STORE_ID = $5`,

  DELETE_STORE_QUERY: `DELETE FROM "BMS".STORE WHERE STORE_ID = $1`,

  GET_ALL_BOOKS_LIST_QUERY: `SELECT BOOK_ID, BOOK_TITLE, BOOK_AUTHOR, BOOK_PUBLISHER FROM "BMS".BOOK`,

  GET_BOOK_DETAILS_QUERY: `SELECT BOOK_ID, BOOK_TITLE, BOOK_DESCRIPTION, BOOK_AUTHOR, BOOK_PUBLISHER
                          , BOOK_PAGES, "BMS".BOOK.CREATED_ON, "BMS".BOOK.CREATED_BY, STORE_ID, STORE_NAME,
                           "BMS".STORE.STORE_CODE, STORE_ADDRESS
                          FROM "BMS".BOOK
                          INNER JOIN "BMS".STORE ON "BMS".BOOK.STORE_CODE = "BMS".STORE.STORE_CODE 
                          WHERE "BMS".BOOK.BOOK_ID = $1`,

  SAVE_BOOK_QUERY: `INSERT INTO "BMS".BOOK (BOOK_TITLE, BOOK_DESCRIPTION, BOOK_AUTHOR, BOOK_PUBLISHER
                    , BOOK_PAGES,STORE_CODE, CREATED_BY, CREATED_ON) 
                    VALUES($1, $2, $3, $4, $5, $6, $7, $8)`,

  GET_BOOK_BY_ID: `SELECT BOOK_ID FROM "BMS".BOOK WHERE "BMS".BOOK.BOOK_ID = $1`,

  UPDATE_BOOK_QUERY: `UPDATE "BMS".BOOK
                      SET BOOK_TITLE = $1, BOOK_DESCRIPTION = $2, BOOK_AUTHOR = $3, BOOK_PUBLISHER = $4
                      , BOOK_PAGES = $5, STORE_CODE = $6, CREATED_BY = $7, CREATED_ON = $8
                      WHERE BOOK_ID = $9`,

  DELETE_BOOK_QUERY: `DELETE FROM "BMS".BOOK WHERE BOOK_ID = $1`,
};
