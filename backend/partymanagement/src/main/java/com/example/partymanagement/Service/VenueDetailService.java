package com.example.partymanagement.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.partymanagement.Model.VenueDetail;
import com.example.partymanagement.Repository.VenueDetailRepository;

@Service
public class VenueDetailService {

    @Autowired
    private VenueDetailRepository venueDetailRepository;

    public VenueDetail saveVenueDetail(VenueDetail venueDetail) {
        return venueDetailRepository.save(venueDetail);
    }

    public List<VenueDetail> getAllVenueDetails() {
        return venueDetailRepository.findAll();
    }
}