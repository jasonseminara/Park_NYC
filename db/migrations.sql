DROP TABLE IF EXISTS zones;
DROP TABLE IF EXISTS drivers;
DROP TABLE IF EXISTS leases;
DROP TABLE IF EXISTS driver;

CREATE TABLE leases (
  id SERIAL PRIMARY KEY,
  zone_number INTEGER,
  price DECIMAL,
  time_limit INTEGER,
  plate_state VARCHAR,
  plate_number VARCHAR(10),
  duration INTEGER,
  cgnumber INTEGER
);

CREATE TABLE zones (
  id SERIAL PRIMARY KEY,
  zone_number INTEGER,
  price DECIMAL,
  time_limit INTEGER
);


INSERT INTO leases (zone_number, price, time_limit, plate_state, plate_number, duration, cgnumber) VALUES
  (1, 2.50, 3, 'NY', 45667, 1, 456),
  (1, 2.50, 3, 'NJ', 567, 3, 567),
  (2, 3.00, 1, 'NY', 788, 5, 981);

INSERT INTO zones (
  
);

