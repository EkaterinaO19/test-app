import React from 'react';
import Image from "next/image";
import logoIcon from "@/assets/images/logo_welbex.svg";
import telegramIcon from '@/assets/images/telegram.svg';
import viberIcon from '@/assets/images/viber.svg';
import whatsappIcon from '@/assets/images/whatsapp.svg'
import purple_light from '@/assets/images/purple_light.png'

import styles from './Header.module.scss'

function Header(props) {
    return (
        <header className={styles.wrapper}>
            <div className={styles.left}>
                <Image src={logoIcon} alt={"logoIcon"}/>
                <span>крупный интегратор CRM в Росcии и ещё 8 странах</span>
            </div>

            <div className={styles.center}>
                <ul>
                    <li>Услуги</li>
                    <li>Виджеты</li>
                    <li>Интеграции</li>
                    <li>Кейсы</li>
                    <li>Сертификаты</li>
                </ul>
            </div>

            <div className={styles.right}>
                <span className={styles.tel}>+7 555 555-55-55</span>
                <div className={styles.contacts}>
                    <Image src={telegramIcon} alt={'telegramIcon'}/>
                    <Image src={viberIcon} alt={'viberIcon'}/>
                    <Image src={whatsappIcon} alt={'whatsappIcon'}/>
                </div>
            </div>
        </header>

    );
}

export default Header;