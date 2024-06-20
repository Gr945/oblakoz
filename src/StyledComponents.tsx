import { Theme } from '@mui/material/styles';


export const styles = {
    filtersBlock: {
        display: 'flex',
        gap: '30px'
    },
    filterBox: {
        padding: '5px 10px',
        borderRadius: '5px',
        background: (theme: Theme) => theme.palette.primary.main
    },
    activeFilter: {
        boxShadow: (theme: Theme) => `2px 2px 8px ${theme.palette.secondary.main}`,
    },
    linkCard: {
        borderRadius: '18px',
        overflow: 'hidden',
        textDecoration: 'none',
        height: 'max-content',
    }
}