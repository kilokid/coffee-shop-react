
import MenuList from '../menu-list/menu-list';
import HeaderContent from '../header-content/header-content';
import './header-container.scss';

const HeaderContainer = () => {
    return (
        <div className="header-container">
            <MenuList />
            <HeaderContent />
        </div>
    );
}

export default HeaderContainer;