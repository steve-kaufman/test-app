CREATE DATABASE IF NOT EXISTS `test-app`;
CREATE USER IF NOT EXISTS 'test-app-user'@'localhost' IDENTIFIED BY '1234';
GRANT CREATE, INSERT, SELECT ON `test-app` . * TO 'test-app-user'@'localhost';

FLUSH PRIVILEGES;
