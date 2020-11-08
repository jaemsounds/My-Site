// This will "sanitize" HTML that is returned
// Example: <p>Hello World!</p> returned as Hello World!

import React  from 'react';
import Parser from 'html-react-parser';
import { Link } from 'gatsby';
import  { isInternal } from './helpers';

const config = {
    replace: ({ attribs, children }) => {
        if (attribs && attribs.href) {
            let { href } = attribs
            if (href) return <ReactAnchor attribs={attribs} children={children} />
        }
    }
}

const ReactAnchor = ({ attribs, children }) => {
    let { href } = attribs
    if (isInternal(href)) return <Link to={`${href}`}>{children[0].data}</Link>
    if (!isInternal(href)) return <a href={`${href}`}>{children[0].data}</a>
}

const ParseHTML = html => {
    const clean = Parser(html, config)
    return clean
}

export { ParseHTML }