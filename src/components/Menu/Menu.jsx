import '@/styles/Menu.css';
import Link from '@/components/Menu/Link.jsx';
import BuilderIcon from '@/assets/builder.svg';
import CustomizeIcon from '@/assets/customize.svg';

const navOptions = [
    { text: 'Builder', icon: BuilderIcon, index: 0 },
    { text: 'Customize', icon: CustomizeIcon, index: 1 },
];

export default function Menu({ handleClick = () => {} }) {
    return (
        <nav className='menu'>
            <div className='title'>CV Builder</div>

            <ul className='nav-options'>
                {navOptions.map(({ text, icon, index }) => (
                    <li key={text}>
                        <Link text={text} icon={icon} handleClick={() => handleClick(index)} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}
