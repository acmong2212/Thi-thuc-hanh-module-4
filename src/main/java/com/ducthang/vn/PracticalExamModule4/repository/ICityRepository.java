package com.ducthang.vn.PracticalExamModule4.repository;

import com.ducthang.vn.PracticalExamModule4.model.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICityRepository extends JpaRepository<City, Long> {
}
