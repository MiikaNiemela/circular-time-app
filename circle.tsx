import React from 'react';
import { Svg, Path, G } from 'react-native-svg';

export interface Slice {
  color: string;
  degrees: number; // Size in degrees
}

interface CircleProps {
  size: number;
  slices: Slice[];
  lineWidth?: number; // Optional parameter
}

export const Circle: React.FC<CircleProps> = ({ size, slices, lineWidth = 50 }) => {
  const radius = size / 2;
  const center = radius;
  const innerRadius = radius - lineWidth; // Calculate the inner radius
  let startAngle = 0;

  const paths = slices.map((slice, index) => {
    const { color, degrees } = slice;
    const endAngle = startAngle + degrees;
    const largeArcFlag = degrees > 180 ? 1 : 0;

    const startX = center + radius * Math.cos((Math.PI * startAngle) / 180);
    const startY = center + radius * Math.sin((Math.PI * startAngle) / 180);
    const endX = center + radius * Math.cos((Math.PI * endAngle) / 180);
    const endY = center + radius * Math.sin((Math.PI * endAngle) / 180);

    const innerStartX = center + innerRadius * Math.cos((Math.PI * startAngle) / 180);
    const innerStartY = center + innerRadius * Math.sin((Math.PI * startAngle) / 180);
    const innerEndX = center + innerRadius * Math.cos((Math.PI * endAngle) / 180);
    const innerEndY = center + innerRadius * Math.sin((Math.PI * endAngle) / 180);

    const pathData = `
      M ${startX},${startY}
      A ${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY}
      L ${innerEndX},${innerEndY}
      A ${innerRadius},${innerRadius} 0 ${largeArcFlag} 0 ${innerStartX},${innerStartY}
      Z
    `;

    startAngle = endAngle;

    return <Path key={index} d={pathData} fill={color} />;
  });

  return <Svg width={size} height={size}>{paths}</Svg>;
};

interface MultiCircleProps {
  circles: CircleProps[];
}

const getMaxSize = (circles: CircleProps[]) => {
  return Math.max(...circles.map(circle => circle.size));
};

const getCenterOffset = (maxSize: number, size: number) => {
  return (maxSize - size) / 2;
};

export const MultiCircle: React.FC<MultiCircleProps> = ({ circles }) => {
  const maxSize = getMaxSize(circles);

  return (
    <Svg width={maxSize} height={maxSize}>
      {circles.map((circleProps, index) => {
        const offset = getCenterOffset(maxSize, circleProps.size);
        return (
          <G key={index} transform={`translate(${offset}, ${offset})`}>
            <Circle {...circleProps} />
          </G>
        );
      })}
    </Svg>
  );
};

export default Circle;