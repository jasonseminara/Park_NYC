DROP TABLE IF EXISTS zones;
DROP TABLE IF EXISTS driver;

CREATE TABLE zones (
  id SERIAL PRIMARY KEY,
  zone_number INTEGER,
  price DECIMAL,
  time_limit INTEGER
);

CREATE TABLE driver (
	license VARCHAR,
	zone_number INTEGER
);

INSERT INTO zones (zone_number, price, time_limit) VALUES
  (1, 2.50, 3),
  (1, 2.50, 3),
  (2, 3.00, 1);

INSERT INTO driver (license, zone_number) VALUES
  ('NY:456', 1);
