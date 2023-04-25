export const isInRange = (value: number, range: { min: number; max: number }): boolean => {
    if (range.min && range.max && (value < range.min || value > range.max)) {
        return false;
      }
      return true;
    }