package com.food.sreelekshmi_access_control.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.food.sreelekshmi_access_control.entity.Record;
import com.food.sreelekshmi_access_control.repository.RecordRepository;

@Service
public class RecordService {

    @Autowired
    private RecordRepository repository;

    // VIEW records
    public List<Record> getAllRecords() {
        return repository.findAll();
    }

    // UPDATE record
    public Record updateRecord(Long id, Record record) {

        Record existingRecord = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Record not found"));

        existingRecord.setName(record.getName());

        return repository.save(existingRecord);
    }

    // DELETE record
    public void deleteRecord(Long id) {
        repository.deleteById(id);
    }

}