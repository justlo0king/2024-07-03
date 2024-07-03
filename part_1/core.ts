export class Core {
  commonPrefix(inputs: string[]) {
    return inputs.map((input) => this.calculateForInput(input));
  }

  calculateForInput(input: string) {
    let len = input.length;
    let lengthTotal = len;
    let commonPrefix = '';
    for (let i = 1; i < len; i++) {
      commonPrefix = this.getCommonPrefix(input, input.substring(i));
      if (commonPrefix) {
        lengthTotal += commonPrefix.length;
      }
    }
    return lengthTotal;
  }

  getCommonPrefix(input: string, suffix: string) {
    let len = suffix.length;
    let prefix = '';
    for (let i = 0; i < len; i += 1) {
      if (suffix[i] === input[i]) {
        prefix += input[i];
      } else {
        break;
      }
    }
    return prefix;
  }
}
