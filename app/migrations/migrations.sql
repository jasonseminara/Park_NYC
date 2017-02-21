DROP DATABASE IF EXISTS parking;
CREATE DATABASE parking;

\c parking

CREATE TABLE zones (
  id SERIAL PRIMARY KEY,
  zone_number INTEGER,
  price DECIMAL,
  time_limit INTEGER
);
