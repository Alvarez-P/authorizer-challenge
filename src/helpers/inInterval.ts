export const inInterval = (recentDate: Date, oldDate: Date, intervalTime: number) => 
  (oldDate.getTime() + 1000 * 60 * intervalTime) >= recentDate.getTime()