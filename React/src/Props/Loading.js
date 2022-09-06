import React from 'react'
import Title from './Title'
import Text from './Text'
import List from './List'
import Links from './Links'

export default function Loading({show}) {
  return (
    <div className="loading">
      {show === 'true' ?
                <>
                    <Title />
                    <Text />
                    <List />
                    <Links openInNewTab={'_blank'}/>
                </>
                : 
                <p>Loanding...</p>
            }
    </div>
  )
}