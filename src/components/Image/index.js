import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
const Image = forwardRef(({ src, alt, classname, fallback: customFallback = images.noImg, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleErr = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, classname)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleErr}
        />
    );
});

export default Image;
