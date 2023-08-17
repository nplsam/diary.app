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
    ('17/08/2023', '12:01', 'example', 'this is just a test!', 'personal');