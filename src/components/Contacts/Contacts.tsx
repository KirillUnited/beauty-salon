import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faLocationDot, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import { ContactsProps } from './Contacts.props';
import cn from 'classnames';
import styles from './Contacts.module.scss';

export default function Contacts({ tel, address, time, email, className }: ContactsProps): React.JSX.Element {
    return (
        <div className={cn(styles.root, className)}>
            {
                tel && !Array.isArray(tel)
                &&
                <Link href={`tel:${tel}`} className={`${styles.item} truncate`}>
                    <FontAwesomeIcon icon={faPhone} className='w-4 h-4' />
                    {tel}
                </Link>
            }
            {
                tel && Array.isArray(tel)
                &&
                tel.map((item)=>{
                    return (
                        <Link href={`tel:${item}`} className={`${styles.item} truncate`} key={item}>
                            <FontAwesomeIcon icon={faPhone} className='w-4 h-4' />
                            {item}
                        </Link>
                    )
                })
            }
            {
                email
                &&
                <Link href={`mailto:${email}`} className={`${styles.item} truncate`}>
                    <FontAwesomeIcon icon={faEnvelope} className='w-4 h-4' />
                    {email}
                </Link>
            }
            {
                address
                &&
                <p className={styles.item}>
                    <FontAwesomeIcon icon={faLocationDot} className='w-4 h-4' />
                    {address}
                </p>
            }
            {
                time
                &&
                <p className={styles.item}>
                    <FontAwesomeIcon icon={faClock} className='w-4 h-4' />
                    {time}
                </p>
            }
        </div>
    )
}
