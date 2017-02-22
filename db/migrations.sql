DROP TABLE IF EXISTS zones;
DROP TABLE IF EXISTS driver;

CREATE TABLE zones (
  id SERIAL PRIMARY KEY,
  zone_number INTEGER,
  price DECIMAL,
  time_limit INTEGER
);

CREATE TABLE driver (
	license VARCHAR
);

INSERT INTO zones (zone_number, price, time_limit) VALUES
  (1, 2.50, 3),
  (1, 2.50, 3),
  (2, 3.00, 1);

INSERT INTO driver (license) VALUES
  ('NY:456');
