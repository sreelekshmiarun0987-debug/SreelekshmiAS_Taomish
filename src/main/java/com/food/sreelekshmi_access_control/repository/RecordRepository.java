package com.food.sreelekshmi_access_control.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.food.sreelekshmi_access_control.entity.Record;

public interface RecordRepository extends JpaRepository<Record, Long> {
}