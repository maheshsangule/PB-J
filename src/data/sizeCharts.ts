import { SizeChartData } from '../types';

export const sizeChartsData: Record<string, SizeChartData> = {
  shirts: {
    category: 'Shirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    measurements: [
      {
        parameter: 'Chest (Around widest point)',
        unitInches: [36, 38, 40, 42, 44, 46],
        unitCm: [91.4, 96.5, 101.6, 106.7, 111.8, 116.8]
      },
      {
        parameter: 'Shoulder (Seam to seam)',
        unitInches: [16.5, 17.5, 18.0, 18.75, 19.5, 20.25],
        unitCm: [41.9, 44.5, 45.7, 47.6, 49.5, 51.4]
      },
      {
        parameter: 'Length (High point shoulder to hem)',
        unitInches: [27.5, 28.5, 29.0, 30.0, 30.5, 31.0],
        unitCm: [69.9, 72.4, 73.7, 76.2, 77.5, 78.7]
      },
      {
        parameter: 'Sleeve Length (From shoulder seam)',
        unitInches: [24.0, 24.5, 25.0, 25.5, 26.0, 26.5],
        unitCm: [61.0, 62.2, 63.5, 64.8, 66.0, 67.3]
      },
      {
        parameter: 'Collar (Neck circumference)',
        unitInches: [14.5, 15.0, 15.5, 16.0, 16.5, 17.0],
        unitCm: [36.8, 38.1, 39.4, 40.6, 41.9, 43.2]
      }
    ],
    howToMeasure: [
      {
        step: 'Chest',
        instruction: 'Measure around the fullest part of your chest, keeping the tape horizontal under the arms.'
      },
      {
        step: 'Shoulder',
        instruction: 'Measure straight across the back from the tip of one shoulder bone to the other.'
      },
      {
        step: 'Length',
        instruction: 'Measure from the highest point of the shoulder seam straight down to the bottom hem.'
      }
    ],
    fitAdvice:
      'For a modern tailored silhouette, choose your regular size. If you prefer an oversized or relaxed streetwear drape, size up one notch.'
  },
  pyjamas: {
    category: 'Pyjamas',
    sizes: ['S', 'M', 'L', 'XL'],
    measurements: [
      {
        parameter: 'Waist (Relaxed to Stretched)',
        unitInches: [28, 31, 34, 37],
        unitCm: [71.1, 78.7, 86.4, 94.0]
      },
      {
        parameter: 'Hip (Widest point)',
        unitInches: [40, 42, 44, 46],
        unitCm: [101.6, 106.7, 111.8, 116.8]
      },
      {
        parameter: 'Inseam (Crotch to hem)',
        unitInches: [29.5, 30.0, 30.5, 31.0],
        unitCm: [74.9, 76.2, 77.5, 78.7]
      },
      {
        parameter: 'Outseam Length (Waistband to hem)',
        unitInches: [39.5, 40.5, 41.5, 42.5],
        unitCm: [100.3, 102.9, 105.4, 108.0]
      },
      {
        parameter: 'Thigh Circumference',
        unitInches: [25.0, 26.5, 28.0, 29.5],
        unitCm: [63.5, 67.3, 71.1, 74.9]
      }
    ],
    howToMeasure: [
      {
        step: 'Waist',
        instruction: 'Measure around your natural waistline where you normally wear your pyjama waistband.'
      },
      {
        step: 'Inseam',
        instruction: 'Measure from the inside of your crotch down along the leg to your ankle.'
      }
    ],
    fitAdvice:
      'Our pyjamas feature a comfort-stretch elasticated waistband with drawstring. Designed with a roomy, relaxed lounge fit.'
  },
  boxers: {
    category: 'Boxers',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    measurements: [
      {
        parameter: 'Waist Size (Recommended jeans waist)',
        unitInches: [28, 31, 34, 37, 40],
        unitCm: [71.1, 78.7, 86.4, 94.0, 101.6]
      },
      {
        parameter: 'Outseam Length',
        unitInches: [14.0, 14.5, 15.0, 15.5, 16.0],
        unitCm: [35.6, 36.8, 38.1, 39.4, 40.6]
      },
      {
        parameter: 'Leg Opening (Circumference)',
        unitInches: [24.0, 25.0, 26.0, 27.0, 28.0],
        unitCm: [61.0, 63.5, 66.0, 68.6, 71.1]
      }
    ],
    howToMeasure: [
      {
        step: 'Jeans Waist',
        instruction: 'Match directly to your standard denim/trouser waist size for a zero-bunching fit.'
      }
    ],
    fitAdvice:
      'Engineered with anti-roll microfiber waistband. If you are between two sizes, we recommend sizing up for sleeping comfort.'
  },
  'lounge-pants': {
    category: 'Lounge Pants',
    sizes: ['S', 'M', 'L', 'XL'],
    measurements: [
      {
        parameter: 'Waist (Elastic range)',
        unitInches: [29, 32, 35, 38],
        unitCm: [73.7, 81.3, 88.9, 96.5]
      },
      {
        parameter: 'Hip',
        unitInches: [41, 43, 45, 47],
        unitCm: [104.1, 109.2, 114.3, 119.4]
      },
      {
        parameter: 'Inseam',
        unitInches: [28.5, 29.0, 29.5, 30.0],
        unitCm: [72.4, 73.7, 74.9, 76.2]
      },
      {
        parameter: 'Ankle Leg Opening',
        unitInches: [13.0, 13.5, 14.0, 14.5],
        unitCm: [33.0, 34.3, 35.6, 36.8]
      }
    ],
    howToMeasure: [
      {
        step: 'Total Length',
        instruction: 'Measure from top waistband to the bottom ankle hem.'
      }
    ],
    fitAdvice:
      'Tapered architectural silhouette with pleat detailing. Regular true-to-size fit.'
  }
};
