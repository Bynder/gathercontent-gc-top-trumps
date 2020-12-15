import React from 'react'
import Markdown from 'markdown-to-jsx';

export default function Header({data = {}}) {
   return (
      <div>
         <h2>This is Header Component with some content from CMS:</h2>
         {Object.keys(data).filter(key => data[key]).map(key => (
            <Markdown options={{ forceBlock: true }} key={key}>{data[key]}</Markdown>
         ))}
      </div>
   )
}

