package com.ducthang.vn.PracticalExamModule4.service.impl;

import com.ducthang.vn.PracticalExamModule4.model.Country;
import com.ducthang.vn.PracticalExamModule4.repository.ICountryRepository;
import com.ducthang.vn.PracticalExamModule4.service.ICountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryServiceImpl implements ICountryService {
    @Autowired
    ICountryRepository countryRepository;

    @Override
    public List<Country> findAllCountry() {
        return countryRepository.findAll();
    }
}
