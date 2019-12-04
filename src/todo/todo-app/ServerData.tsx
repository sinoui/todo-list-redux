import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ServerData() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios.get('/users').then((result) => {
      setContent(result.data.content);
    });
  }, []);

  return (
    <ul>
      {content.map((item: any, index: any) => (
        <li>{item && item.userName}</li>
      ))}
    </ul>
  );
}
