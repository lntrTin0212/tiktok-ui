import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/09e5d2ba7301eac2fbff2548af71aaf0~c5_100x100.jpeg?x-expires=1656817200&x-signature=z%2BfiZT40DkIHQNq9%2FhyYa0tL%2Bj0%3D"
                alt="sthing"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Le Nguyen Trong Tin</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>@lntr.tin</span>
            </div>
        </div>
    );
}

export default AccountItem;
