CREATE TABLE user_info (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(32) NOT NULL,
    email VARCHAR(254) NOT NULL,
    is_active BOOLEAN DEFAULT FALSE,
    is_admin BOOLEAN DEFAULT FALSE,
    avatar VARCHAR(100),
    last_login DATETIME
);

CREATE TABLE article (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    en_us VARCHAR(50),
    desc TEXT,
    cover VARCHAR(100),
    content TEXT,
    is_md BOOLEAN DEFAULT TRUE,
    click_count INT DEFAULT 0,
    upup INT DEFAULT 0,
    comments INT DEFAULT 0,
    is_recommend BOOLEAN DEFAULT FALSE,
    is_display BOOLEAN DEFAULT FALSE,
    add_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES category(id)
);