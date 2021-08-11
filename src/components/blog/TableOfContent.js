import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const TableOfContent = ({ content }) => {
  const [titles, setTitles] = useState(null);
  const ul = useRef(null);

  const handleScroll = () => {
    if (
      ul &&
      ul.current &&
      ul.current.offsetTop <
        (window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0)
    ) {
      ul.current.className = 'sticky';
    } else if (ul && ul.current) {
      ul.current.className = '';
    }
  };

  useEffect(() => {
    const contentLines = content.split('\n');
    let titles = contentLines.filter((line) => {
      return line.startsWith('##');
    });
    titles = titles.map((title) => title.toLowerCase().substr(3));
    window.addEventListener('scroll', handleScroll);
    setTitles(titles);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='table-of-content'>
      <ul ref={ul}>
        {titles !== null &&
          titles.map((title, idx) => (
            <li key={idx}>
              <Link
                to={title}
                spy={true}
                smooth={true}
                duration={500}
                activeClass={'active-content'}
              >
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TableOfContent;
