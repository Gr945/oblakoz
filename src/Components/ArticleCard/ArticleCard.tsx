
import { Box, Grid, Theme, Typography } from '@mui/material';
import { Article } from '../../types';
import { styles } from '../../StyledComponents';
import { ContentGrid, ContentText } from './ArticleCard.styles';

type props = {
    item: Article;
}

export const ArticleCard = ({ item }: props) => {

    const dayMonth = `${item.date.getMonth()}.${item.date.getDay().toString.length > 1 ? item.date.getDay() : `0${item.date.getDay()}`}`

    return (
        <Grid container >
            <Box component={'a'} href={`/article/${item.href}`} target='_blank' rel="no link" style={styles.linkCard}>
                <Box
                    component="img"
                    src={`https://oblakoz.ru${item.coverSrc}`}
                    alt={item.title}
                    decoding='async'
                    loading='lazy'
                    data-nimg='future'
                    sx={{ width: '100%' }}
                />
                <ContentGrid container>
                    <Typography
                        children={`Статьи • ${dayMonth}`}
                        sx={{ color: (theme: Theme) => theme.palette.info.main }}
                    />
                    <Box sx={{ display: 'flex', gap: '8px' }}>
                        <Box
                            component="img"
                            src={`https://oblakoz.ru/_next/static/media/eye.fe7eff84.svg`}
                            alt='img'
                        />
                        <Typography children={item.views} sx={{ color: (theme: Theme) => theme.palette.info.main }} />
                    </Box>
                    <ContentText children={item.title} />
                </ContentGrid>
            </Box>
        </Grid>
    )

}