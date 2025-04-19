import {Navigate} from "react-router-dom";
import styles from './StatsPage.module.css';

export const StatsPage = ({user}) => {
    if(!user){
        return <Navigate to={'/login'} replace/>;
    }

    const stats = [
        { label: 'Tổng số bài viết', value: '10' },
        { label: 'Lượt xem', value: '1,234' },
        { label: 'Bình luận', value: '56' },
        { label: 'Người theo dõi', value: '89' }
    ];

    return (
        <div className={styles.stats}>
            <div className={styles.header}>
                <h1>Thống kê</h1>
            </div>

            <div className={styles.statsGrid}>
                {stats.map((stat, index) => (
                    <div key={index} className={styles.statCard}>
                        <div className={styles.statValue}>{stat.value}</div>
                        <div className={styles.statLabel}>{stat.label}</div>
                    </div>
                ))}
            </div>

            <div className={styles.chartContainer}>
                <div className={styles.chartHeader}>
                    <h2 className={styles.chartTitle}>Lượt xem theo tháng</h2>
                    <div className={styles.chartControls}>
                        <button className={styles.chartButton}>Tuần</button>
                        <button className={`${styles.chartButton} ${styles.active}`}>Tháng</button>
                        <button className={styles.chartButton}>Năm</button>
                    </div>
                </div>
                {/* Thêm chart component ở đây */}
            </div>
        </div>
    );
};