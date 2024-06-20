import { Grid, styled } from "@mui/material";

export const MainGrid = styled(Grid)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 360px)',
    gap: '24px',
    justifyContent: 'center',
    margin: '15px 0'
}));