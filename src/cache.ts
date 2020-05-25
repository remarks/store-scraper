import _ from 'lodash';

export class DataCache {
  cache: any;
  fetchDate: Date;

  constructor() {
    this.cache = null;
    this.fetchDate = new Date();
  }

  reset() {
    this.cache = null;
  }

  check(newData) {
    if (!newData || !this.cache) {
      throw new Error('data not available');
    }

    const hasNewData = !_.isEqual(newData, this.cache);

    if (hasNewData) {
      this.cache = newData;

      return true;
    } else {
      return false;
    }
  }
}
