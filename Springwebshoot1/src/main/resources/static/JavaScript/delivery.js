const API_URL = 'http://localhost:8081/api/customers'; // Update to your API URL

document.addEventListener('DOMContentLoaded', () => {
    loadCustomers();

    // Add event listener to the "Create Customer" button
    document.getElementById('createCustomerBtn').addEventListener('click', createOrUpdateCustomer);
});

// Load customers from the API
async function loadCustomers() {
    const response = await fetch(API_URL);
    const customers = await response.json();

    createCustomerTable(customers);
}

// Create a customer table and populate it with customers
function createCustomerTable(customers) {
    const customersTableContainer = document.getElementById('customersTableContainer');

    // Clear existing table if it exists
    customersTableContainer.innerHTML = '';

    // Create table
    const table = document.createElement('table');
    table.setAttribute('id', 'customersTable');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
				<th>Food Name</th>
				<th>Price</th>
                <th>Address</th>
                <th>Location</th>
                <th>Pincode</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="customersList"></tbody>
    `;
    customersTableContainer.appendChild(table);

    // Populate table rows
    const customersList = document.getElementById('customersList');
    customers.forEach(customer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
			<td>${customer.foodName}</td>
			<td>${customer.price}</td>
            <td>${customer.address}</td>
            <td>${customer.location}</td>
            <td>${customer.pincode}</td>
            <td>
                <div class="customer-actions">
				<button onclick="setEditCustomer(${customer.id}, '${customer.name}', '${customer.email}', '${customer.phone}', '${customer.foodName}', '${customer.price}', '${customer.address}', '${customer.location}', '${customer.pincode}')">Edit</button>
                    <button onclick="deleteCustomer(${customer.id})">Delete</button>
                </div>
            </td>
        `;
        customersList.appendChild(row);
    });
}

// Create or update customer


async function createOrUpdateCustomer() {
    const id = document.getElementById('customerId').value; // Retrieve customer ID
    const name = document.getElementById('nameInput').value; // Retrieve name
    const email = document.getElementById('emailInput').value; // Retrieve email
    const phone = document.getElementById('numberInput').value; // Retrieve phone number
	const foodName = document.getElementById('foodName').value; // Retrieve food name
	const foodPrice = document.getElementById('foodPrice').value; // Retrieve food price
    const address = document.getElementById('addressInput').value; // Retrieve address
    const location = document.getElementById('locationInput').value; // Retrieve location
    const pincode = document.getElementById('pincodeInput').value; // Retrieve pincode

    

    // Create the customer object
    const customer = { 
        name, 
        email, 
        phone, 
        foodName, 
		price: parseFloat(foodPrice),
        address, 
        location, 
        pincode 
    };

    console.log("Customer object being sent:", customer); // Log the customer object

    if (id) {
        // Updating an existing customer
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(customer),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error response:', errorText);
                alert(`Failed to update customer: ${errorText}`);
                return;
            }

            console.log('Customer updated successfully:', await response.json());
        } catch (error) {
            console.error('Error occurred while updating customer:', error);
            alert('An error occurred while updating the customer.');
        }
    } else {
        // Creating a new customer
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(customer),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Error response:', errorText);
                alert(`Failed to create customer: ${errorText}`);
                return;
            }

            console.log('Customer created successfully:', await response.json());
        } catch (error) {
            console.error('Error occurred while creating customer:', error);
            alert('An error occurred while creating the customer.');
        }
    }

    clearForm();
    loadCustomers(); // Reload customers
}
// Set customer data in form for editing
function setEditCustomer(id, name, email, phone, foodName,foodPrice, address, location, pincode) {
    document.getElementById('customerId').value = id;
    document.getElementById('nameInput').value = name;
    document.getElementById('emailInput').value = email;
    document.getElementById('numberInput').value = phone;
	document.getElementById('foodName').value = foodName;
	  document.getElementById('foodPrice').value = foodPrice;
    document.getElementById('addressInput').value = address;
    document.getElementById('locationInput').value = location;
    document.getElementById('pincodeInput').value = pincode;

    document.getElementById('createCustomerBtn').innerText = 'Update Customer'; // Change button text
}
// Delete customer
async function deleteCustomer(id) {
    await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    });
    loadCustomers(); // Reload customers
}

// Clear the form
function clearForm() {
    document.getElementById('customerId').value = '';
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('numberInput').value = '';
	document.getElementById('foodName').value = '';
	 document.getElementById('foodPrice').value = '';
    document.getElementById('addressInput').value = '';
    document.getElementById('locationInput').value = '';
    document.getElementById('pincodeInput').value = '';

    document.getElementById('createCustomerBtn').innerText = 'Create Customer'; // Reset button text
}
   
   
// Get query parameters from URL
       function getQueryParams() {
           const params = {};
           const queryString = window.location.search.substring(1);
           const pairs = queryString.split("&");
           for (let i = 0; i < pairs.length; i++) {
               const pair = pairs[i].split("=");
               params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
           }
           return params;
       }

       // Display order summary (food name and price)
       function displayOrderSummary() {
           const params = getQueryParams();
           console.log(params); // Debug log
           document.getElementById('foodName').value = params.foodName;
           document.getElementById('foodPrice').value = params.price; // Correctly using 'price'
       }

       displayOrderSummary(); // Call the function