package com.ducthang.vn.PracticalExamModule4.repository;

import com.ducthang.vn.PracticalExamModule4.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICountryRepository extends JpaRepository<Country, Long> {
}
