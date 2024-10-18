package com.angular.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.angular.demo.Modal.Student;
import com.angular.demo.repository.Studentrepo;

@RestController
@RequestMapping("/api/v1/")
public class Studentcontroller {
@Autowired
	private Studentrepo studentrepo;
  
@GetMapping("/stu")
   public List<Student> getAllStudents(){
	   return studentrepo.findAll();
	   
   }

}
