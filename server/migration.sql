DROP TABLE IF EXISTS scouts CASCADE;
DROP TABLE IF EXISTS achievements;

CREATE TABLE scouts(
  scout_id serial PRIMARY KEY,
  name varchar(255),
  age integer,
  gender varchar(255)
);

CREATE TABLE achievements(
  ach_id serial PRIMARY KEY,
  ach_name varchar(255),
  ach_complete varchar(255),
  comp_date DATE,
  scout_id integer,
  FOREIGN KEY (scout_id) REFERENCES scouts
);