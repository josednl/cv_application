import '@/styles/Menu.css';
import Link from '@/components/Menu/Link.jsx';
import BuilderIcon from '@/assets/builder.svg';
import CustomizeIcon from '@/assets/customize.svg';

export default function Menu({ handleClick = () => {} }) {

    return (
        <nav className='menu'>
            <div className='title'>CV Builder</div>

            <ul className='nav-options'>
                <Link text='Builder' icon={BuilderIcon} handleClick={() => {handleClick(0)}} />
                <Link text='Customize' icon={CustomizeIcon} handleClick={() => {handleClick(1)}} />
            </ul>
        </nav>
    );
};
