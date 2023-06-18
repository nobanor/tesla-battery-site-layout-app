import React from 'react';
import { Typography } from '@mui/material';

const SiteLayout = ({ batteryQuantities }) => {
  const maxSiteWidth = 100; // Maximum site width in FT
  const rectangleHeight = 10; // Height of each rectangle in FT
  const padding = 2; // Padding between rectangles in FT

  const batteryDimensions = {
    megapack2XL: { width: 40, color: '#ff0000', label: 'Megapack 2XL' },
    megapack2: { width: 30, color: '#00ff00', label: 'Megapack 2' },
    megapack: { width: 30, color: '#0000ff', label: 'Megapack' },
    powerpack: { width: 10, color: '#ff00ff', label: 'Powerpack' },
    transformer: { width: 10, color: '#ffff00', label: 'Transformer' },
  };

  const renderBatteryRectangles = () => {
    let currentX = 0;
    let currentY = 0;

    const rectangles = [];

    Object.entries(batteryQuantities).forEach(([batteryType, quantity]) => {
      const { width, color, label } = batteryDimensions[batteryType];
      const rectWidth = width * 10; // Convert width from FT to pixels

      for (let i = 0; i < quantity; i++) {
        if (currentX + rectWidth > maxSiteWidth * 10) {
          currentX = 0;
          currentY += rectangleHeight * 10 + padding * 10;
        }

        rectangles.push(
          <g key={`${batteryType}-${i}`}>
            <rect
              x={currentX}
              y={currentY}
              width={rectWidth}
              height={rectangleHeight * 10}
              fill={color}
              stroke="#000"
              strokeWidth="1"
            />
            <text
              x={currentX + rectWidth / 2}
              y={currentY + (rectangleHeight * 10) / 2}
              textAnchor="middle"
              alignmentBaseline="middle"
              fill="#000"
              fontSize="8"
              fontWeight="bold"
            >
              {label}
            </text>
          </g>
        );

        currentX += rectWidth + padding * 10;
      }
    });

    return rectangles;
  };

  return (
    <div style={{ width: `${maxSiteWidth * 10}px`, border: '1px solid #000', padding: '10px' }}>
    <Typography variant="h4" component="h4" gutterBottom>
      Site Layout
    </Typography>
    <svg width={`${maxSiteWidth}ft`} height="1000">
      {renderBatteryRectangles()}
    </svg>
  </div>
  );
};

export default SiteLayout;
