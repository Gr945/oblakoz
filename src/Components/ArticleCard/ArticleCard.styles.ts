import { Grid, Typography, styled } from "@mui/material";

export const ContentGrid = styled(Grid)(({ theme }) => ({
    justifyContent: 'space-between',
    padding: '24px',
    background: theme.palette.primary.main
}));

export const ContentText = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    fontSize: '1.375rem',
    lineHeight: 1.18,
    color: theme.palette.text.secondary,
    marginTop: '12p'
}));