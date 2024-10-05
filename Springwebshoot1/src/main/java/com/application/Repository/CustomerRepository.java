package com.application.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.Model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

	

}
