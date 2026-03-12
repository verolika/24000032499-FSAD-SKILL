main method code for hibernate crud operations:


//step-1: getting Configuration object
    Configuration config = new Configuration().configure();
    //step-2: getting SessionFactory object
    SessionFactory sf = config.buildSessionFactory();
    //step-3: getting Session object (single connection to DB)
    Session s = sf.openSession();
    
    //CREATE a employee record in the DB
    Employee e = new Employee(1005, "Kiranmai", "kiranmai@gmail.com"); //Transient state
    s.persist(e); //persistent state
    //to store your data into db permanently, Transaction is required
    Transaction tx = s.beginTransaction();
    tx.commit();
    s.close();
    
    //RETRIEVE
    s = sf.openSession();
    //if you are using hibernate5 version, better to use either load() or get()
    //if your are using hibernate6 onwards, better to use find() method
    Employee employee = s.find(Employee.class, 1002);
    System.out.println(employee);
    s.close();
    
    //UPDATE
    /*
     * note: before updation, we must find the specific record from db
     */
    s = sf.openSession();
    Employee emp1 = s.find(Employee.class, 1003);
    //call setters to update specific fields
    emp1.setEname("Rajani Kanth");
    emp1.setEmail("rajanikanth@gmail.com");
    //update emp1 in session
    s.merge(emp1); //from hibernate6 onwards
    //to update this permanently in db, we must have transaction object
    tx = s.beginTransaction();
    tx.commit();
    s.close();
    
    //DELETE
    /*
     * note: before deletion, we must find the specific record from db
     */
    s = sf.openSession();
    Employee emp2 = s.find(Employee.class, 1003);
    //first remove the object from session
    s.remove(emp2);
    //remove it permanently from db using transaction object
    tx = s.beginTransaction();
    tx.commit();
    s.close();
    
    sf.close();