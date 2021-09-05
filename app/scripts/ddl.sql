-- DROP SCHEMA "BMS";

CREATE SCHEMA "BMS";

-- Permissions

GRANT ALL ON SCHEMA "BMS" TO postgres;

--------------------------------------------------------------------------------
-- "BMS".book definition

-- Drop table

-- DROP TABLE "BMS".book;

CREATE TABLE "BMS".book (
	book_id serial4 NOT NULL,
	book_title varchar(300) NOT NULL,
	book_description varchar(1000) NULL,
	book_author varchar(50) NOT NULL,
	book_publisher varchar(50) NOT NULL,
	book_pages int4 NULL,
	store_code varchar(5) NOT NULL,
	created_on timestamp NOT NULL,
	created_by varchar(50) NOT NULL,
	CONSTRAINT book_pkey PRIMARY KEY (book_id)
);

-- Permissions

ALTER TABLE "BMS".book OWNER TO postgres;
GRANT ALL ON TABLE "BMS".book TO postgres;

----------------------------------------------------------------
-- "BMS".store definition

-- Drop table

-- DROP TABLE "BMS".store;

CREATE TABLE "BMS".store (
	store_id serial4 NOT NULL,
	store_name varchar(50) NOT NULL,
	store_code varchar(5) NOT NULL,
	created_on timestamp NOT NULL,
	created_by varchar(50) NOT NULL,
	store_address varchar(300) NOT NULL,
	CONSTRAINT store_pkey PRIMARY KEY (store_id)
);


-- Permissions

ALTER TABLE "BMS".store OWNER TO postgres;
GRANT ALL ON TABLE "BMS".store TO postgres;

