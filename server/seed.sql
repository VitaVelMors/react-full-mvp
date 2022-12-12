TRUNCATE TABLE scouts, achievements RESTART IDENTITY;
-- TRUNCATE TABLE achievements RESTART IDENTITY;


INSERT INTO scouts (name, age, gender) VALUES ('Deacon White', 9, 'male');
INSERT INTO scouts (name, age, gender) VALUES ('Blake Peluso', 10, 'male');
INSERT INTO scouts (name, age, gender) VALUES ('Ava Garcia', 9, 'female');
INSERT INTO scouts (name, age, gender) VALUES ('Ryan Siver', 10, 'male');
INSERT INTO scouts (name, age, gender) VALUES ('Nikki Gunn', 10, 'female');
INSERT INTO scouts (name, age, gender) VALUES ('Connor Sterling', 9, 'male');


INSERT INTO achievements (ach_name, ach_complete, comp_date, scout_id) VALUES ('First Responder', 'Y', '2022-10-27', 1);
INSERT INTO achievements (ach_name, ach_complete, comp_date, scout_id) VALUES ('Stronger, Faster, Higher', 'Y', '2022-11-17', 1);
INSERT INTO achievements (ach_name, ach_complete, comp_date, scout_id) VALUES ('Cast Iron Chef', 'Y', '2022-12-04', 1);
INSERT INTO achievements (ach_name, ach_complete, comp_date, scout_id) VALUES ('Webelos Walk-About', 'Y', '2022-11-27', 1);
INSERT INTO achievements (ach_name, ach_complete, comp_date, scout_id) VALUES ('Duty to God in You', 'Y', '2022-09-15', 1);
INSERT INTO achievements (ach_name, ach_complete, comp_date, scout_id) VALUES ('Cyber Chip', 'Y', '2022-09-15', 1);
INSERT INTO achievements (ach_name, ach_complete, comp_date, scout_id) VALUES ('Recruiter', 'Y', '2022-11-17', 1);
INSERT INTO achievements (ach_name, ach_complete, comp_date, scout_id) VALUES ('Shooting Sports', 'Y', '2022-10-23', 1);
INSERT INTO achievements (ach_name, ach_complete, comp_date, scout_id) VALUES ('Hiking Stick', 'Y', '2022-10-27', 1);