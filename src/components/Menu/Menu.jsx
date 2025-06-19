import '@/styles/Menu.css';
import Link from './Link';
import BuilderIcon from '@/assets/builder.svg';
import CustomizeIcon from '@/assets/customize.svg';

function Menu() {

    return (
        <nav className="menu">
            <div className="title">CV Builder</div>

            <ul className='nav-options'>
                <Link text="Builder" icon={BuilderIcon} />
                <Link text="Customize" icon={CustomizeIcon} />
            </ul>
        </nav>
    );
};

export default Menu;