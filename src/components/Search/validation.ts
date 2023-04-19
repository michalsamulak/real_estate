import * as yup from 'yup';

export const validation = yup.object().shape({
    title: yup.string().min(3),
    // Add type annotations to function arguments
    minBedrooms: yup
      .number()
      .test(
        "bedrooms",
        "Minimum number of bedrooms cannot be greater than maximum",
        (value, { parent }) => value !== undefined && value <= parent.maxBedrooms
      ),
    maxBedrooms: yup
      .number()
      .test(
        "bedrooms",
        "Maximum number of bedrooms cannot be less than minimum",
        (value, { parent }) => value !== undefined && value >= parent.minBedrooms
      ),
    minPrice: yup
      .number()
      .test(
        "price",
        "Minimum price cannot be greater than maximum",
        (value, { parent }) => value !== undefined && value <= parent.maxPrice
      ),
    maxPrice: yup
      .number()
      .test(
        "price",
        "Maximum price cannot be less than minimum",
        (value, { parent }) => value !== undefined && value >= parent.minPrice
      ),
  });
  