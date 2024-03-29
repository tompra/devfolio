import { skills } from '../data';
import { useEffect, useRef } from 'react';

const Slider = () => {
    const logosRef = useRef(null);

    useEffect(() => {
        if (logosRef.current) {
            let ul = logosRef.current;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
        }
    }, []);

    return (
        <div className='xs:hidden sm:inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-160px),transparent_100%)] py-10'>
            <ul
                ref={logosRef}
                className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'
                role='menu'
            >
                {skills.map((skill) => {
                    const { id, icon } = skill;
                    return (
                        <li key={id} role='menuitem'>
                            {icon}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default Slider;
