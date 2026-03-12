# TODO List for Hibernate Inventory CRUD Project

## Completed
- [x] Created pom.xml with complete dependencies
- [x] Created Product.java entity with JPA annotations and ID strategy comments
- [x] Created HibernateUtil.java
- [x] Created ProductDAO.java with full CRUD methods including list all
- [x] Created App.java with complete CRUD demo and console output
- [x] Created hibernate.cfg.xml

## Next Steps
- [ ] Create MySQL database (MySQL not in PATH; run manually):\n  ```\n  mysql -u root -p12345\n  CREATE DATABASE inventory_db;\n  USE inventory_db;\n  ```
- [x] Edit src/main/resources/hibernate.cfg.xml: Replace `YOUR_MYSQL_ROOT_PASSWORD_HERE` with your actual MySQL root password.
- [ ] Run `mvn clean compile` (Maven not in PATH; install/add to PATH or use full path)
- [ ] Run `mvn exec:java -Dexec.mainClass="com.inventory.main.App"`
- [ ] Verify console shows CRUD operations (creates, list, retrieve, update, delete)
- [ ] Verify in MySQL: `mysql -u root -p inventory_db -e "SELECT * FROM products;"`
- [ ] Test ID strategies: Edit Product.java GenerationType to IDENTITY or SEQUENCE, recompile/run

Updated after each step.

