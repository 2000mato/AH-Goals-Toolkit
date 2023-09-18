-- Seed users table
INSERT INTO users (username, email, hashed_password, last_login) VALUES
('john_doe', 'john.doe@example.com', 'hashedPassword1', CURRENT_TIMESTAMP),
('jane_smith', 'jane.smith@example.com', 'hashedPassword2', CURRENT_TIMESTAMP);

-- Seed goals table
INSERT INTO goals (user_id, goal_description, action_block, start_date_time, end_date_time) VALUES
(1, 'Achieve a healthy weight', 'Exercise daily for 30 minutes', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + INTERVAL '3 months'),
(2, 'Learn a new programming language', 'Code for an hour daily', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + INTERVAL '3 months');