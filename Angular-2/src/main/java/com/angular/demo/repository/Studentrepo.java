package com.angular.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.angular.demo.Modal.Student;

public interface Studentrepo  extends JpaRepository<Student, Integer>{

}
