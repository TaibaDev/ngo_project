"use client"
// components/MyMasonryLayout.js
import React, { useEffect, useState } from 'react';

const MyMasonryLayout = ({ columnsCountBreakPoints, gutter, children }) => {
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const getColumns = () => {
      const width = window.innerWidth;
      let columns = 1;

      for (const breakpoint in columnsCountBreakPoints) {
        if (width >= breakpoint) {
          columns = columnsCountBreakPoints[breakpoint];
        }
      }

      return columns;
    };

    const handleResize = () => {
      setColumns(getColumns());
    };

    // Initial column count calculation
    setColumns(getColumns());

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [columnsCountBreakPoints]);

  const columnWrapper = {};
  const result = [];

  for (let i = 0; i < columns; i++) {
    columnWrapper[`column${i}`] = [];
  }

  for (let i = 0; i < children.length; i++) {
    const columnIndex = i % columns;
    columnWrapper[`column${columnIndex}`].push(
      <div key={i} style={{ marginBottom: `${gutter}px` }}>
        {children[i]}
      </div>
    );
  }

  for (let i = 0; i < columns; i++) {
    result.push(
      <div
        key={i}
        style={{
          marginLeft: i > 0 ? `${gutter}px` : 0,
          flex: 1,
        }}
      >
        {columnWrapper[`column${i}`]}
        </div>
    );
  }

  return (
    <div style={{ display: 'flex' }}>
      {result}
    </div>
  );
};

export default MyMasonryLayout;
