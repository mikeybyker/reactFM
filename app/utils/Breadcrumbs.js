import React from 'react';

const Breadcrumbs = ({links}) => {

    links.unshift({href:'#', text: 'Home'});

    return(
        <div className="row">
            <div className="large-12 columns">
                <nav aria-label="You are here:" role="navigation">
                    <ul className="breadcrumbs">
                        { links.map((link, index) => (
                            <li key={index} className={link.href ? '' : 'disabled'}>
                                {link.href ? <a href={link.href}>{link.text}</a> : link.text}
                            </li>
                        ))} 
                    </ul>
                </nav>
            </div>
        </div>
    )
};

Breadcrumbs.propTypes = {
    links: React.PropTypes.array.isRequired
}

export default Breadcrumbs;