package com.food.sreelekshmi_access_control.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.food.sreelekshmi_access_control.entity.Record;
import com.food.sreelekshmi_access_control.service.RecordService;

@RestController
@RequestMapping("/api/records")
public class RecordController {

    @Autowired
    private RecordService service;

    @GetMapping
    public List<Record> viewRecords(){
        return service.getAllRecords();
    }

    @PutMapping("/{id}")
    public Record updateRecord(@PathVariable Long id,@RequestBody Record record){
        return service.updateRecord(id,record);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteRecord(@PathVariable Long id){
        service.deleteRecord(id);
        return "Deleted";
    }
}