import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FibeManuaRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FibeManuaRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('React Js', 'React is javascript library')}
            {newsArticle('React Hooks', 'useState() & useEffect() is useful')}
            {newsArticle('Love language', 'I love javascript')}
            {newsArticle('Is Redux too good', 'Code - 123 readers')}
            {newsArticle('React Js', 'Building user interfaces')}

            <div className="widgets__ads">
                <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt="" />
            </div>
        </div>
    );
}

export default Widgets;