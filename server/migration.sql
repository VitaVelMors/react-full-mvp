DROP TABLE IF EXISTS scouts CASCADE;
DROP TABLE IF EXISTS achievements;

CREATE TABLE scouts(
  scout_id serial PRIMARY KEY,
  name varchar(255),
  age integer,
  gender varchar(255)
);