import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RevenueContainer = styled.div`
  font-family: 'Helvetica Neue', Arial, sans-serif;
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #edf2f7;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title5 = styled.h1`
  text-align: center;
  color: #1a202c;
  margin-bottom: 40px;
  font-size: 2.5rem;
`;

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Revenue for the Year',
    },
  },
};

const RevenuePage = () => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const fetchRevenueData = async () => {
      try {
        const response = await fetch('http://localhost:8080/payment/monthly-revenue?year=2024');
        const data = await response.json();

        const labels = [
          'January', 'February', 'March', 'April', 'May', 'June', 
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const values = labels.map((_, index) => data[index + 1] || 0);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Revenue',
              data: values,
              fill: false,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              borderWidth: 2,
              tension: 0.1,  // Makes the line smooth
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching revenue data:', error);
      }
    };

    fetchRevenueData();
  }, []);

  return (
    <RevenueContainer>
      <Title5>Yearly Revenue</Title5>
      <Line data={chartData} options={options} />
    </RevenueContainer>
  );
};

export default RevenuePage;
