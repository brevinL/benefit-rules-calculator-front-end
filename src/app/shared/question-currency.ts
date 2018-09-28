import { NumberQuestion } from './question-number';

export class CurrencyQuestion extends NumberQuestion {
  constructor(options: {} = {}) {
    super(options);
    this.type = 'currency';
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/