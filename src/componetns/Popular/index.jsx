import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

export default function Popular() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('https://server.figmamakets.com/api/makets/popular')
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [selected, setSelected] = useState(1);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div class="popular">
      <div class="popular__container">
        <h4 class="subtitle">Самое популярное</h4>
        <div data-spollers data-one-spoller class="popular__spollers">
          {data.map((item, i) => (
            <Card
              key={item.id}
              number={i + 1}
              id={item.id}
              link={item.link}
              image={item.image}
              type={item.type}
              language={item.language}
              color={item.color}
              price={item.price}
              description={item.description}
              likes={item.likes}
              title={item.title}
              date={item.date}
              images={item.images.split(', ')}
              features={item.features}
              level={item.level}
              adaptive={item.adaptive}
              toggle={toggle}
              selected={selected}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
