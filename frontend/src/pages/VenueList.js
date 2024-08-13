import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card, Pagination, FormControl, InputGroup, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const DashboardContainer = styled.div`
  background: #f8f9fa;
  padding: 60px 0;
  min-height: 100vh;
  color: #333;
`;

const Title = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 50px;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 1.5px;
`;

const VenueCard = styled(Card)`
  margin-bottom: 30px;
  background-color: #ffffff;
  border: none;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }
`;

const VenueImage = styled(Card.Img)`
  width: 100%;
  height: 180px;
  object-fit: cover;
  filter: brightness(0.9);
  transition: filter 0.3s ease;

  ${VenueCard}:hover & {
    filter: brightness(1);
  }
`;

const CardBodyOverlay = styled.div`
  padding: 20px;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 100%);
  color: #333;
`;

const VenueTitle = styled.h3`
  font-size: 1.8rem;
  color: #007bff;
  margin-bottom: 5px;
  font-weight: 600;
`;

const VenueOverview = styled(Card.Text)`
  color: #666;
  font-size: 1rem;
  margin-bottom: 20px;
`;

const CapacityDetails = styled.div`
  font-size: 0.9rem;
  color: #777;
`;

const SearchContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SearchInput = styled(FormControl)`
  border-radius: 50px;
  padding: 15px 25px;
  font-size: 1.2rem;
  background-color: #ffffff;
  color: #333;
  max-width: 600px;
  border: 1px solid #ccc;

  &:focus {
    background-color: #ffffff;
    color: #333;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
    border-color: #007bff;
  }
`;

const SearchButton = styled(Button)`
  border-radius: 50px;
  background-color: #007bff;
  border-color: #007bff;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #ffffff;
  margin-left: -60px;
  z-index: 1;

  &:hover {
    background-color: #0056b3;
    border-color: #0056b3;
  }
`;

const PaginationContainer = styled(Pagination)`
  .page-item.active .page-link {
    background-color: #007bff;
    border-color: #007bff;
    color: #ffffff;
  }

  .page-item .page-link {
    color: #007bff;
    background-color: #ffffff;
    border: 1px solid #dee2e6;
    margin: 0 5px;
    padding: 8px 16px;
    border-radius: 50px;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .page-item .page-link:hover {
    background-color: #f1f3f5;
    color: #007bff;
  }
`;

const VenueList = () => {
  const [venues, setVenues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(2);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/venuesdetails/get')
      .then(response => {
        setVenues(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const handleSearch = () => {
    setCurrentPage(1); // Reset to the first page after a new search
  };

  const filteredVenues = venues.filter(venue =>
    venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    venue.overview.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastVenue = currentPage * itemsPerPage;
  const indexOfFirstVenue = indexOfLastVenue - itemsPerPage;
  const currentVenues = filteredVenues.slice(indexOfFirstVenue, indexOfLastVenue);

  const totalPages = Math.ceil(filteredVenues.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <DashboardContainer>
      <Container>
        <Title>Venue Explorer</Title>

        <SearchContainer>
          <InputGroup className="mb-3" style={{ width: '100%', maxWidth: '700px' }}>
            <SearchInput
              placeholder="Search Venues..."
              aria-label="Search Venues"
              aria-describedby="basic-addon2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <SearchButton onClick={handleSearch}><FaSearch /></SearchButton>
          </InputGroup>
        </SearchContainer>

        <Row>
          {currentVenues.map((venue) => (
            <Col md={6} key={venue.id} style={{ marginBottom: "30px" }}>
              <VenueCard>
                <VenueImage variant="top" src={venue.images[0]} />
                <CardBodyOverlay>
                  <VenueTitle>{venue.name}</VenueTitle>
                  <VenueOverview>{venue.overview}</VenueOverview>
                  <CapacityDetails>
                    <p><strong>Max Capacity:</strong> {venue.maxCapacity}</p>
                    <p><strong>Dinner:</strong> {venue.capacityDetails.dinner}</p>
                    <p><strong>Reception:</strong> {venue.capacityDetails.reception}</p>
                    <p><strong>Theatre:</strong> {venue.capacityDetails.theatre}</p>
                  </CapacityDetails>
                </CardBodyOverlay>
              </VenueCard>
            </Col>
          ))}
        </Row>

        <PaginationContainer className="justify-content-center mt-4">
          {[...Array(totalPages).keys()].map(number => (
            <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
              {number + 1}
            </Pagination.Item>
          ))}
        </PaginationContainer>
      </Container>
    </DashboardContainer>
  );
};

export default VenueList;
