package com.mindbrowser.assignment.backend.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.mindbrowser.assignment.backend.model.Employee;
import com.mindbrowser.assignment.backend.model.Manager;
import com.mindbrowser.assignment.backend.service.ERegistrationService;
import com.mindbrowser.assignment.backend.service.MRegistrationService;

@RestController
public class RegistrationController {
	
	@Autowired
	private MRegistrationService service;
	
	@Autowired
	private ERegistrationService eservice;
 
//	To register manager
	
	@PostMapping("/register-manager")
	@CrossOrigin(origins = "http://localhost:4200")
	public Manager registerManager(@RequestBody Manager manager) throws Exception
	{
		String tempEmail = manager.getEmail();
		if(tempEmail != null && !"".equals(tempEmail))
		{
			Manager managerobj = service.fetchManagerByEmail(tempEmail);
			if(managerobj != null)
			{
				throw new Exception("Manager with " +tempEmail+ "is already exist");
			}
			
		}
		Manager managerobj = null;
		managerobj = service.saveManager(manager);
		return managerobj;
		
	}
	
	//Manager Login
	
	@PostMapping("/login")
	@CrossOrigin(origins = "http://localhost:4200")
	public Manager loginManager(@RequestBody Manager manager)throws Exception
	{
		String tempEmail = manager.getEmail();
		String tempPass = manager.getPassword();
		Manager managerObj = null;
		if(tempEmail != null && tempPass !=null)
		{
			managerObj = service.fetchManagerByEmailAndPassword(tempEmail, tempPass);
		}
		if(managerObj == null)
		{
			throw new Exception("Bad Credentials");
		}
		return managerObj;
	}
	
	//Employee Registration	
	
	@PostMapping("/register-employee")
	@CrossOrigin(origins = "http://localhost:4200")
	public String saveEmployee(@RequestBody Employee employee)
	{
		eservice.saveEmployee(employee);
		return "Employee Saved..";
	}
	
	//To get list of employee
	
	@GetMapping("/getAllEmployee")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Employee> getAll()
	{
		return eservice.findAll();
	}
	
	//Get employee by name
	
	@GetMapping("/getEmployee/{firstname}")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Employee> getEmployeeByFirstname(@PathVariable String firstname)
	{
		return eservice.findByFirstname(firstname);
	}
	
	//Delete employee by id
	
	@DeleteMapping("/employee")
	@CrossOrigin(origins = "http://localhost:4200")
	public void deleteEmployee(@RequestParam Integer id)
	{
		eservice.deleteById(id);
	}
	
	//Update employee
	
	@PutMapping("/employee-update")
	@CrossOrigin(origins = "http://localhost:4200")
	public Employee updateEmployee(@RequestBody Employee employee)
	{
		eservice.updateEmployee(employee);
		return employee;
	}
	
	
	
	
	
	
}
