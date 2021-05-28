import * as React from 'react';

interface IProps {
  name?: string;
}

const Header: React.FC<IProps> = (props: IProps) => (
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
            <a className="navbar-brand" href="#">TOY ROBOT</a>
            </div>
            
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">        
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">{props.name}</a></li>
            </ul>
            </div>
        </div>
    </nav>
);

Header.defaultProps = {
  name: 'Siri',
};

export default Header;