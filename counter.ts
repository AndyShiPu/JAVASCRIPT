class Counter {
    /*
    * This is a private variable that will store the count
    */
  private count = 0;

  increment() {
    this.count++;
  }

  getCount() {
    return this.count;
  }
}