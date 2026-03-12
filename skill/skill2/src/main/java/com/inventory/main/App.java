package com.inventory.main;

import com.inventory.dao.ProductDAO;
import com.inventory.entity.Product;

import java.util.List;

public class App {
    public static void main(String[] args) {
        ProductDAO dao = new ProductDAO();

        System.out.println("=== Creating Products ===");

        // Insert multiple products
        dao.saveProduct(new Product("Laptop", "Gaming Laptop i7 16GB", 75000.0, 10));
        dao.saveProduct(new Product("Mouse", "Wireless Optical Mouse", 1200.0, 50));
        dao.saveProduct(new Product("Keyboard", "Mechanical RGB Keyboard", 5000.0, 20));

        // Retrieve and list all
        System.out.println("\n=== All Products After Insert ===");
        List<Product> products = dao.getAllProducts();
        for (Product p : products) {
            System.out.println(p);
        }

        // Retrieve specific product
        System.out.println("\n=== Retrieved Product ID=1 ===");
        Product p1 = dao.getProduct(1);
        if (p1 != null) {
            System.out.println(p1);
        }

        // Update
        System.out.println("\n=== Updating Product ID=1 (price=72000, qty=8) ===");
        dao.updateProduct(1, 72000.0, 8);

        System.out.println("\n=== All Products After Update ===");
        products = dao.getAllProducts();
        for (Product p : products) {
            System.out.println(p);
        }

        // Delete
        System.out.println("\n=== Deleting Product ID=3 (Keyboard) ===");
        dao.deleteProduct(3);

        System.out.println("\n=== All Products After Delete ===");
        products = dao.getAllProducts();
        for (Product p : products) {
            System.out.println(p);
        }

        System.out.println("\nHibernate CRUD Operations Demo Complete!");
    }
}

