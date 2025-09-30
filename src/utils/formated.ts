type BreakpointConfig = {
  max: number;
  min: number;
};

type ResponsiveItemConfig = {
  breakpoint: BreakpointConfig;
  items: number;
};

type ResponsiveConfig = {
  desktop: ResponsiveItemConfig;
  tablet: ResponsiveItemConfig;
  mobile: ResponsiveItemConfig;
};

export const createResponsiveConfig = (items: number[]): ResponsiveConfig => {
  return {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: items[2],
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: items[1],
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: items[0],
    },
  };
};