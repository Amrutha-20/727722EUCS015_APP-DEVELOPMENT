package com.example.partymanagement.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.partymanagement.Model.PaymentModel;

public interface paymentRepository extends JpaRepository<PaymentModel,Long> {
    @Query("SELECT p FROM PaymentModel p WHERE YEAR(p.date) = :year")
    List<PaymentModel> findAllPaymentsByYear(@Param("year") int year);
    
}