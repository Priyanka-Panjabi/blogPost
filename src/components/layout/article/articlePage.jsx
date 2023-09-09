import React,{useState, useEffect} from 'react';
import './articlePage.css'
import parse from 'html-react-parser'
import {callService} from '../../../utility/common';
import ThemeContext from '../../../utility/themeContext';

export const ArticlePage = ({data}) => {

    const [articleData,setArticleData] = useState([]);
    const { theme } = React.useContext(ThemeContext);

    /**
     * This is a function to convert a standard date to dd mon yy format For eg:- 09 Sep 2023.
     * 
     * @param {Date} date - date in standard Date format.
     * @returns {String} - date in "dd Mon yy"
    */
    const formatPublishedDate = (date) =>{
        const day = date.getDate().toString().padStart(2, '0'); // Ensure two-digit day
        const month = date.toLocaleString('default', { month: 'short' }); // Get abbreviated month name (e.g., "Sep")
        const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year

        return `${day} ${month} ${year}`;
    }

    useEffect(()=>{
        // This is temporarily being called from here
        callService('/articles').then((data) => setArticleData(data))
    },[])

    const darkStyles = {
        color: 'white',
        border: '2px solid blue',
        backgroundColor: 'rgb(50, 50, 50)'
    };
    const lightStyles = {
        color: 'black',
        border: '2px solid black',
    };

  return(
    <div className='article' style={theme?darkStyles:lightStyles}>
        <h2>{articleData[0]?.title}</h2>
        <p>Published by- {articleData[0]?.author.name} | {formatPublishedDate(new Date(articleData[0]?.published_on))}</p>
        {
            articleData[0]?.content.map((item)=>{
                if(item.type==='text'){
                    return <p key={item._id}>{parse(item.value)}</p>
                } else if(item.type==='image') {
                    return <img key={item._id} src={item.value} width={200} height={150} alt='img' />
                }
                return null
            })
        }
    </div>
  )
}