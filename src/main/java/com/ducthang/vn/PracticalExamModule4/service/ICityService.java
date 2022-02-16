package com.ducthang.vn.PracticalExamModule4.service;

import com.ducthang.vn.PracticalExamModule4.model.City;

import java.util.List;

public interface ICityService {
    List<City> findAllCity();
    void save(City city);
    void delete(Long id);
    City findById(Long id);
}
