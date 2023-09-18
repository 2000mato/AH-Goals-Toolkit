CREATE TABLE "users" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    hashed_password VARCHAR(255) NOT NULL,
    last_login TIMESTAMP
);

CREATE TABLE "goals" (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    goal_description TEXT NOT NULL,
    action_block TEXT NOT NULL,
    start_date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    end_date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP + INTERVAL '3 months'
);
