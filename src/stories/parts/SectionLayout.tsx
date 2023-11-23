import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import './SectionLayout.css';
import { styled } from '@mui/material/styles';

interface CustomGridItem {
    id: number;
    name: string;
}
interface CustomGridProps {
    rows: CustomGridItem[];
}
const StyledSection = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    height: '50vh',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
// five grid breakpoints: xs, sm, md, lg, and xl
    // xs: extra small devices (portrait phones, less than 576px)
    // sm: small devices (landscape phones, 576px and up)
    // md: medium devices (tablets, 768px and up)
    // lg: large devices (desktops, 992px and up)
    // xl: extra large devices (large desktops, 1200px and up)
// m1 macbook pro 13-inch: 1800 x 1169
// Integer values can be given to each breakpoint, indicating how many of the 12 available columns are occupied by the component when the viewport width satisfies the breakpoint constraints.
// パソコンの画面サイズでは6枚表示 ⇒ col-lg-2
// タブレットの画面サイズでは3枚表示 ⇒ col-md-4 ※col-sm-4でもいいかも。
// スマホの画面サイズでは1枚表示
export default function SectionLayout(props: CustomGridProps) {
    // Render grid layout using CSS Grid
    return (
        <Paper
            sx={{
            p: 2,
            marginLeft: 10,
            marginRight: 10,
            maxWidth: '100vw',
            maxHeight: '100vh',
            height: '100vh',
            flexGrow: 1,
            backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container direction={"column"} spacing={2}>
                { props.rows.map((row, index) => (<Grid item xs={12} lg={12}><StyledSection className="centering" key={row.id}>{row.name}</StyledSection></Grid>)) }
            </Grid>
        </Paper>
    );
}