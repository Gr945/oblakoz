import { Box, styled } from '@mui/material';

export const FilterBox = styled(Box)(({ theme }) => ({
    padding: '6px 8px',
    fontSize: '0.875rem',
    lineHeight: 1.43,
    borderRadius: '6px',
    cursor: 'pointer',
    background: theme.palette.primary.main,
}));