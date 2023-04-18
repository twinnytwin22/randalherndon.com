'use client'
import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function ExampleComponent({ items, setHotReloadData }: any) {
  const [activeItem, setActiveItem] = useState(items[0].title);
  const rightColumnRef = useRef(null);

  const handleIntersection = (entry: any) => {
    if (entry.isIntersecting) {
      setActiveItem(entry.target.getAttribute('data-title'));
    }
  };


  return (
    <div className="example-component w-full">
      <div className="left-column">{activeItem}</div>
      <div className="right-column" ref={rightColumnRef}>
        {items.map((item: any) => (
          <div key={item.id} className="item">
            <div className="content">{item.content}</div>
            <div className="spacer"></div>
            <div
              className="title"
              ref={
                rightColumnRef.current &&
                useInView({
                  threshold: 1,
                  root: rightColumnRef.current,
                  rootMargin: '-50px',
                })[0]
              }
              data-title={item.title}
              data-id={item.id}
              onChange={handleIntersection}
            >
              {item.title}
            </div>
            <div className="spacer"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HotReload({ data }: any) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export function App() {
  const [hotReloadData, setHotReloadData] = useState({});

  return (
    <div>
      <ExampleComponent
        items={[
          { id: 1, title: 'Item 1', content: 'Content 1' },
          { id: 2, title: 'Item 2', content: 'Content 2' },
          { id: 3, title: 'Item 3', content: 'Content 3' },
        ]}
        setHotReloadData={setHotReloadData}
      />
      <HotReload data={hotReloadData} />
    </div>
  );
}
