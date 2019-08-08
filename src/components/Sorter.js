export default class Sorter {
  constructor(arrayToSort) {
    this.arr = [...arrayToSort];
    this.indexes = [];
    this.index = 0;
  }

  doStepUp() {
    let flag = true;

    if (this.indexes.length === this.index) {
      while (flag) {
        flag = false;
        for (let i = 0; i < this.arr.length - 1; i++) {
          if (this.arr[i] > this.arr[i + 1]) {
            Sorter.swap(this.arr, i);
            this.indexes.push(i);
            this.index = this.index + 1;
            flag = true;
            return this.arr;
          }
        }
      }
      return this.arr;
    } else {
      Sorter.swap(this.arr, this.indexes[this.index]);
      this.index = this.index + 1;
      return this.arr;
    }
  }

  doStepBack() {
    for (let i = 0; i < this.arr.length; i++) {
      if (this.index > 0) {
        this.index = this.index - 1;
        Sorter.swap(this.arr, this.indexes[this.index]);
        return this.arr;
      }
    }
    return this.arr;
  }

  get stepsCount() {
    return this.index;
  }

  static swap(arr, i) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
}
