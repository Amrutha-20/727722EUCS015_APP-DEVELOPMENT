package com.example.partymanagement.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.partymanagement.Model.VenueDetail;
import com.example.partymanagement.Service.VenueDetailService;

@RestController
@RequestMapping("/api/venuesdetails")
public class VenueDetailController {

    @Autowired
    private VenueDetailService venueDetailService;

    @PostMapping("/post")
    public ResponseEntity<VenueDetail> addVenueDetail(@RequestBody VenueDetail venueDetail) {
        VenueDetail savedVenueDetail = venueDetailService.saveVenueDetail(venueDetail);
        return ResponseEntity.ok(savedVenueDetail);
    }

    @GetMapping("/get")
    public ResponseEntity<List<VenueDetail>> getAllVenueDetails() {
        List<VenueDetail> venueDetails = venueDetailService.getAllVenueDetails();
        return ResponseEntity.ok(venueDetails);
    }
}