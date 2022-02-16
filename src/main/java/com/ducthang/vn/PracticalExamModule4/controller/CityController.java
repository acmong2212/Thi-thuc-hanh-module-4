package com.ducthang.vn.PracticalExamModule4.controller;

import com.ducthang.vn.PracticalExamModule4.model.City;
import com.ducthang.vn.PracticalExamModule4.service.ICityService;
import com.ducthang.vn.PracticalExamModule4.service.ICountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/city")
public class CityController {
    @Autowired
    ICityService cityService;

    @Autowired
    ICountryService countryService;

    @GetMapping
    public ResponseEntity<?> showCity() {
        return new ResponseEntity<>(cityService.findAllCity(), HttpStatus.OK);
    }

    @GetMapping("/countries")
    public ResponseEntity<?> showCountry() {
        return new ResponseEntity<>(countryService.findAllCountry(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> createCity(@RequestBody City city) {
        cityService.save(city);
        return new ResponseEntity<>(city, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public City findById(@PathVariable Long id) {
        return cityService.findById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> editCity(@PathVariable Long id, @RequestBody City city) {
        city.setId(id);
        cityService.save(city);
        return new ResponseEntity<>(city, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteCity(@PathVariable Long id) {
        cityService.delete(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}
