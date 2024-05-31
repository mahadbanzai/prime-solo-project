-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS categories;

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
CREATE TABLE "questions" (
    "id" SERIAL PRIMARY KEY,
    "question" VARCHAR (100) UNIQUE NOT NULL,
    "confusion"  VARCHAR (100) UNIQUE NOT NULL,
    "user_id" INT REFERENCES "user",
    "category_id" INT REFERENCES "categories" 
);
CREATE TABLE "categories" (
    "id" SERIAL PRIMARY KEY,
    "subject" VARCHAR (100) UNIQUE NOT NULL
);

INSERT INTO "questions" 
  ("question", "confusion", "user_id", "category_id")
  VALUES 
  ('What is 9 + 10?', 'Why is it 21?', 1, 2),
  ('Insert dummy data', 'What is dummy data?',1, 1);

INSERT INTO "categories"
  ("subject")
  VALUES 
  ('Math'),
  ('Science'),
  ('Reading'),
  ('Baking');
  
  SELECT * FROM "questions"
          WHERE user_id= 1
  
