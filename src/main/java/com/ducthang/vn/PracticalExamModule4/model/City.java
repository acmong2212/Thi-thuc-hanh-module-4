package com.ducthang.vn.PracticalExamModule4.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class City {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String nameCity;

    @ManyToOne
    private Country country;

    private double area;

    private Long population;
    private double gdp;
    private String description;
}
