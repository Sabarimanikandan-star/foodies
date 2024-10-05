package com.application.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.application.Model.Customer;
import com.application.Repository.CustomerRepository;
@Service
public class CustomerService {
	
	@Autowired
    private CustomerRepository customerRepository;

    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    public Customer getCustomerById(Long id) {
        return customerRepository.findById(id).orElse(null);
    }

    public Customer createCustomer(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer updateCustomer(Long id, Customer customerDetails) {
        Customer customer = customerRepository.findById(id).orElse(null);
        if (customer != null) {
            customer.setName(customerDetails.getName());
            customer.setEmail(customerDetails.getEmail());
            customer.setPhone(customerDetails.getPhone());
            customer.setFoodName(customerDetails.getFoodName());
            
            // Fix the typo: Update quantity and price on the existing customer object
           
            customer.setPrice(customerDetails.getPrice());
            
            customer.setAddress(customerDetails.getAddress());
            customer.setLocation(customerDetails.getLocation());
            customer.setPincode(customerDetails.getPincode());
            
            // Save the updated customer object
            return customerRepository.save(customer);
        }
        return null;
    }

    public void deleteCustomer(Long id) {
        customerRepository.deleteById(id);
    }


}
