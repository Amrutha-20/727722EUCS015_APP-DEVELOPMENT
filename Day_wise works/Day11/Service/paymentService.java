package com.example.partymanagement.Service;

import java.time.ZoneId;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.partymanagement.Model.PaymentModel;
import com.example.partymanagement.Repository.paymentRepository;

@Service
public class paymentService {
    @Autowired
    private paymentRepository repo;
      public PaymentModel savePayment(PaymentModel payment) {
        return repo.save(payment);
    }


    public Map<Integer, Double> calculateMonthlyRevenue(int year) {
        List<PaymentModel> payments = repo.findAllPaymentsByYear(year);
        Map<Integer, Double> monthlyRevenue = new HashMap<>();

        for (int i = 1; i <= 12; i++) {
            monthlyRevenue.put(i, 0.0);
        }

        for (PaymentModel payment : payments) {
            int month = payment.getDate().toInstant().atZone(ZoneId.systemDefault()).getMonthValue();
            double amount = Double.parseDouble(payment.getAmount());
            monthlyRevenue.put(month, monthlyRevenue.get(month) + amount);
        }

        return monthlyRevenue;
    }

}
