DROP TABLE IF EXISTS characters;

CREATE TABLE characters(
  character_id serial PRIMARY KEY,
  name varchar(255),
  year integer
)