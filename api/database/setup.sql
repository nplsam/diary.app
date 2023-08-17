DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id INT GENERATED ALWAYS AS IDENTITY,
    date_post VARCHAR (12) NOT NULL,
    time_post VARCHAR (5) NOT NULL,
    title VARCHAR (100) NOT NULL,
    content VARCHAR (500) NOT NULL,
    category VARCHAR (20) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO posts (date_post, time_post, title, content, category)
VALUES
    ('16/08/2023', '11:59', 'example1', 'this is just a test!', 'personal'),
    ('15/08/2023', '10:00', 'example2', 'testing...', 'things'),
    ('17/08/2023', '12:01', 'example3', 'me again', 'stuff');
