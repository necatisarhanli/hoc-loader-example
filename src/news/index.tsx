import React from 'react'
import './styles.css'
import { NewsData, NewsProps } from './type'

const News = ({ data }: NewsProps): JSX.Element => {
  return (
    <div className='news'>
      <div className='news__header'>Trends</div>
      <div className='news__list'>
        {data?.map(({ info, name, count }, index) => {
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                paddingTop: 10,
                lineHeight: '18px',
              }}
            >
              <div style={{ color: '#8b98a5', fontSize: 13 }}>
                {index + 1} · {info}
              </div>
              <div style={{ fontSize: 15 }}>{name}</div>
              <div style={{ color: '#8b98a5', fontSize: 13 }}>
                {count} Tweets
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default News
