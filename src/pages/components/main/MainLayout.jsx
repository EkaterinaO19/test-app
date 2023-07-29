import React from 'react';
import styles from './MainLayout.module.scss'
import useLayoutWidth from "@/hooks/useLayoutWidth";

function MainLayout(props) {
    const is320Width = useLayoutWidth(320);
    const is1440Width = useLayoutWidth(1440);

    return (
        <main className={styles.wrapper}>
            <div className={styles.left}>
                <h2>Зарабатывайте больше</h2>
                <h1>с WELBEX</h1>
                <p>Развиваем и контролируем продажи за вас</p>
            </div>

            {is1440Width && (
                <div className={styles.right}>
                    <div className={styles.right_title}>Вместе с <span>бесплатной консультацией</span> мы дарим:</div>
                    <div className={styles.columns}>
                        <div className={styles.left_column}>
                            <div>
                                <p>Виджеты</p>
                                <span>30 готовых решений</span>
                            </div>
                            <div>
                                <p>Skype Аудит</p>
                                <span>отдела продаж и CRM системы</span>
                            </div>
                        </div>

                        <div className={styles.right_column}>
                            <div>
                                <p>Dashboard</p>
                                <span>с показателями вашего бизнеса</span>
                            </div>
                            <div>
                                <p>35 дней</p>
                                <span>использования CRM</span>
                            </div>
                        </div>
                    </div>
                    <button className={styles.button}>Получить консультацию</button>
                </div>
            )}

            {is320Width && (
                <>
                    <div className={styles.right_title_mini}>Вместе с
                        <span className={styles.right_title_mini_span}> бесплатной консультацией </span>
                        мы дарим:</div>
                    <div className={styles.grid_container}>
                        <div className={styles.column}>
                            <p>Skype аудит</p>
                            <p>30 виджетов</p>
                        </div>
                        <div className={styles.column}>
                            <p>Dashboard</p>
                            <p>Месяц аmoCRM</p>
                        </div>
                    </div>
                </>
            )}
        </main>
    );
}

export default MainLayout;