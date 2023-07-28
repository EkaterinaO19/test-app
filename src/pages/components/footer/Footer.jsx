import React from 'react';
import Image from "next/image";
import telegramIcon from "@/assets/images/telegram.svg";
import viberIcon from "@/assets/images/viber.svg";
import whatsappIcon from "@/assets/images/whatsapp.svg";
import styles from './Footer.module.scss'


function Footer(props) {
    return (
        <footer className={styles.wrapper}>
            <div className={styles.left}>
                <p>О компании</p>
                <ul>
                    <li>Партнёрская программа</li>
                    <li>Вакансии</li>
                </ul>
            </div>

            <div className={styles.center}>
                <p>Меню</p>

                <div className={styles.columns}>
                    <ul>
                        <li>Расчёт стоимости</li>
                        <li>Услуги</li>
                        <li>Виджеты</li>
                        <li>Интеграции</li>
                        <li>Наши клиенты</li>
                    </ul>

                    <ul>
                        <li>Кейсы</li>
                        <li>Благодарственные письма</li>
                        <li>Сертификаты</li>
                        <li>Блог на Youtube</li>
                        <li>Вопрос / Ответ</li>
                    </ul>
                </div>

            </div>

            <div  className={styles.right}>
                <p>Контакты</p>

                    <ul>
                        <li>+7 555 555-55-55</li>
                        <li>
                            <div className={styles.icons}>
                                <Image src={telegramIcon} alt={'telegramIcon'}/>
                                <Image src={viberIcon} alt={'viberIcon'}/>
                                <Image src={whatsappIcon} alt={'whatsappIcon'}/>
                            </div>

                        </li>
                        <li>Москва, Путевой проезд 3с1, к 902</li>
                    </ul>
                    <div className={styles.text_mini}>
                        <span>©WELBEX 2022. Все права защищены.</span>
                        <span>Политика конфиденциальности</span>
                    </div>
                </div>



        </footer>
    );
}

export default Footer;