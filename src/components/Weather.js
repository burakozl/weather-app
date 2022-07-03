import React from 'react'
import { useSelector } from 'react-redux';
import Content from './Content';
import Loading from './Loading';

function Weather() {

      const items = useSelector((state) => state.weather.items);
      const status = useSelector((state) => state.weather.status);
    
      const list = items.list;

      const newList = [];

      for (let i = 0; i < list.length; i+=8) {
        newList.push(list.slice(i,i+8))
      }

  return (
    <section className="ajax-section">
            {
              status === 'loading' ? <Loading /> :
                newList.map((weathers)=> {
                    const wt = weathers[0];
                    return <div  key={wt.dt}><Content wt={wt}/></div>
                })
            }
    </section>
  )
}

export default Weather
