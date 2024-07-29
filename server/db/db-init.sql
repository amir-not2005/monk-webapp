CREATE TABLE groups(
    id SERIAL PRIMARY KEY ,
    name varchar(100) NOT NULL
);

CREATE TABLE users(
    id SERIAL PRIMARY KEY ,
    group_id INT,
    login varchar(50) NOT NULL UNIQUE,
    password varchar(255),
    FOREIGN KEY (group_id) REFERENCES groups(id)
);

CREATE TABLE goals(
    id SERIAL PRIMARY KEY ,
    user_id INT NOT NULL,
    title varchar(50) NOT NULL,
    description varchar(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category varchar(50),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE goal_completion(
    id SERIAL PRIMARY KEY,
    goal_id INT NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (goal_id) REFERENCES goals(id)
);