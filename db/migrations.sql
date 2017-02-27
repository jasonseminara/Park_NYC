DROP TABLE IF EXISTS zones;
DROP TABLE IF EXISTS drivers;
DROP TABLE IF EXISTS leases;
DROP TABLE IF EXISTS driver;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  email VARCHAR,
  password VARCHAR,
  payment_info VARCHAR
);

CREATE TABLE zones (
  id SERIAL PRIMARY KEY,
  zone_number INTEGER,
  price DECIMAL,
  time_limit INTEGER
);

CREATE TABLE leases (
  user_id INTEGER references users (user_id),
  lease_id SERIAL,
  zone_number INTEGER,
  price DECIMAL,
  time_limit INTEGER,
  plate_state VARCHAR,
  plate_number VARCHAR(10),
  duration INTEGER
);


INSERT INTO users (email, password, payment_info) VALUES
  ('katie@ga', 'password1', 155676),
  ('ross@ga', 'password2', 245457788),
  ('john@ga', 'password3', 35656578),
  ('jason@ga', 'password4', 234567);

INSERT INTO zones (zone_number, price, time_limit) VALUES
  (5, 1, 1),
  (2, 2, 2),
  (3, 3, 3);

INSERT INTO leases (user_id, zone_number, price, time_limit, plate_state, plate_number, duration) VALUES
  ( 1, 1, 2.50, 3, 'NY', 45667, 1),
  ( 2, 1, 2.50, 3, 'NJ', 567, 3),
  ( 3, 2, 3.00, 1, 'NY', 788, 5),
  ( 2, 4, 3.50, 3, 'NJ', 567, 3),
  ( 2, 1, 2.50, 3, 'NJ', 567, 3);

