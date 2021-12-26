/* eslint-disable jsx-a11y/anchor-is-valid */
import CoffeeBeansBreak from "../coffee-beans-break/coffee-beans-break";

import './header-content.scss';

const HeaderContent = () => {
    return (
        <div className="header-content">
            <h1 className="header-content__title">Everything You Love About Coffee</h1>
            <CoffeeBeansBreak />
            <p className="header-content__description">
                We makes every day full of energy and taste<br/>
                Want to try our beans?
            </p>
            <a className="header-content__link" href="#">More</a>
        </div>
    );
}

export default HeaderContent;