-- Users Table --
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    username VARCHAR(50) UNIQUE,
    role VARCHAR(20) CHECK (role IN ('stylist', 'bride')) NOT NULL,
    phone_number VARCHAR(20),
    country_of_origin VARCHAR(100),
    country_code VARCHAR(10)
);

-- Insert data into the users table
INSERT INTO users (first_name, last_name, email, username, role, phone_number, country_of_origin, country_code) VALUES
-- Service Providers
('Natalia Rocio', 'Flores-Silva', 'natalia.flores@example.com', 'nflores-silva', 'service_provider', '(555) 123-4567', 'United States', '00 +1'),
('Harper', 'Collins', 'harper.collins@mockmail.com', 'hcollins', 'service_provider', '(555) 234-5678', 'United States', '00 +1'),
('Charlotte', 'Brown', 'charlotte.brown@fakemail.net', 'cbrown', 'service_provider', '(555) 345-6789', 'United States', '00 +1'),
('Aria', 'Clark', 'aria.clark@placeholder.org', 'aclark', 'service_provider', '(555) 456-7890', 'United States', '00 +1'),
('Zoey', 'Walker', 'zoey.walker@example.net', 'zwalker', 'service_provider', '(555) 567-8901', 'United States', '00 +1'),

-- Brides
('Sofia Marisol', 'Lopez-Castillo', 'sofia.lopez-castillo@mockmail.com', 'slopez-castillo', 'bride', '(998) 151-7878', 'Mexico', '52 +1'),
('Paulina Cecilia', 'Gutierrez-Ocampo', 'paulina.gutierrez-ocampo@fakemail.com', 'pgutierrez-ocampo', 'bride', '(555) 678-9012', 'United States', '00 +1'),
('Mia', 'Davis', 'mia.davis@placeholder.org', 'mdavis', 'bride', '(555) 789-0123', 'United States', '00 +1'),
('Isabella', 'Anderson', 'isabella.anderson@mockmail.net', 'ianderson', 'bride', '(555) 890-1234', 'United States', '00 +1'),
('Vanessa', 'Preston', 'vanessa.preston@example.com', 'vpreston', 'bride', '(332) 133-4557', 'United States', '00 +1');

-- Messages Table --
CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    sender_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    receiver_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    message_text TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id)
);

-- Insert data into the messages table
INSERT INTO messages (sender_id, receiver_id, message_text, sent_at) VALUES
(1, 6, 'Hey! How are you?', '2025-02-11 16:30:00'),
(6, 1, 'I am good, thanks! How about you?', '2025-02-11 16:31:00'),
(1, 6, 'I am doing great. What are you up to?', '2025-02-11 16:32:00'),
(3, 1, 'Hey, did you check out the new update?', '2025-02-11 16:33:00'),
(1, 3, 'Not yet! Is it good?', '2025-02-11 16:34:00'),
(2, 3, 'Let’s meet up later!', '2025-02-11 16:35:00'),
(3, 2, 'Sure! What time?', '2025-02-11 16:36:00'),
(1, 2, 'Looking forward to our meeting.', '2025-02-11 16:37:00'),
(2, 1, 'Same here!', '2025-02-11 16:38:00'),
(3, 1, 'Have a great day!', '2025-02-11 16:39:00');


-- Events Table --
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    organizer_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,  -- Stylist
    bride_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,  -- Bride
    title VARCHAR(255) NOT NULL,
    description TEXT,
    location_name VARCHAR(255),
    service_location VARCHAR(255),
    arrival_time TIME,
    wedding_date DATE,
    status VARCHAR(20) CHECK (status IN ('scheduled', 'completed', 'cancelled')) DEFAULT 'scheduled',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert data into the events table
INSERT INTO events (organizer_id, bride_id, title, description, arrival_time, wedding_date, location_name, service_location) VALUES
(1, 6, 'Lopez-Castillo Wedding', 'Lopez-Castillo Wedding celebration', '07:00:00', '2025-08-01', 'RIU Palace Kukulkan', 'Boulevard Kukulcan, Km 12, Cancun 77500, Mexico'),
(2, 7, 'Gutierrez-Ocampo Wedding', 'Gutierrez-Ocampo Wedding celebration', '06:00:00', '2025-08-02', 'Bahia Principe Grand', 'Carretera Chetumal - Cancún Km 250, Akumal, 77760, Mexico'),
(3, 8, 'Davis Wedding', 'Davis Wedding celebration', '07:15:00', '2025-08-03', 'The Pyramid Cancun', 'Boulevard Kukulcan Km 16.5, Zona Hotelera, 77500 Cancún, Q.R., Mexico'),
(4, 9, 'Anderson Wedding', 'Anderson Wedding celebration', '07:00:00', '2025-08-04', 'Barcelo Maya Colonial', 'Carretera Chetumal - Puerto Juárez Km 266.3, Xpu Há, 77750, Mexico'),
(5, 10, 'Preston Wedding', 'Preston Wedding celebration', '07:00:00', '2025-08-06', 'Moon Palace Cancun', 'Chetumal Km 340, Riviera Maya, 77500, Zona Hoterlera');