// css modules ファイル内に、html セレクタを直接記述したらエラーに遭遇した
// 
import styles from './page.module.css'
import SampleStateComponent from '@/components/applications/samplestate/index'
import SampleUseEffectComponent from '@/components/applications/sampleuseffect/index'
import SampleUseCallbackComponent from '@/components/applications/sampleusecallback/index'
import { Grid } from '@mui/material';

// useCallback
// useContext
// useMemo
// useDefferredValue
// 
export default async function SamplePage() {
    // Cursor疑問: SampleUseEffectComponentインポートを自動で行ってくれないのか?
    return (
        <main className={styles.main}>
            
            <Grid container>
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                    <SampleStateComponent defaultYesNo={true}></SampleStateComponent>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                    <SampleUseEffectComponent defaultCount={1}></SampleUseEffectComponent>
                </Grid>
                <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
                    <SampleUseCallbackComponent defaultCount={1}></SampleUseCallbackComponent>
                </Grid>
                
            </Grid>
        </main>
    )
}
