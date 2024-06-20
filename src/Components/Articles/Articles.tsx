import { MainGrid } from './Articles.styles';
import { ArticlesList } from '../../constants'
import { ArticleCard } from '../ArticleCard/ArticleCard';
import { useAppSelector } from '../../hooks';

export const Articles = () => {
    const filters = useAppSelector(state => state.filterReducer);
    // const [data, setData] = useState([]);

    // const filtersString = filters.filter.join('__');

    // useEffect(() => {
    //     fetch(`https://oblakoz.ru/articles?rubrics=${filtersString}`,
    //         {
    //             method: 'GET',
    //             mode: 'cors',
    //             cache: 'no-cache',
    //             credentials: 'same-origin',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Origin': 'http://localhost:3000/',
    //                 'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/sig',
    //                 'Accept-Encoding': 'gzip, deflate, br, zstd',
    //                 'Cache-Control': 'no-cache',
    //             }
    //         }
    //     )
    //         .then((res) => {
    //             console.log(res.json());

    //         })
    //         .catch(error => console.error('Error:', error));
    // }, [])



    return (
        <MainGrid container >
            {ArticlesList.filter((article) => filters.filter.length > 0 ? filters.filter.includes(article.rubricId) : article).map((card) => <ArticleCard key={card.id} item={card}/>)}
        </MainGrid>
    )

}