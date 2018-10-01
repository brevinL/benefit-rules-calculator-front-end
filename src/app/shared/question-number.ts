import { QuestionBase } from './question-base';

export class NumberQuestion extends QuestionBase<number> {
  controlType: string = 'number';
  min: number;
  max: number;

  constructor(options: {} = {}) {
    super(options);
	this.min = options['min'];
    this.max = options['max'];
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/