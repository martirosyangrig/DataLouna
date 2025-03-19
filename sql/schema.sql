--Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    balance NUMERIC(10, 2) NOT NULL DEFAULT 0.00,
    name VARCHAR(255) NOT NULL
);

INSERT INTO users (balance, name) VALUES (100.00, 'John');

--Products table
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL
);

INSERT INTO products (name, price) VALUES
('Burger', 19.99),
('Steak', 5.50),
('Burbun', 99.95);

--Purchases table
CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    product_id INTEGER REFERENCES products(id),
    purchase_date TIMESTAMP NOT NULL DEFAULT NOW()
);

