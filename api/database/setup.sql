DROP TABLE IF EXISTS post;

CREATE TABLE posts (
    id INT GENERATED ALWAYS AS IDENTITY,
    DATE NOT NULL FORMAT 'YYYY--MM-DD',
    time INT DEFAULT 00:00,
    title VARCHAR (100) NOT NULL,
    content VARCHAR (500) NOT NULL,
    category VARCHAR (20) NOT NULL,
    PRIMARY KEY (id)
)

INSERT INTO posts (DATE, time, title, content, category)
VALUES
    ('2023--08--17', 00:00, 'example', 'this is just a test!', 'personal');