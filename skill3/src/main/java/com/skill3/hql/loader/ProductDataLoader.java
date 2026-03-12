package com.skill3.hql.loader;

import com.skill3.hql.entity.Product;
import org.hibernate.Session;
import org.hibernate.Transaction;

public class ProductDataLoader {
    
    public static void loadSampleProducts(Session session) {
        Transaction transaction = session.beginTransaction();
        
        // Clear existing data
        session.createQuery("DELETE FROM Product").executeUpdate();
        
        // Sample products
        session.save(new Product("Laptop", 899.99, 15, "Electronics"));
        session.save(new Product("Mouse", 25.50, 50, "Electronics"));
        session.save(new Product("Keyboard", 45.00, 30, "Electronics"));
        session.save(new Product("Monitor", 299.99, 20, "Electronics"));
        session.save(new Product("Desk Chair", 150.00, 0, "Furniture"));
        session.save(new Product("Desk Lamp", 35.75, 25, "Furniture"));
        session.save(new Product("Notebook", 5.99, 100, "Stationery"));
        session.save(new Product("Pen Set", 12.50, 75, "Stationery"));
        
        transaction.commit();
        System.out.println("Sample products added successfully!");
    }
    
    public static void main(String[] args) {
        var factory = com.skill3.hql.util.HibernateUtil.getSessionFactory();
        var session = factory.openSession();
        loadSampleProducts(session);
        session.close();
        factory.close();
    }
}
