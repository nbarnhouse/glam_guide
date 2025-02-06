CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO users (username, password) VALUES
('user1', 'password123'),
('user2', 'password456');


CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    message_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO messages (sender_id, receiver_id, message_text) VALUES
(1, 2, 'Hey! How are you?'),
(2, 1, 'I am good, thanks! How about you?'),
(1, 2, 'I am doing great. What are you up to?'),
(3, 1, 'Hey, did you check out the new update?'),
(1, 3, 'Not yet! Is it good?'),
(2, 3, 'Let’s meet up later!'),
(3, 2, 'Sure! What time?'),
(1, 2, 'Looking forward to our meeting.'),
(2, 1, 'Same here!'),
(3, 1, 'Have a great day!');

SELECT * FROM messages;

SELECT "message_text" FROM messages;