export const unit = [
  {
    id: 'centilitre',
    values: ['cl', 'centiliter', 'centilitre'],
    convertToSingular: 'centiliter',
    convertToPlural: 'centiliters',
    abbreviation: 'CL',
    conversion: [
      {
        unit: 'litre',
        coefficient: 100
      }
    ]
  },
  {
    id: 'litre',
    values: ['l', 'liter', 'litre'],
    convertToSingular: 'litre',
    convertToPlural: 'litres',
    abbreviation: 'L',
    conversion: [
      {
      unit: 'centilitre',
      coefficient: 0.01
    }
    ]
  },
  {
    id: 'gramme',
    values: ['g', 'gr', 'gramme', 'gram'],
    convertToSingular: 'gramme',
    convertToPlural: 'grammes',
    abbreviation: 'GR',
    conversion: [
      {
        unit: 'kilogramme',
        coefficient: 1000
      }
    ]
  },
  {
    id: 'kilogramme',
    values: ['kg', 'kilo', 'kilogramme', 'kilogram'],
    convertToSingular: 'gramme',
    convertToPlural: 'grammes',
    abbreviation: 'KG',
    conversion: [
      {
        unit: 'gramme',
        coefficient: 0.001
      }
    ]
  },
  {
    id: 'teaspoon',
    values: ['tsp', 'teaspoon'],
    convertToSingular: 'teaspoon',
    convertToPlural: 'teaspoons',
    abbreviation: 'TSP',
    conversion: []
  },
  {
    id: 'tablespoon',
    values: ['tbsp', 'tablespoon'],
    convertToSingular: 'tablespoon',
    convertToPlural: 'tablespoons',
    abbreviation: 'TBSP',
    conversion: []
  },
  {
    id: 'piece',
    values: ['pc', 'piece', 'pcs', 'pieces'],
    convertToSingular: 'piece',
    convertToPlural: 'pieces',
    abbreviation: 'PC',
    conversion: []
  },
  {
    id: 'slice',
    values: ['sl', 'slice', 'slices', 's'],
    convertToSingular: 'slice',
    convertToPlural: 'slices',
    abbreviation: 'SL',
    conversion: []
  }
];

