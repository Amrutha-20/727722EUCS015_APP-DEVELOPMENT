package com.example.partymanagement.Repository;

import org.springframework.stereotype.Repository;
import com.example.partymanagement.Model.VenueDetail;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface VenueDetailRepository extends JpaRepository<VenueDetail, Long> {
}