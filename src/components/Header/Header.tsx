import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
    Group,
    rem,
} from '@mantine/core';
import HeaderMenu from './HeaderMenu';
import styles from './Header.module.scss';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import HeaderDrawer from './HeaderDrawer';
import { getLocale, getTranslations } from 'next-intl/server';
import LocaleSwitcher from '../LanguageSwitcher/LocaleSwitcher';

export default async function Header() {
    const currentLocale = await getLocale();
    const t = await getTranslations('Header.navbar');
    const translatedNavbar = {
        "services": t('services.label'),
        "consult": t('consult.label'),
        "aboutUs": t('aboutUs.label'),
        "contacts": t('contacts.label'),
    }

    return (
        <header className={styles.root}>
            <nav className="min-h-[5rem] container flex justify-between items-center py-2">
                <Link href={'/'} className={styles.logo}>
                    <Image
                        src={`/images/logo-color.png`}
                        width={52}
                        height={52}
                        alt='Артур Сугако теперь и в Барселоне!'
                        priority
                    />
                </Link>

                <Group gap={rem('28px')} visibleFrom='lg' justify='center' className='text-base font-light gap-y-3'>
                    <HeaderMenu translatedNavbar={translatedNavbar} />
                </Group>

                <Group gap={'xl'} justify='center' visibleFrom='lg' className='gap-y-3'>
                    <LocaleSwitcher locale={currentLocale} />
                </Group>

                <HeaderDrawer currentLocale={currentLocale} translatedNavbar={translatedNavbar} />
            </nav>
        </header>
    )
}
