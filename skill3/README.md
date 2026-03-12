# Hibernate HQL Skill 3 - Sorting, Pagination & Aggregates

## Overview
This project demonstrates advanced HQL operations including:
- Sorting (ASC/DESC)
- Pagination
- Aggregate functions (COUNT, MIN, MAX, AVG, SUM)
- GROUP BY operations
- Filtering with WHERE
- Pattern matching with LIKE

## Technologies
- Java 11
- Hibernate 5.6.15.Final
- H2 In-Memory Database
- Maven

## Setup
1. Open project in IDE (IntelliJ, Eclipse, VSCode with Java extensions)
2. Run `mvn clean compile` to build
3. Execute `HQLDemo.main()` - it will auto-create DB and load sample data on first run (uncomment loader)

## Tasks Completed
✅ Product entity setup  
✅ Sample data insertion (8 products)
✅ Sorting by price and quantity
✅ Pagination implementation
✅ Aggregate operations
✅ GROUP BY queries
✅ Price range filtering
✅ LIKE pattern matching

## Project Structure
```
hibernate-hql-skill3/
├── src/main/java/com/skill3/hql/
│   ├── entity/Product.java
│   ├── util/HibernateUtil.java
│   ├── loader/ProductDataLoader.java
│   └── demo/HQLDemo.java
├── src/main/resources/hibernate.cfg.xml
├── pom.xml
├── .gitignore
└── README.md
```

## Running the Demo
```bash
mvn clean compile exec:java -Dexec.mainClass="com.skill3.hql.demo.HQLDemo"
```

## Author
Verolika Reddy
