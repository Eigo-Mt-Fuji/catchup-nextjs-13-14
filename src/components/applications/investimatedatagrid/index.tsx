import { useQuery } from '@apollo/client';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/system';
import { gql } from 'graphql-tag';

const GET_INVESTMENT_ESTIMATES = gql`
  query GetInvestmentEstimates {
    getInvestmentEstimates {
      id
      stockName
      principal
      unitPrice
      unitShares
      fluctuationPessimistic
      fluctuationNeutral
      fluctuationOptimistic
      profitExpectationAfter1Year
      profitExpectationAfter2Years
      profitExpectationAfter3Years
      profitExpectationAfter5Years
    }
  }
`;

const StyledDataGrid = styled(DataGrid)({
  '& .MuiDataGrid-root': {
    color: '#000000',
    backgroundColor: '#ffffff',
  },
  '& .MuiDataGrid-cell': {
    fontSize: 'calc(1vw + 0.5em)',
  },
  '& .MuiDataGrid-columnHeader': {
    fontSize: 'calc(1.2vw + 0.5em)',
  },
});

export default function InvestmentEstimates() {
    const { loading, error, data } = useQuery(GET_INVESTMENT_ESTIMATES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    
    return (
      <StyledDataGrid
        rows={data.getInvestmentEstimates}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    );
}   